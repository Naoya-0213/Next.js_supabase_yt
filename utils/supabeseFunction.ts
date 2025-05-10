import { supabase } from "./supabase";

// 取得
export const getAllTodos = async () => {
  const todos = await supabase.from("Todo_Next.js_Supabase").select("*");
  return todos.data;
};
