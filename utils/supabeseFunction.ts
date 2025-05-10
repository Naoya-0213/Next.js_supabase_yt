import { supabase } from "./supabase";

// 取得
export const getAllTodos = async () => {
  const todos = await supabase.from("Todo_Next.js_Supabase").select("*");
  return todos.data;
};

// 追加
export const addTodo = async (title: string) => {
  await supabase.from("Todo_Next.js_Supabase").insert({ title: title });
};

// 削除
export const deleteTodo = async (id: number) => {
  await supabase.from("Todo_Next.js_Supabase").delete().eq("id", id);
};
