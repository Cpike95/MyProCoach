import { UserData, WorkoutPlan } from "./types";

export const generateWorkoutPlan = (data: UserData): WorkoutPlan => {
  const baseActivities = data.favoriteActivities;
  const plans = {
    lose: [...baseActivities, "HIIT", "cardio intervals"],
    gain: [...baseActivities, "deadlifts", "bench press", "squats"],
    maintain: [...baseActivities, "circuit training", "yoga"],
  };
  const activities = plans[data.goal];

  return {
    days: [
      { day: "Monday", activities: [activities[0], activities[1]] },
      { day: "Wednesday", activities: [activities[2], "rest"] },
      { day: "Friday", activities: [activities[0], activities[3] || "core"] },
    ],
  };
};