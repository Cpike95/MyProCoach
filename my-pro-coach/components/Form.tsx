import { UserData } from "@/lib/types";
import { useState } from "react";
import WeightInput from "./WeightInput";
import HeightInput from "./HeightInput";
import GoalSelect from "./GoalSelect";
import FoodMultiSelect from "./FoodMultiSelect";

const Form: React.FC<{ onSubmit: (data: UserData) => void }> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    height: 0,
    weight: 0,
    age: 0 ,
    gender: "",
    goal: "",
    diet: "omnivore",
    favoriteFoods: [],
    activityLevel: "sedentary",
    favoriteActivities: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    console.log('form data',formData)
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4">
      <div className="flex-col">
        <div className="mb-5">
          <GoalSelect 
            value={formData.goal}
            onChange={(value) => setFormData({...formData, goal: value })}
            />
        </div>
        <div className="mb-5">
          <label className="block">Gender:</label>
          <div className="w-64 flex flex-row items-center">
            <div className="flex-col items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full p-2 border"
              />
              <label htmlFor="female" >Female</label>
            </div>
            <div className="flex-col items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full p-2 border"
              />
              <label htmlFor="male">Male</label>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label className="block">Height:</label>
          <HeightInput 
            value={formData.height}
            onChange={(value) => setFormData({...formData, height: value})}
            />
        </div>
        <div className="mb-5">
          <label className="block">Weight:</label>
          <WeightInput 
            value={formData.weight} 
            onChange={(weightInKg) => setFormData({...formData, weight: weightInKg})}
            />
        </div>
        <div className="mb-5">
          <label className="block">Age(years):</label>
          <input
            type="number"
            value={formData.age ? formData.age : ""}
            onChange={(e) => setFormData({ ...formData, age: +e.target.value })}
            className="w-full p-2 border"
          />
        </div>
        
        <div>
        <label className="block">Favorite Foods:</label>
        <FoodMultiSelect
          value={formData.favoriteFoods}
          onChange={(foods) => setFormData({ ...formData, favoriteFoods: foods })}
        />
      </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Calculate
      </button>
    </form>
  );
};

export default Form;