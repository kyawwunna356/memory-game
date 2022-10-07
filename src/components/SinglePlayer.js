import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function SinglePlayer({players,time}) {
    

  return (
    <Flex justify="space-between" align="center" rowGap={3} columnGap={3} wrap="wrap">
        <Flex
          justify="space-between"
          align="center"
          flex="1"
          columnGap={3}
          bg="gray.300"
          p={5}
          borderRadius="lg"
        >
          <Text fontSize="3xl" fontWeight="bold" color= "blue.800">
            Time
          </Text>
          <Text fontSize="3xl" fontWeight="bold" color= "blue.800">
            {time.min} : {time.second >= 10 ? '' : '0'}{time.second}
          </Text>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          flex="1"
          columnGap={3}
          bg="gray.300"
          p={5}
          borderRadius="lg"
        >
          <Text fontSize="3xl" fontWeight="bold" color= "blue.800">
            Moves
          </Text>
          <Text fontSize="3xl" fontWeight="bold" color= "blue.800">
            {players.map(el => el.moves)}
          </Text>
        </Flex>
    </Flex>
  )
}

export default SinglePlayer