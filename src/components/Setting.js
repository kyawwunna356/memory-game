import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { initialSettings } from "../utils/initialData";

function Setting({finalConfig,setFinalConfig,setStart}) {
  const [settings,setSettings] = React.useState(initialSettings)

  const bg = (el) =>{
      return el.selected ? 'blue.800' : 'gray.400'
  }

  const hover = {color: 'blue.800',bg: 'gray.200'}

  // click to change the bg and color and mark selected
  function handleClick(el){
    const {belongTo, id} = el
    setSettings(prevSettings => ({
      ...prevSettings,
      [belongTo]: prevSettings[belongTo].map(sett => {
        if (sett.id === id) {
          return {
            ...sett,
            selected: true
          }
        } else {
          return {
            ...sett,
            selected: false
          }
        }
    })
    }))
  }

  // put in the finalConfig
  function start(){
    var temp = {}
   for(var key in settings){
    settings[key].forEach(el => {
      if(el.selected){
        const {belongTo} = el;
        temp[belongTo] = el.value
      } 
    })
   }
   setFinalConfig(temp)
   setStart(false)
  }


  return (
    <Flex bg='gray.900' w="100%" h="100vh" justify='center' align="center" m="auto" p={5}>
      <Box bg="cyan.50" w={['md','lg']} px={5} py={8} rounded='lg' >
        {/* theme */}

        <Box ml={5}>
          <Text color='gray' mb={3}>Select Theme</Text>
          <Flex justify='space-between' align="center" mb={5}>
            {settings.theme.map(el => { 
              return <Button _hover={hover} key={el.id} color='white' bg={bg(el)} rounded="3xl"  flex='1' p={2} mr={5} onClick={() => handleClick(el)}>{el.value}</Button>
              })}
          </Flex>
        </Box>

        {/* players */}
        <Box ml={5}>
          <Text color='gray' mb={3}>Number of Players</Text>
          <Flex justify='space-between' align="center" mb={5}>
            {settings.numberOfPlayers.map(el => {
              return (
                <Button key={el.id} _hover={hover}  color='white' bg={bg(el)} rounded="3xl"  flex='1' p={2} mr={5}  onClick={() => handleClick(el)}>{el.value}</Button>
              )
            })}
          </Flex>
        </Box>

        {/* grid */}
        <Box ml={5}>
          <Text color='gray' mb={3}>Grid Size</Text>
          <Flex justify='space-between' align="center" mb={5}>
            {settings.gridSize.map(el => {
              return (
                <Button key={el.id} _hover={hover}  color='white' bg={bg(el)} rounded="3xl"  flex='1' p={2} mr={5}  onClick={() => handleClick(el)} >{el.value}</Button>
              )
            })}
          </Flex>
        </Box>

        <Box mx={5} >
          <Button  color='white' bg='orange.500' rounded="3xl"  width="100%" p={6} mt={3} onClick={start}>Start Game</Button>
        </Box>
        
      </Box>
    </Flex>
  );
}

export default Setting;
