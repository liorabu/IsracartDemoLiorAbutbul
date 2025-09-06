import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    container: {
        flex:1
    },
    itemContainer: {
        flexDirection:'row', 
        justifyContent:'space-between', 
        gap:8
    },
    labelStyle:{ fontWeight:'bold' },
    valueStyle:{flexGrow:1, flexShrink:1}
});

export default styles;