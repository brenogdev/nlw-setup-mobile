import { TouchableOpacity } from "react-native";
import { daySize } from "../utils/size";

export function HabitDay() {
  return (
    <TouchableOpacity
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{ width: daySize, height: daySize }}
      activeOpacity={0.7}
    />
  );
}
