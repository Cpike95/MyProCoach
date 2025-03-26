import { useState } from "react";

// Define the available food options (extensible list)
const FOOD_OPTIONS = [
  "chicken",
  "beef",
  "fish",
  "eggs",
  "tofu",
  "lentils",
  "beans",
  "rice",
  "quinoa",
  "pasta",
  "broccoli",
  "spinach",
  "avocado",
  "sweet potato",
  "oats",
  "nuts",
  "yogurt",
  "cheese",
  "salmon",
  "turkey",
  // Add more foods here as needed
];

interface FoodMultiSelectProps {
  value: string[]; // Selected foods
  onChange: (value: string[]) => void; // Callback to update parent state
}

const FoodMultiSelect: React.FC<FoodMultiSelectProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle selection toggle
  const handleToggleFood = (food: string) => {
    const newValue = value.includes(food)
      ? value.filter((f) => f !== food) // Remove if already selected
      : [...value, food]; // Add if not selected
    onChange(newValue);
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {value.length > 0 ? `${value.join(", ")}` : "Select your favorite foods"}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {FOOD_OPTIONS.map((food) => (
            <label
              key={food}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={value.includes(food)}
                onChange={() => handleToggleFood(food)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">{food}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodMultiSelect;