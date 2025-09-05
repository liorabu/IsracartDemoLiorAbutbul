import { JSX, useEffect } from "react";
import { Text } from "react-native";
import {  useAppSelector } from "../../hooks/redux";
import useManageBooksSource from "../../hooks/useManageBooksSource";

const HomeScreen = ():JSX.Element => {
    const booksList = useAppSelector((state)=>state.books.booksList)
const {manageBooksSource} = useManageBooksSource();

useEffect(()=>{
   manageBooksSource() 
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  

    return (
        <Text>SDFS</Text>
    )
}

export default HomeScreen;