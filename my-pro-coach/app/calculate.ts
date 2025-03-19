import type { NextApiRequest, NextApiResponse } from "next";
import { UserData, Macros, MealPlan, WorkoutPlan } from "../lib/types";
import { calculateMacros } from "@/lib/macros";
import { generateMealPlan } from "@/lib/meals";
import {  generateWorkoutPlan } from "@/lib/workouts";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("hi")
  if (req.method !== "POST") return res.status(405).end();
  const data: UserData = req.body;

  const macros = calculateMacros(data);
  const mealPlan = generateMealPlan(data, macros);
  const workoutPlan = generateWorkoutPlan(data);

  res.status(200).json({ macros, mealPlan, workoutPlan });
}