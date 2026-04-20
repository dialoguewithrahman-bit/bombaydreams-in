"use server";

import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function submitApplyForm(
  prevState: { success: boolean; message: string },
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const profession = formData.get("profession") as string;
  const instagram = formData.get("instagram") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !profession) {
    return { success: false, message: "Name, email, and profession are required." };
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from("applications").insert([
      { name, email, phone, profession, instagram, message },
    ]);

    if (error) throw error;
    return { success: true, message: "Application submitted! We'll be in touch within 48 hours." };
  } catch (err) {
    console.error("Apply form error:", err);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

export async function submitBrandForm(
  prevState: { success: boolean; message: string },
  formData: FormData
) {
  const company = formData.get("company") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const campaign_type = formData.get("campaign_type") as string;
  const budget = formData.get("budget") as string;
  const brief = formData.get("brief") as string;

  if (!company || !email || !campaign_type) {
    return { success: false, message: "Company, email, and campaign type are required." };
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from("brand_inquiries").insert([
      { company, name, email, campaign_type, budget, brief },
    ]);

    if (error) throw error;
    return { success: true, message: "Inquiry submitted! You'll receive a shortlist within 24 working hours." };
  } catch (err) {
    console.error("Brand form error:", err);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
