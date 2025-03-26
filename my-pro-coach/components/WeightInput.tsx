import { useState } from "react";

interface WeightInputProps {
  value: number; // Weight in kilograms (internal state uses kg as base unit)
  onChange: (value: number) => void; // Callback to update parent state (in kg)
}

const WeightInput: React.FC<WeightInputProps> = ({ value, onChange }) => {
  const [unit, setUnit] = useState<"kg" | "lbs">("kg"); // Default to kilograms
  const [displayValue, setDisplayValue] = useState<string>(value.toString()); // What the user sees

  // Conversion factors
  const POUNDS_TO_KG = 0.45359237;
  const KG_TO_POUNDS = 1 / POUNDS_TO_KG;

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setDisplayValue(input);

    // Convert to kg for parent state
    const numericValue = parseFloat(input) || 0;
    const kgValue = unit === "lbs" ? numericValue * POUNDS_TO_KG : numericValue;
    onChange(kgValue);
  };

  // Toggle unit and convert displayed value
  const toggleUnit = () => {
    const newUnit = unit === "kg" ? "lbs" : "kg";
    setUnit(newUnit);

    const numericValue = parseFloat(displayValue) || 0;
    const convertedValue =
      unit === "kg" ? numericValue * KG_TO_POUNDS : numericValue * POUNDS_TO_KG;
    setDisplayValue(convertedValue.toFixed(1)); // Round to 1 decimal for display
    onChange(unit === "kg" ? convertedValue * POUNDS_TO_KG : convertedValue); // Keep parent in kg
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="number"
        value={displayValue}
        onChange={handleInputChange}
        className="w-24 p-2 border rounded focus:ring-2 focus:ring-blue-500"
        placeholder={`Weight in ${unit}`}
        step="0.1"
      />
      <button
        type="button"
        onClick={toggleUnit}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {unit === "kg" ? "Switch to lbs" : "Switch to kg"}
      </button>
    </div>
  );
};

export default WeightInput;