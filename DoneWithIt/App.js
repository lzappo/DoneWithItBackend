import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RegisterScreen />
    </GestureHandlerRootView>
  );
}
