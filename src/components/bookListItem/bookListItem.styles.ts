import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        borderWidth: 1, 
        borderColor:'#909090',
        paddingVertical:8, 
        paddingHorizontal:16, 
        flexDirection:'row', 
        justifyContent:'space-between' 
    },
    dataContainer: {
        gap:4
    },
    imageStyle:{
        height:40, 
        width:40
    }
});

export default styles;