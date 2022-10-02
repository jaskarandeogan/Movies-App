import React from 'react'
import { Box, Button, Center, Divider, Heading, HStack, Image, Text, VStack } from 'native-base'

const SearchCard = ({item, navigation}) => {
    // const { item, navigation, type } = props
    const { id, poster_path, title, name, release_date, first_air_date, popularity } = item
    console.log("id", id);
    console.log("poster", poster_path);

  return (
    <Box maxWidth={"90%"} borderY={2}>
        <Text>Search Card</Text>
    </Box>
  )
}

export default SearchCard