import { NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase";

// GET: Fetch all appointments (uses service role key to bypass RLS)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pin = searchParams.get("pin");
    const adminPin = process.env.NEXT_PUBLIC_ADMIN_PIN || "7770";

    if (pin !== adminPin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = getServiceSupabase();

    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Admin fetch error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to fetch appointments." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: data || [] });
  } catch (error) {
    console.error("Admin API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PATCH: Update appointment status (uses service role key to bypass RLS)
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status, pin } = body;
    const adminPin = process.env.NEXT_PUBLIC_ADMIN_PIN || "7770";

    if (pin !== adminPin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!id || !status) {
      return NextResponse.json(
        { error: "Appointment ID and status are required." },
        { status: 400 }
      );
    }

    const validStatuses = ["pending", "confirmed", "completed", "cancelled"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${validStatuses.join(", ")}` },
        { status: 400 }
      );
    }

    const supabase = getServiceSupabase();

    const { data, error } = await supabase
      .from("appointments")
      .update({ status })
      .eq("id", id)
      .select();

    if (error) {
      console.error("Admin update error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to update appointment." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Appointment status updated to ${status}.`,
      data: data?.[0] || null,
    });
  } catch (error) {
    console.error("Admin PATCH error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
