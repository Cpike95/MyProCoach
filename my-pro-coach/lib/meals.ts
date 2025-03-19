import { UserData, MealPlan, Macros } from "./types";

export const generateMealPlan = (data: UserData, macros: Macros): MealPlan => {
  const foodMap = {
    omnivore: [...data.favoriteFoods, "chicken", "beef", "eggs", "rice"],
    vegetarian: [...data.favoriteFoods, "lentils", "tofu", "quinoa"],
    vegan: [...data.favoriteFoods, "beans", "tempeh", "oats"],
    keto: [...data.favoriteFoods, "avocado", "nuts", "coconut oil"],
  };
  const foods = foodMap[data.diet];

  return {
    breakfast: `${foods[0]} scramble with veggies (${Math.round(macros.protein / 3)}g protein)`,
    lunch: `${foods[1]} salad with ${foods[2]} (${Math.round(macros.carbs / 2)}g carbs)`,
    dinner: `${foods[3]} with grilled ${foods[0]} (${Math.round(macros.fats / 2)}g fats)`,
    snacks: [foods[4] || "protein shake", foods[5] || "nuts"],
  };
};