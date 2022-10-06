import React from 'react'
import { Box, Button, Center, Divider, Heading, HStack, Image, Text, VStack } from 'native-base'
import IndividualTV from './individualcard/IndividualTV';

const SearchCard = (props) => {
    const { navigation, item, type } = props
    // console.log(type, "search card");
    // const { item, navigation, type } = props



  return (
    <Box maxWidth={"100%"} flex={1} flexDirection={"row"} >
            <Center>
                <HStack px={2} py={4}>
                    <VStack px={4} w={130} h={150}>
                        {item.poster_path === undefined ? (
                            <Image
                            source={{
                                uri: `https://www.google.com/search?q=default+poster++movie&tbm=isch&ved=2ahUKEwjw6YCd4cn6AhW2LDQIHertDnMQ2-cCegQIABAA&oq=default+poster++movie&gs_lcp=CgNpbWcQAzIGCAAQHhAIUPEYWPEYYOwaaABwAHgAgAHPAYgBgAKSAQUxLjAuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=ZdI9Y7CjCrbZ0PEP6tu7mAc&bih=964&biw=1703&rlz=1C5GCEM_enCA1005CA1022#imgrc=W659po7Zmh8zzM`,
                            }}
                            alt={item.title ? item.title : item.name }
                            size="xl"
                            
                        />
                        ) : (
                            <Image
                                source={{
                                    uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                                }}
                                alt={item.title ? item.title : item.name }
                                size="xl"
                            />
                        )}
                    </VStack>
                    <VStack>
                        <Text py={1} bold isTruncated>{item.title ? item.title : item.name }</Text>
                        {/* <Text py={1}>id {id}</Text> */}
                        <Text py={1}> {item.release_date ? <Text>Release date {item.release_date}</Text> : <Text>first air date {item.first_air_date}</Text>}</Text>
                        <Text py={1}>Popularity: {item.popularity}</Text>
                        <Button
                            w="80%"
                            onPress={() => navigation.navigate(`${type == 'movie' ? 'IndividualMovie' : 'IndividualTV'}`, { id: item.id })}
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