import React, {useEffect} from  'react'
import { getMovieById } from '../../../services/api_endpoints'
import { Box, Button, Center, Divider, Heading, HStack, Image, Text, VStack } from 'native-base'


const IndividualMovie = ({ route }) => {
  const { navigation, id } = route.params
  const [movie, setMovie] = React.useState({})
  // console.log("movie id ", movie>);

  useEffect(() => {
    getMovieById(id).then((response) => {
      setMovie(response)
      // console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <Box>
      <Center>
        {console.log(movie.poster_path)}
          <Text py={5} fontSize={24} fontWeight={600} >
            {movie?.title}
          </Text>
        <VStack>
          <VStack paddingBottom={5} >
            {movie?.poster_path === undefined ? (
              <></>
            ) : (
              <Image
                
                source={{
                  uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
                }}
                alt={movie.title+"sdfsd"}
                size="2xl"
              />
            )}
          </VStack>
        </VStack>
        <Text  px={"5rem"}>
          {movie?.overview}
        </Text>
        <HStack px={10} py={5}>
          <Text py={1}>Popularity: {movie?.popularity} | </Text> 
          <Text py={1}>Release Date: {movie?.release_date}</Text>
        </HStack>
      </Center>
    </Box>
  )
}

export default IndividualMovie