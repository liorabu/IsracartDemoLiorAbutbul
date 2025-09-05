import { JSX } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./bookListItem.styles";

type BookListItemProps = {
    book: FetchBooksResponseProps;
}

const BookListItem = ({book}:BookListItemProps): JSX.Element => {
    return (
         <Pressable onPress={()=>console.log('todo')}>
            <View style={styles.container}>
                <View style={styles.dataContainer}>
                    <Text>{book.title}</Text>
                    <Text>{book.releaseDate}</Text>
                </View>
                <Image
                source={{ uri: book.cover }}  
                style={styles.imageStyle}
                resizeMode="cover" 
            />
            </View>
    </Pressable> 
    )
};

export default BookListItem;