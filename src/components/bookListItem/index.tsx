import { JSX } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./bookListItem.styles";
import { useNavigation } from "@react-navigation/native";
import { BooksNavigationProp } from "../../navigators/BookNavigator";
import { Routes } from "../../constants/navigation";

type BookListItemProps = {
    book: FetchBooksResponseProps;
}

const BookListItem = ({book}:BookListItemProps): JSX.Element => {
const {navigate} = useNavigation<BooksNavigationProp>()
    return (
         <Pressable onPress={()=>navigate(Routes.BookDetails,{
            book:book
         })}>
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