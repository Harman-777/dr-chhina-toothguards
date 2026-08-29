"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import { CLINIC } from "@/lib/constants";

export interface Appointment {
  id: string | number;
  patient_name: string;
  phone: string;
  email?: string | null;
  service: string;
  preferred_date: string;
  time_slot: string;
  notes?: string | null;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  created_at?: string;
}

type StatusFilter = "all" | "pending" | "confirmed" | "completed" | "cancelled";

const ADMIN_PIN = process.env.NEXT_PUBLIC_ADMIN_PIN || "7770";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>("");
  const [pinError, setPinError] = useState<string>("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [updatingId, setUpdatingId] = useState<string | number | null>(null);
  const [actionNotice, setActionNotice] = useState<string>("");

  // Check existing session
  useEffect(() => {
    const savedAuth = typeof window !== "undefined" ? sessionStorage.getItem("tg_admin_pin_auth") : null;
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePinSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (pinInput === ADMIN_PIN) {
      setIsAuthenticated(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("tg_admin_pin_auth", "true");
      }
      setPinError("");
    } else {
      setPinError("Invalid PIN. Please enter the 4-digit doctor code.");
      setPinInput("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPinInput("");
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("tg_admin_pin_auth");
    }
  };

  // Fetch appointments via server-side API (bypasses RLS with service role key)
  const fetchAppointments = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const res = await fetch(`/api/admin?pin=${encodeURIComponent(ADMIN_PIN)}`);
      const json = await res.json();

      if (res.ok && json.data) {
        setAppointments(json.data as Appointment[]);
      } else {
        console.error("Error fetching appointments:", json.error);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    fetchAppointments();

    // Poll for new appointments every 10 seconds (replaces realtime which requires RLS config)
    const interval = setInterval(() => {
      fetchAppointments(true);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [isAuthenticated, fetchAppointments]);

  // Update Status via server-side API (bypasses RLS)
  const handleUpdateStatus = async (
    id: string | number,
    newStatus: Appointment["status"],
    patientName: string
  ) => {
    setUpdatingId(id);

    // Optimistic UI update
    setAppointments((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );

    try {
      const res = await fetch("/api/admin", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus, pin: ADMIN_PIN }),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        console.error("Failed to update status:", json.error);
        setActionNotice(`Failed to update status: ${json.error}`);
        // Revert by re-fetching
        fetchAppointments(true);
      } else {
        setActionNotice(`Updated ${patientName}'s status to ${newStatus.toUpperCase()}`);
        setTimeout(() => setActionNotice(""), 4000);
      }
    } catch (err) {
      console.error("Update error:", err);
      setActionNotice("Network error updating status.");
      fetchAppointments(true);
    } finally {
      setUpdatingId(null);
    }
  };

  // Filtered & Searched Appointments
  const filteredAppointments = useMemo(() => {
    return appointments.filter((item) => {
      const matchesStatus =
        statusFilter === "all" ? true : item.status === statusFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.patient_name?.toLowerCase().includes(q) ||
        item.phone?.includes(q) ||
        item.service?.toLowerCase().includes(q) ||
        item.notes?.toLowerCase().includes(q);

      return matchesStatus && matchesSearch;
    });
  }, [appointments, statusFilter, searchQuery]);

  // Status Counts
  const counts = useMemo(() => {
    return {
      all: appointments.length,
      pending: appointments.filter((a) => a.status === "pending").length,
      confirmed: appointments.filter((a) => a.status === "confirmed").length,
      completed: appointments.filter((a) => a.status === "completed").length,
      cancelled: appointments.filter((a) => a.status === "cancelled").length,
    };
  }, [appointments]);

  // WhatsApp Helper
  const getWhatsAppHref = (appointment: Appointment) => {
    const cleanPhone = appointment.phone.replace(/\D/g, "");
    const phoneWithCode = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
    const msg = `Hello ${appointment.patient_name}, this is Dr. Chhina's Tooth Guards. We are confirming your appointment for ${appointment.service} on ${appointment.preferred_date} (${appointment.time_slot}). Please let us know if this time works for you!`;
    return `https://wa.me/${phoneWithCode}?text=${encodeURIComponent(msg)}`;
  };

  // Helper formatting for status colors
  const getStatusBadge = (status: Appointment["status"]) => {
    switch (status) {
      case "pending":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "confirmed":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "completed":
        return "bg-sky-100 text-sky-800 border-sky-300";
      case "cancelled":
        return "bg-rose-100 text-rose-800 border-rose-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  // PIN Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-surface-mint flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-primary/10 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-3xl mx-auto shadow-lg shadow-primary/20">
            🔐
          </div>

          <div className="space-y-1">
            <h1 className="font-heading font-extrabold text-2xl text-foreground">
              Doctor Console
            </h1>
            <p className="text-xs text-foreground-muted font-medium">
              Dr. Chhina&apos;s Tooth Guards — Appointment Manager
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-foreground mb-2">
                Enter Doctor PIN
              </label>
              <input
                type="password"
                maxLength={6}
                autoFocus
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="• • • •"
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError("");
                }}
                className="w-full text-center text-3xl tracking-[0.4em] py-3.5 px-4 rounded-2xl border-2 border-primary/20 bg-surface-mint/40 text-foreground font-mono focus:border-primary focus:bg-white outline-none transition-all"
              />
              {pinError && (
                <p className="text-xs font-semibold text-rose-600 mt-2">
                  {pinError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-primary text-white font-bold text-base shadow-xl shadow-primary/25 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Unlock Console
            </button>
          </form>

          <div className="pt-4 border-t border-border-light text-center">
            <Link
              href="/"
              className="text-xs font-semibold text-primary hover:underline"
            >
              ← Back to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#F7FAF9] text-foreground pb-20">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-border-light shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
              TG
            </div>
            <div>
              <h1 className="font-heading font-extrabold text-lg sm:text-xl text-foreground leading-none">
                Dr. Chhina&apos;s Console
              </h1>
              <p className="text-[11px] text-foreground-muted font-medium mt-0.5">
                Live Appointment & Patient Manager
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => fetchAppointments(true)}
              disabled={refreshing}
              title="Refresh Bookings"
              className="p-2.5 rounded-2xl bg-surface-mint text-primary hover:bg-primary-light border border-primary/15 transition-all text-xs font-bold flex items-center gap-1.5"
            >
              <span className={refreshing ? "animate-spin inline-block" : ""}>
                🔄
              </span>
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-2xl bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-bold transition-colors"
            >
              Lock Console
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
        {/* Action Notice Alert */}
        {actionNotice && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold shadow-sm flex items-center justify-between animate-fadeIn">
            <span>✨ {actionNotice}</span>
            <button
              onClick={() => setActionNotice("")}
              className="text-emerald-700 hover:text-emerald-900 text-sm font-bold"
            >
              ✕
            </button>
          </div>
        )}

        {/* Stats Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          <button
            onClick={() => setStatusFilter("all")}
            className={`p-4 rounded-2xl border text-left transition-all ${
              statusFilter === "all"
                ? "bg-primary text-white border-primary shadow-md scale-[1.02]"
                : "bg-white text-foreground border-border-light hover:border-primary/30"
            }`}
          >
            <p className="text-[11px] font-bold uppercase tracking-wider opacity-80">Total</p>
            <p className="text-2xl sm:text-3xl font-extrabold font-heading mt-1">{counts.all}</p>
          </button>

          <button
            onClick={() => setStatusFilter("pending")}
            className={`p-4 rounded-2xl border text-left transition-all ${
              statusFilter === "pending"
                ? "bg-amber-500 text-white border-amber-600 shadow-md scale-[1.02]"
                : "bg-white text-foreground border-border-light hover:border-amber-400"
            }`}
          >
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Pending</p>
            <p className="text-2xl sm:text-3xl font-extrabold font-heading text-amber-600 mt-1">{counts.pending}</p>
          </button>

          <button
            onClick={() => setStatusFilter("confirmed")}
            className={`p-4 rounded-2xl border text-left transition-all ${
              statusFilter === "confirmed"
                ? "bg-emerald-600 text-white border-emerald-700 shadow-md scale-[1.02]"
                : "bg-white text-foreground border-border-light hover:border-emerald-400"
            }`}
          >
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Confirmed</p>
            <p className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-600 mt-1">{counts.confirmed}</p>
          </button>

          <button
            onClick={() => setStatusFilter("completed")}
            className={`p-4 rounded-2xl border text-left transition-all ${
              statusFilter === "completed"
                ? "bg-sky-600 text-white border-sky-700 shadow-md scale-[1.02]"
                : "bg-white text-foreground border-border-light hover:border-sky-400"
            }`}
          >
            <p className="text-[11px] font-bold uppercase tracking-wider text-sky-700">Completed</p>
            <p className="text-2xl sm:text-3xl font-extrabold font-heading text-sky-600 mt-1">{counts.completed}</p>
          </button>

          <button
            onClick={() => setStatusFilter("cancelled")}
            className={`col-span-2 sm:col-span-1 p-4 rounded-2xl border text-left transition-all ${
              statusFilter === "cancelled"
                ? "bg-rose-600 text-white border-rose-700 shadow-md scale-[1.02]"
                : "bg-white text-foreground border-border-light hover:border-rose-400"
            }`}
          >
            <p className="text-[11px] font-bold uppercase tracking-wider text-rose-700">Cancelled</p>
            <p className="text-2xl sm:text-3xl font-extrabold font-heading text-rose-600 mt-1">{counts.cancelled}</p>
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-3xl border border-border-light shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <span className="absolute left-3.5 top-3 text-foreground-muted text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search by patient name, phone, or treatment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-2xl border border-border-light bg-surface-mint/30 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-2.5 text-xs text-foreground-muted hover:text-foreground"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {(["all", "pending", "confirmed", "completed", "cancelled"] as StatusFilter[]).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold capitalize whitespace-nowrap transition-colors ${
                  statusFilter === st
                    ? "bg-primary text-white shadow-sm"
                    : "bg-gray-100 text-foreground-muted hover:bg-gray-200"
                }`}
              >
                {st} ({counts[st]})
              </button>
            ))}
          </div>
        </div>

        {/* Appointments List */}
        {loading ? (
          <div className="py-20 text-center space-y-3">
            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
            <p className="text-xs font-bold text-foreground-muted">Loading appointments from Supabase...</p>
          </div>
        ) : filteredAppointments.length === 0 ? (
          <div className="bg-white rounded-3xl border border-border-light p-12 text-center space-y-4 shadow-sm">
            <div className="text-5xl">📋</div>
            <h3 className="font-heading font-extrabold text-xl text-foreground">
              No Appointments Found
            </h3>
            <p className="text-xs text-foreground-muted max-w-sm mx-auto font-medium">
              {searchQuery
                ? `No bookings match your search "${searchQuery}".`
                : statusFilter !== "all"
                ? `No appointments currently marked as "${statusFilter}".`
                : "No appointment bookings have been recorded yet."}
            </p>
            {(searchQuery || statusFilter !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("all");
                }}
                className="px-4 py-2 rounded-2xl bg-primary-light text-primary text-xs font-bold hover:bg-primary-light/80"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredAppointments.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-3xl border border-border-mint p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group relative overflow-hidden"
              >
                {/* Status Indicator Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    app.status === "pending"
                      ? "bg-amber-400"
                      : app.status === "confirmed"
                      ? "bg-emerald-500"
                      : app.status === "completed"
                      ? "bg-sky-500"
                      : "bg-rose-400"
                  }`}
                />

                {/* Patient Header & Status Pill */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-foreground tracking-tight">
                        {app.patient_name}
                      </h3>
                      <p className="text-xs font-semibold text-primary mt-0.5">
                        {app.service}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border ${getStatusBadge(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                  </div>

                  {/* Date & Time Slot Badge */}
                  <div className="p-3 rounded-2xl bg-surface-mint/70 border border-primary/10 flex items-center justify-between text-xs font-bold text-foreground">
                    <span className="flex items-center gap-1.5">
                      📅 {app.preferred_date}
                    </span>
                    <span className="flex items-center gap-1 text-primary-dark">
                      ⏰ {app.time_slot}
                    </span>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-1.5 text-xs text-foreground-muted font-medium pt-1">
                    <div className="flex items-center gap-2">
                      <span>📱 Phone:</span>
                      <strong className="text-foreground font-bold">{app.phone}</strong>
                    </div>
                    {app.email && (
                      <div className="flex items-center gap-2 truncate">
                        <span>✉️ Email:</span>
                        <span className="text-foreground truncate">{app.email}</span>
                      </div>
                    )}
                    {app.notes && (
                      <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 text-xs mt-2 italic">
                        &quot;{app.notes}&quot;
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="space-y-3 pt-3 border-t border-border-light">
                  {/* Call & WhatsApp CTAs */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${app.phone}`}
                      className="py-2.5 px-3 rounded-2xl bg-primary-light text-primary hover:bg-primary hover:text-white border border-primary/20 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      📞 Call
                    </a>
                    <a
                      href={getWhatsAppHref(app)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-2xl bg-[#25D366]/15 text-[#128C7E] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      💬 WhatsApp
                    </a>
                  </div>

                  {/* Status Change Selector */}
                  <div className="flex items-center gap-1 pt-1">
                    <span className="text-[10px] font-bold uppercase text-foreground-muted tracking-wider mr-1">
                      Status:
                    </span>
                    {(["pending", "confirmed", "completed", "cancelled"] as Appointment["status"][]).map(
                      (st) => (
                        <button
                          key={st}
                          onClick={() => handleUpdateStatus(app.id, st, app.patient_name)}
                          disabled={updatingId === app.id}
                          className={`flex-1 py-1 rounded-xl text-[10px] font-bold capitalize transition-all ${
                            app.status === st
                              ? "bg-foreground text-white shadow-sm"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          } disabled:opacity-50`}
                        >
                          {st.slice(0, 4)}
                        </button>
                      )
                    )}
                  </div>

                  {/* Creation Time Footer */}
                  {app.created_at && (
                    <p className="text-[10px] text-gray-400 text-right pt-1 font-mono">
                      Received: {new Date(app.created_at).toLocaleDateString("en-IN", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
