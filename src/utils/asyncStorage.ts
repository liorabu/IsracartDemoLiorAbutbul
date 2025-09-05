import dayjs from 'dayjs';
import AsyncStorage from '@react-native-async-storage/async-storage';

type booksFromAsyncStorageProps = {
        books: FetchBooksResponseProps[];
        savedTime: string;
}

enum AsyncStorageKeys {
    booksList= 'booksList'
}

export const setBooksInAsyncStorage = async(books:FetchBooksResponseProps[]) =>{
  console.log("111111")
    const dataToSave = {
        books:  books,
        savedTime:  dayjs().toISOString()
    }

    console.log("12121")
  try {
    await AsyncStorage.setItem(
      AsyncStorageKeys.booksList,
      JSON.stringify(dataToSave),
    );
  } catch (error) {
    console.log('error')
  }
};

export const getBooksFromAsyncStorage = async():Promise<booksFromAsyncStorageProps | null> => {
    try {
   const data =  await AsyncStorage.getItem(
      AsyncStorageKeys.booksList,
    );
    if(data===null){
        return null
    }
    return JSON.parse(data)
  } catch (error) {
    return null
  } 
}