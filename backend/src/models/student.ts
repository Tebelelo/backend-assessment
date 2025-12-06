import { supabase } from "../config/db.ts";

//Add student
export const addStudent = async (
  name: string,
  age: number,
  email: string
) => {
  try {
    const { data, error } = await supabase
      .from("students")
      .insert({ name, age, email })
      .select("*")
      .single();
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error adding student:", error);
    throw error;
  }
};

//Edit student
export const editStudent = async (
  id: number,
  name: string,
  age: number,
  email: string
) => {
  try {
    const { data, error } = await supabase
      .from("students")
      .update({ name, age, email })
      .eq("id", id)
      .select("*")
      .single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error editing student:", error);
    throw error;
  }
};

//Delete student
export const deleteStudent = async (id: number) => {
  try {
    const { error } = await supabase.from("students").delete().eq("id", id);
    if (error) throw error;
    return { message: "Student deleted successfully" };
  } catch (error) {
    console.error("Error deleting student:", error);
    throw error;
  }
};

//Get student
export const getStudents = async (id?: number) => {
  let query = supabase.from("students").select("*");
  if (id) {
    query = query.eq("id", id).single();
  }
  const { data, error } = await query;
  if (error) throw error;
  return data;
};