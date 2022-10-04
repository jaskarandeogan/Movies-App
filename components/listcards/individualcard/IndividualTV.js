import React, { useEffect } from 'react'
import { getTVById } from '../../../services/api_endpoints'
import { Box, Button, Center, Divider, Heading, HStack, Image, Text, VStack } from 'native-base'

const IndividualTV = ({ route }) => {
  const { navigation, id } = route.params
  const [tv, setTV] = React.useState({})
  console.log("tv id ", id);

  useEffect(() => {
    getTVById(id).then((response) => {
      setTV(response)
      console.log(response);

    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <Box>
      <Center>
        {console.log(tv.poster_path)}
        <Text py={5} fontSize={24} fontWeight={600}>
          {tv?.name}
        </Text>
        <VStack>
          <VStack paddingBottom={5}>
            {tv?.poster_path === null ? (
              <></>
            ) : (
              <Image

                source={{
                  uri: `https://image.tmdb.org/t/p/original${tv.poster_path}`,
                }}
                alt={tv.name + "dfgdfg"}
                size="2xl"
              />
            )}
          </VStack>
        </VStack>
        <Text px={"5rem"}>
          {tv?.overview}
        </Text>
        <HStack px={10} py={5}>
          <Text py={1}>Popularity: {tv?.popularity} | </Text>
          <Text py={1}>Release Date: {tv?.first_air_date}</Text>
        </HStack>
      </Center>
    </Box>
  );
}

export default IndividualTV