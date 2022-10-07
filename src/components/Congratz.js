import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { StateContext } from '../App'

function Congratz({players,restart,time,timer}) {
  const setStart = React.useContext(StateContext)
  const length = players.length

  //sort the player array and return a winner
  let sorted = []
  if(players.length > 1){
       sorted = players.sort((a,b) =>{
        return b.marks - a.marks
      })
  }
  sorted = sorted.map((el,i) => i === 0 ? ({...el,winner: true}) : el) 

  useEffect(()=>{
    clearInterval(timer)
  })
  
  return (
      <Flex  justify='center' align="center" position="absolute" top='0' left='0' w='100%' height={["100vh","100%",'100%']}  zIndex='99' bg='blackAlpha.800'>
          <Box bg="cyan.50" w={['md','lg']} px={5} py={8} rounded='lg' mx='10px'>
              <Box textAlign='center' mb={8}>
                <Heading color='blue.800' fontSize="3xl" mb={3}>{length > 1 ? `Player ${sorted[0].id} wins`:'You did it!'}</Heading>
                <Text fontWeight='bold' fontSize="lg" color="gray.500">Game over! Here's how you got on...</Text>
              </Box>
              {
                players.length > 1 ?
                  <Box mb={8}>
                    { sorted.map(el => {
                      return <Flex justify='space-between' align="center" bg='gray.300' p={5} rounded='lg' mb={3}>
                        <Text fontWeight='bold' fontSize="lg" color="gray.500">Player {el.id} {el.winner ? '(winner)' : ''}</Text>
                        <Text fontWeight='bold' fontSize="3xl" color="blue.800">{el.marks} pairs</Text>
                      </Flex>
                      })}
                  </Box>
                :
                <Box  mb={5}> 
                  <Flex justify='space-between' align="center" bg='gray.300' p={5} rounded='lg' mb={3}>
                    <Text fontWeight='bold' fontSize="lg" color="gray.500">Time elapsed</Text>
                    <Text fontWeight='bold' fontSize="3xl" color="blue.800">{time.min} : {time.second >= 10 ? '' : '0'}{time.second}</Text>
                  </Flex>
                  <Flex justify='space-between' align="center" bg='gray.300' p={5} rounded='lg' mb={3}>
                    <Text fontWeight='bold' fontSize="lg" color="gray.500">Move taken</Text>
                    <Text fontWeight='bold' fontSize="3xl" color="blue.800">{players[0].moves}</Text>
                  </Flex>
              </Box>
              }
              <Box>
                <Button mb={3} rounded='3xl' w="100%" p={7} fontSize="lg" bg='orange.500' color='white' onClick={restart}>Restart</Button>
                <Button mb={3} rounded='3xl' w="100%" p={7} fontSize="lg" bg='gray.300' color="blue.800" onClick={() => setStart(true)}>Setup New game</Button>
              </Box>
          </Box>
      </Flex>
    
    
    
  )
}

export default Congratz