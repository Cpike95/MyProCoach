import { useState } from "react";

interface GoalSelectProps {
  value: string; // Height in centimeters (internal base unit)
  onChange: (value: string) => void; // Callback to update parent state (in cm)
}
const GoalSelect : React.FC<GoalSelectProps> = ({ value, onChange }) => {
  const [goal, setGoal] = useState<string>()
  const [checked, setCheck] = useState<boolean>();

  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const goalSelect = e.target.value;

    switch (goalSelect) {
      case "maintain":
        setGoal(goalSelect)
        break;
        
      case "gain":
        setGoal(goalSelect)
        break;

      case "lose":
        setGoal(goalSelect)
        break;

    }
   
    onChange(goalSelect)
  }

  return (
    <div>
          <label className="block">Goal:</label>
          <div className="w-64 flex flex-row items-center">
            <div className="flex-col items-center">
              <input
                type="radio"
                id="maintain"
                name="maintain"
                value="female"
                onChange={handleGoalChange}
                checked={goal === 'maintain'}
                className="w-full p-2 border"
              />
              <label htmlFor="maintain" >Maintain Weight</label>
            </div>
            <div className="flex-col items-center">
              <input
                type="radio"
                id="Gain Muscle"
                name="gain"
                value="gain"
                onChange={handleGoalChange}
                checked={goal  === 'gain'}
                className="w-full p-2 border"
              />
              <label htmlFor="gain">Gain</label>
            </div>
            <div className="flex-col items-center">
              <input
                type="radio"
                id="Lose Weight"
                name="lose"
                value="lose"
                onChange={handleGoalChange}
                checked={goal  === 'lose'}
                className="w-full p-2 border"
              />
              <label htmlFor="lose">Lose</label>
            </div>
          </div>
      </div>
  )




};

export default GoalSelect;