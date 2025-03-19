import { UserData, Macros } from "./types";

export const calculateMacros = (data: UserData): Macros => {
  // BMR (Mifflin-St Jeor Equation)
  const bmr =
    data.gender === "male"
      ? 10 * data.weight + 6.25 * data.height - 5 * data.age + 5
      : 10 * data.weight + 6.25 * data.height - 5 * data.age - 161;

  // Activity multipliers
  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    "very active": 1.9,
  };
  const tdee = bmr * activityFactors[data.activityLevel];

  // Adjust for goal
  let calories = tdee;
  if (data.goal === "lose") calories -= 500; // 1 lb/week deficit
  if (data.goal === "gain") calories += 250; // 0.5 lb/week surplus

  // Macros: 40% protein, 30% carbs, 30% fats (adjustable)
  const protein = (calories * 0.4) / 4; // 4 cal/g
  const carbs = (calories * 0.3) / 4;
  const fats = (calories * 0.3) / 9; // 9 cal/g

  return { calories: Math.round(calories), protein, carbs, fats };
};