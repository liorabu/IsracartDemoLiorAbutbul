import { FlashList } from "@shopify/flash-list";
import { JSX } from "react";
import { Text, View } from "react-native";
import styles from "./dataList.styles";

type DataItemProps = {
    label: string;
    value: string | number;
}

type DataListProps = {
    data: DataItemProps[]
}

const ListItem = ({ label, value }: DataItemProps) => {
  return (
    <View style={styles.itemContainer} >
      <Text style={styles.labelStyle}>
          {label}
      </Text>
      <Text style={styles.valueStyle}>
        {value.toString()}
      </Text>
    </View>
  );
};


const DataList = ({data}:DataListProps):JSX.Element => {
    return <View style={styles.container}>       
       <FlashList 
        data={data}
         keyExtractor={(item) => item.label}
         renderItem={({ item }) => <ListItem label={item.label} value={item.value}/>}
       />
    </View>
};

export default DataList;