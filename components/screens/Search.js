import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchForm from '../forms/SearchForm'
import { Center, Container, Box } from 'native-base'
import { seacrhGetShowing } from '../../services/api_endpoints'
import SearchList from '../lists/SearchList'

const Search = ({ navigation }) => {
  const [searchData, setSearch] = useState("")
  const [type, setType] = useState("")
  const [searchItems, setSearchItems] = useState([])

  const handleSearch = (formData, selected) => {
    setSearch(formData)
    setType(selected)

    seacrhGetShowing(formData, selected).then((response) => {
      if(type === "multi"){
        const list = response;
        list.filter(item => item.media_type === "movie" || item.media_type === "tv")
        setSearchItems(list)
      } else {
        setSearchItems(response)
      }
    }).catch((error) => {
      console.log("search js", error);
    })

  }



  return (
    <Box style={{flex: 1}} px={5}>
        <SearchForm handleSearch={handleSearch} searchItems={searchItems} navigation={navigation} />

        {searchData ? 
          <SearchList searchItems={searchItems} navigation={navigation} type={type}/> 
          : 
          <Text style={{color:"red"}}>*Type something for Search </Text>
        }

        {/* <SearchList searchItems={searchItems} navigation={navigation} type={type} /> */}

    </Box>
  )
}

export default Search