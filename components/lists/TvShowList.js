import { FlatList } from "native-base";
import TvCard from "../listcards/TvCard";

const TvShowList = (props) => {
    const { navigation, tvShowItems } = props;

//    console.log("TV items", tvShowItems);
    return (
        <FlatList
            data={tvShowItems}
            renderItem={({ item }) => 
                <TvCard item={item} navigation={navigation} />
            }
        />
    );

}

export default TvShowList