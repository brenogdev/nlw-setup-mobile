import "./src/lib/dayjs";
import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="trasparent"
      />
      <Routes />
    </>
  );
}
