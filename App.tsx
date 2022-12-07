import React from "react";
import {Text} from "react-native";
import {ThemeProvider} from "styled-components/native";
import theme from "./src/global/styles/theme";

import {NavigationContainer} from "@react-navigation/native";
import {useFonts} from "./src/hooks/useFonts";
import {AppRoutes} from "./src/routes/app.routes";

export default function App(){
  
  const isLoadingComplete = useFonts();

  if (!isLoadingComplete) {
    return <Text>Loading...</Text>;
  }

  return(
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
