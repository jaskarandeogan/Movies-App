import React, {useState} from 'react'
import {
    VStack,
    FormControl,
    Input,
    NativeBaseProvider,
    Center,
    Select,
    CheckIcon,
    HStack,
    Button,
    Icon,
    Text,
    Box,
} from "native-base";
import { Ionicons } from '@expo/vector-icons'

const InputForm = (props) => {
    // const [formData, setData] = useState({})
    // console.log(formData)
   

    return (
        <Box ml={6}>
            <Center>
                <VStack space={2} width='100%' pb={4}>
                <FormControl.Label>Search Movie/TV Shows Name</FormControl.Label>
                <HStack space={2}>
                  <Input
                    placeholder='i.e. James Bond, CSI etc.'                    
                    bg='gray.200'
                    width='100%'
                    onChangeText={(value) => props.handleInputChange(value)}
          
                    InputLeftElement={
                      <Icon size={5} ml={2}  as={<Ionicons name='ios-search' />} />
                    }

                  />
                </HStack>
                </VStack>
            </Center>

        </Box>
    )
}

export default InputForm