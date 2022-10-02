import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Dropdown from '../dropdown/Dropdown'
import { Center } from 'native-base'
import { getTvShows } from '../../services/api_endpoints'
import TvShowList from '../lists/TvShowList'

const TVShows = ({ navigation }) => {
  const [selected, setSelected] = React.useState("popular");
  const [tvItems, setTvItems] = React.useState([]);

  const options = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "On The Air", value: "on_the_air" },
    { label: "Airing Today", value: "airing_today" },
  ]

  useEffect(() => {
    getTvShows(selected).then((response) => {
      setTvItems(response)
    }).catch((error) => {
      console.log(error);
    })
  }, [selected]);

  const handleOptionChange = (selectedValue) => {
    setSelected(selectedValue)
  }
  return (
    <View>
      <Center py={4}>
        <Dropdown options={options} handleOptionChange={handleOptionChange} navigation={navigation} default={"popular"}/>
        <TvShowList tvShowItems={tvItems} navigation={navigation}/>
      </Center>
    </View>
  )
}

export default TVShows