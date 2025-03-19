import { Macros, MealPlan, WorkoutPlan } from "../lib/types";

const Results: React.FC<{ data: { macros: Macros; mealPlan: MealPlan; workoutPlan: WorkoutPlan } }> = ({ data }) => (
  <div className="mt-8 p-4 bg-white rounded shadow w-full max-w-lg">
    <h2 className="text-2xl">Your Plan</h2>
    <div>
      <h3>Macros</h3>
      <p>Calories: {data.macros.calories} kcal</p>
      <p>Protein: {data.macros.protein.toFixed(1)}g</p>
      <p>Carbs: {data.macros.carbs.toFixed(1)}g</p>
      <p>Fats: {data.macros.fats.toFixed(1)}g</p>
    </div>
    <div>
      <h3>Meal Plan</h3>
      <p>Breakfast: {data.mealPlan.breakfast}</p>
      <p>Lunch: {data.mealPlan.lunch}</p>
      <p>Dinner: {data.mealPlan.dinner}</p>
      <p>Snacks: {data.mealPlan.snacks.join(", ")}</p>
    </div>
    <div>
      <h3>Workout Plan</h3>
      {data.workoutPlan.days.map((d) => (
        <p key={d.day}>
          {d.day}: {d.activities.join(", ")}
        </p>
      ))}
    </div>
  </div>
);

export default Results;