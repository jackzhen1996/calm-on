/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/components/splash.js";
import LoginSignup from "./src/components/session/loginSignup.js";
import IntroVideo from "./src/components/video.js";
import Storytime from "./src/components/storytime.js";
import MilkMilkMilk from "./src/components/milkMilkMilk";
import Profile from "./src/components/profile.js";
import Mindfulness from "./src/components/mindfulnessStack";
import spriteChat from "./src/components/spriteChat";
import { Provider } from "react-redux";
import configureStore from "./src/store/store";
import Home from "./src/components/homeStack";
import DailyCheckIn from "./src/components/DailyCheckIn";
import CheckInExplain from "./src/components/CheckInExplain";
import BoxBreathing from "./src/components/boxBreathing";
import ChatPlaceholder from "./src/components/chatPlaceholder";
import FeelingDictionary from "./src/components/FeelingDictionary";
import kpi from "./src/components/kpi";
import { navigationRef } from "./src/components/RootNavigation";
import * as RootNavigation from "./src/components/RootNavigation";

const Stack = createStackNavigator();
const store = configureStore();

export default function App() {
  console.disableYellowBox = true;

  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animationEnabled: false }}
        >
          <Stack.Screen name="IntroVideo" component={IntroVideo} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="loginSignup" component={LoginSignup} />
          <Stack.Screen
            name="DailyCheckIn"
            component={DailyCheckIn}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerLeft: null, // removes the back button
              headerTitle: "Daily Check-In",
              headerTitleStyle: { fontSize: 20, color: "#424242" },
              headerStyle: { backgroundColor: "#FFC10E" },
              headerTintColor: "#424242",
            }}
          />
          <Stack.Screen
            name="CheckInExplain"
            component={CheckInExplain}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "Daily Check-In",
              headerTitleStyle: { fontSize: 20, color: "#424242" },
              headerStyle: { backgroundColor: "#FFC10E" },
              headerTintColor: "#424242",
            }}
          />
          <Stack.Screen
            name="FeelingDictionary"
            component={FeelingDictionary}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "Daily Check-In",
              headerTitleStyle: { fontSize: 20, color: "#424242" },
              headerStyle: { backgroundColor: "#FFC10E" },
              headerTintColor: "#424242",
            }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Storytime"
            component={Storytime}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="milkMilkMilk" component={MilkMilkMilk} />
          <Stack.Screen
            name="kpi"
            component={kpi}
            options={{
              headerShown: true,
              headerTitle: "Placehoder KPI",
              headerTitleStyle: { fontSize: 20, color: "#424242" },
              headerStyle: { backgroundColor: "#FFC10E" },
              headerTintColor: "#424242",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    RootNavigation.navigate("chatPlaceholder");
                  }}
                  style={{ height: 21, width: 12, marginHorizontal: 15 }}
                >
                  <Image
                    source={require("./assets/kpi/chevronLeft.png")}
                    style={{ height: 21, width: 12 }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Mindfulness" component={Mindfulness} />
          {/*<Stack.Screen
            name="spriteChat"
            component={spriteChat}
            options={{
              headerShown: true,
              headerTitle: "Sprite",
              headerTitleStyle: { fontSize: 24 },
            }}
          />*/}
          <Stack.Screen
            name="chatPlaceholder"
            options={{ headerShown: true }}
            component={ChatPlaceholder}
          />
          <Stack.Screen
            name="boxBreathing"
            options={{ headerShown: true, headerTitle: "Box Breathing" }}
            component={BoxBreathing}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
