/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import Model, { IExerciseData, IMuscleStats } from "react-body-highlighter";

interface Props {
  showHead: boolean;
  showChest: boolean;
  showArm: boolean;
  showAbs: boolean;
  showLeg: boolean;
  showBack: boolean;
}

const HumanBody = ({
  showHead,
  showChest,
  showArm,
  showAbs,
  showLeg,
  showBack,
}: Props) => {
  const Head: IExerciseData | null = showHead
    ? { name: "Head", muscles: ["head", "neck"] }
    : null;

  const Chest: IExerciseData | null = showChest
    ? { name: "Chest", muscles: ["chest"] }
    : null;

  const Arm: IExerciseData | null = showArm
    ? {
        name: "Arms",
        muscles: [
          "biceps",
          "triceps",
          "forearm",
          "back-deltoids",
          "front-deltoids",
        ],
      }
    : null;

  const Abs: IExerciseData | null = showAbs
    ? { name: "Abs", muscles: ["abs", "obliques"] }
    : null;

  const Leg: IExerciseData | null = showLeg
    ? {
        name: "Legs",
        muscles: [
          "quadriceps",
          "hamstring",
          "calves",
          "adductor",
          "abductors",
          "gluteal",
        ],
      }
    : null;

  const Back: IExerciseData | null = showBack
    ? { name: "Back", muscles: ["trapezius", "upper-back", "lower-back"] }
    : null;

  // Conditionally include the body parts based on their visibility props
  const data: any = [
    ...(showHead ? [Head] : []),
    ...(showChest ? [Chest] : []),
    ...(showArm ? [Arm] : []),
    ...(showAbs ? [Abs] : []),
    ...(showLeg ? [Leg] : []),
    ...(showBack ? [Back] : []),
  ].filter(Boolean); // Filter out null values

  const handleClick = useCallback(({ muscle, data }: IMuscleStats) => {
    const { frequency } = data;
    alert(
      `You clicked the ${muscle}! You've worked out this muscle ${frequency}`
    );
  }, []);

  return (
    <div className="human-body">
      <Model
        data={data}
        style={{ width: "20rem", padding: "5rem" }}
        onClick={handleClick}
        highlightedColors={["#0984e3", "#74b9ff", "#e17055", "#ff7675"]} // Adjust colors for highlighting
      />
    </div>
  );
};

export default HumanBody;
