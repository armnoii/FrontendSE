import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Home from "./components/home";
import Notifications from "./components/notifications";
import Detail from "./components/detail";
import Payment from "./components/payment";
import Mastercard from "./components/masterCard";
import PromptPay from "./components/promptPay";

import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const HomePage = ({ navigation }) => <Home navigation={navigation} />;
const DetailPage = ({ navigation }) => <Detail navigation={navigation} />;
const NotiPage = ({ navigation }) => <Notifications navigation={navigation} />;
const PaymentPage = ({ navigation }) => <Payment navigation={navigation} />;
const MastercardPage = ({ navigation }) => (
  <Mastercard navigation={navigation} />
);

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// const Mystack = () => {
//   <Stack.Navigator>
//     <Stack.Screen name="mastercard" component={MastercardPage} />
//   </Stack.Navigator>;
// };

const MyTabs = () => {
  return (
    <Tab.Navigator
      activeColor="#645CBB"
      inactiveColor="#18122B"
      barStyle={{
        backgroundColor: "#F0EEED",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomePage}
        options={{
          tabBarLabel: "หน้าหลัก",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="detail"
        component={DetailPage}
        options={{
          tabBarLabel: "สัญญา",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="car" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="เตือน"
        component={NotiPage}
        options={{
          tabBarLabel: "แจ้งเตือน",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="notifications" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="payment"
        component={PaymentPage}
        options={{
          tabBarLabel: "ชำระค่างวด",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="cash-outline" size={20} color={color} />;
          },
        }}
      />
       <Tab.Screen
        name="mastercard"
        component={MastercardPage}
        options={{
          tabBarLabel: "masterCard",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="card-outline" size={20} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    // <PromptPay/>
  );
}
