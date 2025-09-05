import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "../constants/navigation"
import HomeScreen from "../screens/homeScreen";
import { JSX } from "react";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "./BottomTabNavigator";
import BookDetailsScreen from "../screens/bookDetailsScreen";

export type BookStackParamList =  {
  [Routes.Home]: undefined,
  [Routes.BookDetails]: {
    book: FetchBooksResponseProps
  },
};

const Stack = createNativeStackNavigator<BookStackParamList>();

export type BooksNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<BookStackParamList, Routes.Home>,
  BottomTabNavigationProp<RootTabParamList>
>;

const BookNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator >
        <Stack.Screen
        name={ Routes.Home }
        component={ HomeScreen }
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name={ Routes.BookDetails }
        component={ BookDetailsScreen }
        
        />
    </Stack.Navigator >
    )
}

export default BookNavigator;