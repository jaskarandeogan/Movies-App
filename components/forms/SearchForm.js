import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Button, FormControl, HStack, Icon, Input, VStack, Center, Box } from 'native-base'
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
    // console.log(value)
  }

  // props.handleSearch(formData, selected)

  return (
    <Box>
      <Center>
        <VStack space={2} width='100%' py={5}>
          <FormControl isRequired>
            <HStack>
              <InputForm handleInputChange={handleInputChange} />
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
      </Center>
    </Box>
  )
}

export default SearchForm