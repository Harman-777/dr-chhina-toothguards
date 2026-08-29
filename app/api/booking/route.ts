import { NextResponse } from "next/server";
import { supabase, getServiceSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      patient_name,
      phone,
      email,
      service,
      date,
      preferred_date,
      timeSlot,
      time_slot,
      notes,
    } = body;

    const patientName = patient_name || name;
    const preferredDate = preferred_date || date;
    const preferredTimeSlot = time_slot || timeSlot;

    if (!patientName || !phone || !preferredDate) {
      return NextResponse.json(
        { error: "Name, phone, and date are required fields." },
        { status: 400 }
      );
    }

    console.log("New Dental Booking Received:", {
      patient_name: patientName,
      phone,
      email,
      service,
      preferred_date: preferredDate,
      time_slot: preferredTimeSlot,
      notes,
      status: "pending",
      timestamp: new Date().toISOString(),
    });

    let client = supabase;
    try {
      client = getServiceSupabase();
    } catch {
      client = supabase;
    }

    const { data, error } = await client
      .from("appointments")
      .insert([
        {
          patient_name: patientName,
          phone: String(phone).trim(),
          email: email ? String(email).trim() : null,
          service: service || "General Dentistry",
          preferred_date: preferredDate,
          time_slot: preferredTimeSlot || "10:00 AM",
          notes: notes ? String(notes).trim() : null,
          status: "pending",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to save appointment to database." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Appointment booking received successfully.",
      data: data?.[0] || null,
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

