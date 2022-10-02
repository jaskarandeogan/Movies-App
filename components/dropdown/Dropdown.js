import { View, Text } from 'react-native'
import React from 'react'
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";

const Dropdown = (props) => {
    const [selected, setSelected] = React.useState("");
    const options = props.options
    // console.log(selected);
    

    return <Center>
        <Box maxW="100%">
            <Select selectedValue={props.selected} minWidth="80%" accessibilityLabel="popular" placeholder={props.default} _selectedItem={{
                bg: "gray.300",
                endIcon: <CheckIcon size="5" />
            }}  onValueChange={itemValue => props.handleOptionChange(itemValue)}>
                {options.map((option) => <Select.Item key={option.value} label={option.label} value={option.value} />)}
            </Select>
        </Box>
    </Center>;
}

export default Dropdown