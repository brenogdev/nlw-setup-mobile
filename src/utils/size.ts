import { Dimensions } from "react-native";

const weekdays = 7;
const screenHorizontalPadding = (32 * 2) / 5;

export const dayMarginBetween = 8;
export const daySize =
  Dimensions.get("screen").width / weekdays - (screenHorizontalPadding + 5);
