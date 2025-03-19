import type { NextApiRequest, NextApiResponse } from "next";
import { UserData, Macros, MealPlan, WorkoutPlan } from "../lib/types";
import { calculateMacros } from "@/lib/macros";
import { generateMealPlan } from "@/lib/meals";
import {  generateWorkoutPlan } from "@/lib/workouts";

export default function handler(data: UserData) {

  const macros = calculateMacros(data);
  const mealPlan = generateMealPlan(data, macros);
  const workoutPlan = generateWorkoutPlan(data);

  return {macros, mealPlan, workoutPlan}
}