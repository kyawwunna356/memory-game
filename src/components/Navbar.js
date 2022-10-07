import { Box, Button, Divider, Flex, Spacer, Text } from '@chakra-ui/react'
import { StateContext } from '../App'
import React from 'react'

function Navbar({restart}) {
const setStart = React.useContext(StateContext)
const [show,setShow] = React.useState(false)
  return (
    <>
    <Flex align='center'>
        <Text color='blue.800' fontSize='3xl' fontWeight="bold" letterSpacing="wide">Memory</Text>
        <Spacer />
        <Box display={['none','block']}>
            <Button borderRadius='3xl' p={5} onClick={restart} mr={3} bg="orange.500" color='white' _hover={{bg: 'orange.600'}}>Restart</Button>
            <Button borderRadius='3xl' p={5} onClick={() => setStart(true)} >New Game</Button>
        </Box>
        <Box display={['block','none']}>
            <Button borderRadius='3xl' p={5} bg="orange.500" color='white' onClick={() => setShow(prevShow => !prevShow)}>Menu</Button>
        </Box>
    </Flex>
    {show && <Box mt={5} bg='gray.100'>
            <Button w='100%' p={5} variant='ghost' color='blue.800' bg="gray.200" onTouchStartCapture={restart}>Restart</Button>
            <Divider />
            <Button w='100%' p={5} variant='ghost' color='blue.800' bg="gray.200" onClick={() => setStart(true)}>New Game</Button>
    </Box>}
    </>
    
  )
}

export default Navbar