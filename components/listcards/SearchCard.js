import React from 'react'
import { Box, Button, Center, Divider, Heading, HStack, Image, Text, VStack } from 'native-base'

const SearchCard = (props) => {
    const { navigation, item } = props
    // const { item, navigation, type } = props
    const { id, poster_path, title, name, release_date, first_air_date, popularity } = item
    console.log(item);

  return (
    <Box maxWidth={"90%"}>
            <Center>
                <HStack px={2} py={4}>
                    <VStack px={4}>
                        {poster_path === null ? (
                            <></>
                        ) : (
                            <Image
                                source={{
                                    uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
                                }}
                                alt={title}
                                size="xl"
                            />
                        )}
                    </VStack>
                    <VStack>
                        <Text py={1} bold isTruncated>{title}</Text>
                        {/* <Text py={1}>id {id}</Text> */}
                        <Text py={1}>Release Date: {release_date}</Text>
                        <Text py={1}>Popularity: {popularity}</Text>
                        <Button
                            w="80%"
                            onPress={() => navigation.navigate('IndividualMovie', { id: id })}
                        >
                            More Details
                        </Button>
                    </VStack>
                </HStack>
            </Center>
        </Box>
  )
}

export default SearchCard