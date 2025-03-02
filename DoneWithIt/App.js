import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import ListEditScreen from "./app/screens/ListEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { Button, Image } from "react-native";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState(null);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <ImageInput
          imageUri={imageUri}
          onChangeImage={(uri) => setImageUri(uri)}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
