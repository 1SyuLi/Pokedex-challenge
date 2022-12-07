import { useState, useEffect } from "react";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export function useFonts(): boolean {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);


  useEffect(() => {
    (async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          SFRegular: require("../assets/fonts/sf-pro-display-regular.ttf"),
          SFMedium: require("../assets/fonts/sf-pro-display-medium.ttf"),
          SFBold: require("../assets/fonts/sf-pro-display-bold.ttf")
        });
      }   
      catch (error) {
        console.error(error);
      } finally {
        setIsLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    })();

  }, []);

  return isLoadingComplete;
}
