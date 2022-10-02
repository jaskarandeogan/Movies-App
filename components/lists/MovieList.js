import { FlatList } from "native-base"
import ListCard from "../listcards/MovieCard"

const MovieList = (props) => {
    const { navigation, movieItems } = props
  return (
   <FlatList  
   data={movieItems}
   renderItem={({ item }) => <ListCard item={item} navigation={navigation} />}
   />
  )
}

export default MovieList