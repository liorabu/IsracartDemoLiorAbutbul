import dayjs from "dayjs";
import { fetchBooksAsync } from "../store/actions/books";
import { getBooksFromAsyncStorage, setBooksInAsyncStorage } from "../utils/asyncStorage";
import { useAppDispatch } from "./redux";
import { setBooks } from "../store/reducers/booksSlice";

const NUMBER_OF_HOURS_TO_REFETCH =24;

const useManageBooksSource = () => {
    const dispatch = useAppDispatch();
    const manageBooksSource = async() => {
        try {
            const dataFomAsyncStorage = await getBooksFromAsyncStorage();
            console.log('dataFomAsyncStorage',dataFomAsyncStorage)
            if(dataFomAsyncStorage===null){
                const fetchedBooks = await dispatch(fetchBooksAsync())
                setBooksInAsyncStorage(fetchedBooks.payload as FetchBooksResponseProps[])
            }else{
                const {savedTime,books} = dataFomAsyncStorage;
                const diffInDays = dayjs().diff(dayjs(savedTime), 'hours');
                if(diffInDays>NUMBER_OF_HOURS_TO_REFETCH){
                    const fetchedBooks = await dispatch(fetchBooksAsync())
                        setBooksInAsyncStorage(fetchedBooks.payload as FetchBooksResponseProps[])
                }
                else{
                    dispatch(setBooks(books))
                }
            }
        } catch (error) {
            dispatch(setBooks([]))
        }
    }
    
    return {
        manageBooksSource
    }
};

export default useManageBooksSource;