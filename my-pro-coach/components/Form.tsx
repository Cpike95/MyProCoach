import { UserData } from "@/lib/types";
import { useState } from "react";

const Form: React.FC<{ onSubmit: (data: UserData) => void }> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    height: 0,
    weight: 0,
    age: 0,
    gender: "male",
    goal: "maintain",
    diet: "omnivore",
    favoriteFoods: [],
    activityLevel: "sedentary",
    favoriteActivities: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4">
      <div>
        <label className="block">Height (cm):</label>
        <input
          type="number"
          value={formData.height}
          onChange={(e) => setFormData({ ...formData, height: +e.target.value })}
          className="w-full p-2 border"
        />
      </div>
      {/* Repeat for weight, age, gender (select), etc. */}
      <div>
        <label>Favorite Foods (comma-separated):</label>
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, favoriteFoods: e.target.value.split(",") })}
          className="w-full p-2 border"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Calculate
      </button>
    </form>
  );
};

export default Form;