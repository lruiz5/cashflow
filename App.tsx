import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import TransactionsScreen from "./screens/TransactionsScreen";
import AccountsScreen from "./screens/AccountsScreen";
import InsightsScreen from "./screens/InsightsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebase/config";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome6Icons from "react-native-vector-icons/FontAwesome6";
import { default as theme } from "./theme.json"; // <-- Import app theme

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Budget",
          tabBarLabelStyle: { fontSize: 9 },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6Icons
              name="money-bill-1-wave"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Transactions",
          tabBarLabelStyle: { fontSize: 9 },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6Icons
              name="hand-holding-dollar"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={AccountsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Accounts",
          tabBarLabelStyle: { fontSize: 9 },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6Icons name="landmark" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Insights"
        component={InsightsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Insights",
          tabBarLabelStyle: { fontSize: 9 },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6Icons name="ranking-star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarLabelStyle: { fontSize: 9 },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6Icons
              name="user-astronaut"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Home" component={HomeScreen} />
      <InsideStack.Screen name="Transactions" component={TransactionsScreen} />
      <InsideStack.Screen name="Accounts" component={AccountsScreen} />
      <InsideStack.Screen name="Insights" component={InsightsScreen} />
      <InsideStack.Screen name="Profile" component={ProfileScreen} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {user ? (
            <Stack.Screen
              name="Inside"
              component={MyTabs}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
