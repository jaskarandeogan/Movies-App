import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SearchForm from '../forms/SearchForm'
import { Center, Container } from 'native-base'
import { seacrhGetMovie } from '../../services/api_endpoints'
import SearchList from '../lists/SearchList'

const Search = ({ navigation }) => {
  const [searchData, setSearch] = React.useState("")
  const [type, setType] = React.useState("movie")
  const [searchItems, setSearchItems] = React.useState([])

  const handleSearch = (formData, selected) => {
    setSearch(formData)
    setType(selected)

    seacrhGetMovie(searchData, type).then((response) => {
      setSearchItems(response)
      // console.log("Search", response)
    }).catch((error) => {
      console.log("search js", error);
    })

  }

  return (
    <Container width="90%">
      <Center px={4}>
        <SearchForm handleSearch={handleSearch} searchItems={searchItems} navigation={navigation} />

        <SearchList searchItems={searchItems} navigation={navigation} type={type} />

      </Center>

    </Container>
  )
}

export default Search