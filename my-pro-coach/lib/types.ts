export interface UserData {
  height: number; // cm
  weight: number; // kg
  age: number;
  gender: "male" | "female";
  goal: "lose" | "gain" | "maintain";
  diet: "omnivore" | "vegetarian" | "vegan" | "keto";
  favoriteFoods: string[]; // e.g., ["chicken", "broccoli", "rice"]
  activityLevel: "sedentary" | "light" | "moderate" | "active" | "very active";
  favoriteActivities: string[]; // e.g., ["skateboarding", "lifting", "running"]
}

export interface Macros {
  calories: number;
  protein: number; // grams
  carbs: number;   // grams
  fats: number;    // grams
}

export interface MealPlan {
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string[];
}

export interface WorkoutPlan {
  days: { day: string; activities: string[] }[];
}