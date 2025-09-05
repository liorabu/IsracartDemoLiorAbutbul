import { JSX, useEffect } from "react";
import {  useAppSelector } from "../../hooks/redux";
import useManageBooksSource from "../../hooks/useManageBooksSource";
import BooksList from "../../components/booksList";

const HomeScreen = ():JSX.Element => {
    const booksList = useAppSelector((state)=>state.books.booksList)
    const {manageBooksSource} = useManageBooksSource();

    useEffect(()=>{
    manageBooksSource() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
       <BooksList booksData={booksList}/>
    )
}

export default HomeScreen;