import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Button, FormControl, HStack, Icon, Input, VStack, Center, Box, Text} from 'native-base'
import Dropdown from '../dropdown/Dropdown'
import InputForm from '../input/InputForm'

const SearchForm = props => {
  const [formData, setData] = useState({})
  const [selected, setSelected] = useState('popular')


  const searchOptions = [
    { label: 'Movie', value: 'movie' },
    { label: 'TV', value: 'tv' },
    { label: 'Multi', value: 'multi' },
  ]

  const handleOptionChange = (selectedValue) => {
    setSelected(selectedValue)
    // console.log(selectedValue)
  }
  const handleInputChange = (value) => {
    setData(value)
    
  }
  function validateForm() {
    if (selected == null && formData == null) {
      setIsFormEmpty(true)
    }
  }
  // props.handleSearch(formData, selected)

  return (
    <Box>
        <VStack width='90%' py={5}>
          <FormControl isRequired>
            <HStack>
              <InputForm handleInputChange={handleInputChange}  />
            </HStack>
              
              <HStack px={6}>
              <FormControl.Label>Choose typeof search:</FormControl.Label>
              </HStack>
            <HStack>
              <Dropdown options={searchOptions} handleOptionChange={handleOptionChange} default={"Movie"} />
              <Button startIcon={<Icon as={Ionicons} name='ios-search' />}
                onPress={() => props.handleSearch(formData, selected)}
              >
                Search
              </Button>
            </HStack>
          </FormControl>
        </VStack>
    </Box>
  )
}

export default SearchForm