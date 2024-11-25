import { supabase } from "@/supabase";

export const register = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signUp({ email, password });
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await supabase.auth.signInWithPassword({ email, password });

    if (res.error) {
      throw res.error;
    }

    return res;
  } catch (error) {
    console.log("Login failed");
    throw error;
  }
};

export const logout = () => {
  return supabase.auth.signOut();
};
