import { FlatList } from "native-base"
import ListCard from "../listcards/SearchCard"

const SearchList = (props) => {
    const { navigation, searchItems, type } = props
    // console.log("Search list ", type)
    // console.log("Search List", searchItems)



    return (
        <FlatList 
        data={searchItems}
        renderItem={({ item }) => <ListCard item={item} navigation={navigation} type={type}/>}
        />
    )
}

export default SearchList