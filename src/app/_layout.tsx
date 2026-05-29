import { APP_FONTS } from "@/lib/fonts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts(APP_FONTS);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
}
