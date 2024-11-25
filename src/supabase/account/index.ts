import { supabase } from "@/supabase";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fillProfileInfo = async (payload: any) => {
  const { data, error } = await supabase.from("profiles").upsert(payload);
  if (error) {
    if (error.code === "23505") {
      throw new Error(`Username is already taken`);
    }
    throw error;
  }
  return data;
};

export const getProfile = async (profileId: string | number) => {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", profileId);

  return data;
};
