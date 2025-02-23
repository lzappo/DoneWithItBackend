import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LoginScreen />
    </GestureHandlerRootView>
  );
}
