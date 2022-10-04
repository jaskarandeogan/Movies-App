import React from 'react'
import { Box, Button, Center, Divider, Heading, HStack, Image, Text, VStack } from 'native-base'


const TvCard = ({ item, navigation }) => {
    const { id, poster_path, name, first_air_date, popularity } = item
    // console.log("poster", item.poster_path);
    return (
        <Box maxWidth={"90%"} borderY={2} flex={1} flexDirection={"row"}>
            <Center >
                <HStack px={2} py={4}>
                    <VStack px={4} >
                        {poster_path === undefined ? (
                            <></>
                        ) : (
                            <Image
                                source={{
                                    uri: `https://image.tmdb.org/t/p/original${poster_path}`,
                                }}
                                alt={name}
                                size="xl"
                            />
                        )}
                    </VStack>
                    <VStack >
                        <Text py={1} bold flexWrap={"wrap"}>{name}</Text>
                        <Text py={1}>Release Date: {first_air_date}</Text>
                        <Text py={1}>Popularity: {popularity}</Text>
                        <Button
                            w="150px"
                            onPress={() => navigation.navigate('IndividualTV', { id: id })}
                        >
                            More Details
                        </Button>
                    </VStack>
                </HStack>
            </Center>
        </Box>
    )
}

export default TvCard