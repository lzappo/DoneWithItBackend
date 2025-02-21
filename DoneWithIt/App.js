import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <ListItem title="my title" ImageComponent={<Icon name="email" />} />
      </Screen>
    </GestureHandlerRootView>
  );
}
