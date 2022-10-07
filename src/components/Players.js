import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function Players({ players,id}) {
  return (
    <Flex justify="space-between" align="center" rowGap={3} columnGap={3} wrap="wrap">
      {players.map((el) => (
        id === el.id ?
        <Flex
          key={el.id}
          justify="space-between"
          align="center"
          flex="1"
          columnGap={3}
          bg= 'orange.500' 
          p={5}
          borderRadius="lg"
        >
          <Text color= {el.current ? 'white' : "gray.500"}>Player {el.id}</Text>
          <Text fontSize="3xl" fontWeight="bold" color= 'white' >
            {el.marks}
          </Text>
        </Flex> :
        <Flex
          key={el.id}
          justify="space-between"
          align="center"
          flex="1"
          columnGap={3}
          bg= "gray.300"
          p={5}
          borderRadius="lg"
        >
          <Text color= {el.current ? 'white' : "gray.500"}>Player {el.id}</Text>
          <Text fontSize="3xl" fontWeight="bold" color= "blue.800">
            {el.marks}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}

export default Players;
