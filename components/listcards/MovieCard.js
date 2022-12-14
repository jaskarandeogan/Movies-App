import { Box, Button, Center, Divider, Heading, HStack, Image, Text, VStack } from 'native-base'
const ListCard = ( {navigation, item }) => {
    const { id, poster_path, title, release_date, popularity } = item
    // console.log("ID", getMovieById(id));
    // console.log(navigation)

    return (
        <Box maxWidth={"100%"} flex={1} flexDirection={"row"} >
            <Center>
                <HStack px={2} py={4}>
                    <VStack px={4} w={130} h={150}>
                        {poster_path === undefined ? (
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
                        <Text py={1} bold isTruncated >{title}</Text>
                        {/* <Text py={1}>id {id}</Text> */}
                         
                        <Text py={1}>Release Date: {release_date}</Text>
                        <Text py={1}>Popularity: {popularity}</Text>
                        <Button
                             w="150px"
                            onPress={() => navigation.navigate('IndividualMovie', { id: id })}
                        >
                            More Details
                        </Button>
                    </VStack>
                </HStack>
            </Center>
        </Box>
    );
}
export default ListCard