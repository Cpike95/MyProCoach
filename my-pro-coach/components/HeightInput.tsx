import { useState } from "react";

interface HeightInputProps {
  value: number; // Height in centimeters (internal base unit)
  onChange: (value: number) => void; // Callback to update parent state (in cm)
}

const HeightInput: React.FC<HeightInputProps> = ({ value, onChange }) => {
  const [unit, setUnit] = useState<"cm" | "ft-in">("cm"); // Default to centimeters
  const [cmValue, setCmValue] = useState<string>(value.toString()); // cm input
  const [feetValue, setFeetValue] = useState<string>(""); // ft input
  const [inchesValue, setInchesValue] = useState<string>(""); // in input

  // Conversion factors
  const INCHES_TO_CM = 2.54;
  const FEET_TO_CM = 12 * INCHES_TO_CM;

  // Convert cm to ft/in for display when toggling
  const cmToFeetInches = (cm: number) => {
    const totalInches = cm / INCHES_TO_CM;
    const feet = Math.floor(totalInches / 12);
    const inches = (totalInches % 12).toFixed(1);
    return { feet, inches };
  };

  // Handle cm input change
  const handleCmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setCmValue(input);
    const numericValue = parseFloat(input) || 0;
    onChange(numericValue);
  };

  // Handle feet input change
  const handleFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setFeetValue(input);
    const feet = parseFloat(input) || 0;
    const inches = parseFloat(inchesValue) || 0;
    const cmValue = feet * FEET_TO_CM + inches * INCHES_TO_CM;
    onChange(cmValue);
  };

  // Handle inches input change
  const handleInchesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setInchesValue(input);
    const feet = parseFloat(feetValue) || 0;
    const inches = parseFloat(input) || 0;
    const cmValue = feet * FEET_TO_CM + inches * INCHES_TO_CM;
    onChange(cmValue);
  };

  // Toggle unit and convert values
  const toggleUnit = () => {
    const newUnit = unit === "cm" ? "ft-in" : "cm";
    setUnit(newUnit);

    if (newUnit === "ft-in") {
      // Convert cm to ft/in
      const { feet, inches } = cmToFeetInches(parseFloat(cmValue) || 0);
      setFeetValue(feet.toString());
      setInchesValue(inches);
    } else {
      // Convert ft/in to cm
      const feet = parseFloat(feetValue) || 0;
      const inches = parseFloat(inchesValue) || 0;
      const cm = feet * FEET_TO_CM + inches * INCHES_TO_CM;
      setCmValue(cm.toFixed(1));
      onChange(cm); // Ensure parent updates
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {unit === "cm" ? (
        <input
          type="number"
          value={cmValue}
          onChange={handleCmChange}
          onFocus={() => cmValue === "" ? undefined : cmValue}
          className="w-24 p-2 border rounded focus:ring-2 focus:ring-blue-500"
          placeholder="Height in cm"
          step="0.1"
        />
      ) : (
        <div className="flex space-x-2">
          <input
            type="number"
            value={feetValue}
            onFocus={() => feetValue === "" ? undefined : feetValue }
            onChange={handleFeetChange}
            className="w-16 p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Feet"
            step="1"
          />
          <input
            type="number"
            value={inchesValue ? inchesValue : ""}
            onChange={handleInchesChange}
            className="w-16 p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Inches"
            step="0.1"
            max="11.9"
          />
        </div>
      )}
      <button
        type="button"
        onClick={toggleUnit}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {unit === "cm" ? "Switch to ft/in" : "Switch to cm"}
      </button>
    </div>
  );
};

export default HeightInput;