import React, { useEffect } from 'react'
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";
import Dropdown from '../dropdown/Dropdown';
import { getMovies } from '../../services/api_endpoints'
import MovieList from '../lists/MovieList';

const Movies = ({ navigation }) => {

    const [selected, setSelected] = React.useState("popular");
    const [movieItems, setMovieItems] = React.useState([]);

    const options = [
        { label: "Popular", value: "popular" },
        { label: "Now Playing", value: "now_playing" },
        { label: "Top Rated", value: "top_rated" },
        { label: "Upcoming", value: "upcoming" },
    ]
    useEffect(() => {
        getMovies(selected).then((response) => {
            setMovieItems(response)
        }).catch((error) => {
            console.log(error);
        })
    }, [selected]);

    const handleOptionChange = (selectedValue) => {
        setSelected(selectedValue)
    }

    return (
        <Box>
            <Center px="3" py="4">
                <Dropdown options={options} handleOptionChange={handleOptionChange} navigation={navigation} default={"Popular"}/>
                <MovieList movieItems={movieItems} navigation={navigation}/>
                {/* {console.log(movieItems)} */}
            </Center>
        </Box>
    )
}

export default Movies