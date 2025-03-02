import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingEditScreen />
    </GestureHandlerRootView>
  );
}
