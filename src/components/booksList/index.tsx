import { FlashList } from "@shopify/flash-list";
import { JSX } from "react"
import { View } from "react-native"
import BookListItem from "../bookListItem";
import styles from "./booksList.styles";

type booksListProps = {
    booksData: FetchBooksResponseProps[]
}

const BooksList = ({booksData}:booksListProps):JSX.Element => {
    return <View style={styles.container}>
        <FlashList 
            data={booksData}
            renderItem={({ item }) => <BookListItem book={item}/>}
            keyExtractor={(item) => item.originalTitle}
        />
    </View>
};

export default BooksList;