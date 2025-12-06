import { supabase } from "../config/db";
import { Student } from "../types/types";

type StudentData = Omit<Student, "id">;

//Add student
export const addStudent = async (studentData: StudentData) => {
  try {
    const { data, error } = await supabase.from("students").insert(studentData).select("*").single();
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
export const editStudent = async (id: number, studentData: Partial<StudentData>) => {
  try {
    const { data, error } = await supabase.from("students").update(studentData).eq("id", id).select("*").single();
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
    return true; // Return true on success
  } catch (error) {
    console.error("Error deleting student:", error);
    throw error;
  }
};

//Get student
export const getStudents = async (): Promise<Student[]> => {
  try {
    const { data, error } = await supabase.from("students").select("*");
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error getting students:", error);
    throw error;
  }
};

export const getStudentbyID = async (id: number): Promise<Student | null> => {
  try {
    const { data, error } = await supabase.from("students").select("*").eq("id", id).single();

    if (error) {
      if (error.code === 'PGRST116') return null;
      throw error;
    }
    return data;
  } catch (error) {
    console.error(`Error getting student by ID ${id}:`, error);
    throw error;
  }
};