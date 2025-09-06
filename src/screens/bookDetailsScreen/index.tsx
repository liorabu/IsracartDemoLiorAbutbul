import { RouteProp, useRoute } from "@react-navigation/native";
import { JSX, useMemo } from "react";
import { Image, View } from "react-native";
import { BookStackParamList } from "../../navigators/BookNavigator";
import { Routes } from "../../constants/navigation";
import styles from "./bookDetailsScreen.styles";
import { data } from "./bookDetailsScreen.config";
import { useTranslation } from "react-i18next";
import DataList from "../../components/dataList";

const BookDetailsScreen = ():JSX.Element => {
    const {params: {book}} = useRoute<RouteProp<BookStackParamList,Routes.BookDetails>>();
    const {t} = useTranslation()
    const parsedData = useMemo(()=>{
        return data.map((item)=>{
            return{
                label: t(item.label),
                value: book[item.value]
            }
        })
    },[book, t])

    return( 
        <View style={styles.container}>          
            <Image
                source={{ uri: book.cover }}  
                style={styles.imageStyle}
                resizeMode="cover" 
            />
            <DataList data={parsedData}/>
        </View>
    )
};

export default BookDetailsScreen;