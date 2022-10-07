import { Box, Button, Circle, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { multiPlayerMove, singlePlayerMove } from "../utils/playerMove";
import Players from "./Players";
import SinglePlayer from "./SinglePlayer";


function Board({ board, setBoard,setPlayers, players, id, setId,time,setTime}) {
  const column = board.length === 16 ? "4" : "6";
  const width = board.length === 16 ? "lg" : "xl";
  const ml = board.length === 16 ? "3" : "";
  const [store,setStore] = React.useState([])

 
 
  function handleStore(el) {
   
        markFlipped(el.id,true)
        setStore(prevStore => {
            if(prevStore.length >= 2){
                const temp = []
                temp[0] = el
                return temp
            } else {
                if(store[0]){
                    if(store[0].id === el.id){
                        return prevStore
                    } else {
                        return [...prevStore,el]
                    }
                } else {
                    return [...prevStore,el]
                }
                
                
            }
        })
  }

  useEffect(()=> {setId(1)},[])
  
  useEffect(() =>{
        if(typeof store[0] !== 'undefined' && typeof store[1] !== 'undefined'){
            if(store[0].value === store[1].value){
                markMatched(store[0].id)
                markMatched(store[1].id)
                if(players.length > 1){
                    multiPlayerMove(setPlayers,id)
                } else {
                    singlePlayerMove(setPlayers)    
                }
            } else {
                setTimeout(() =>{ 
                    markFlipped(store[0].id,false)
                    markFlipped(store[1].id,false)
                    
                },400)
                
                if(players.length > 1){
                    setId(id => id >= players.length ?  1 : id + 1 )
                } else {
                    singlePlayerMove(setPlayers)    
                }
               
            }
           
        }
       
  },[store])

  function markFlipped(id,flag){
        setBoard(prevBoard => {
            return prevBoard.map(el =>{
                if(el.id === id){
                    return {
                        ...el,
                        flipped: flag,
                    }
                } else {
                    return el
                }
            })
        })
  }

  function markMatched(id){
    setBoard(prevBoard => {
        return prevBoard.map(el =>{
            if(el.id === id){
                return {
                    ...el,
                    matched: true,
                } 
            } else {
                return el
            }
        })
    })
  }


  return (
    <Flex direction='column' width='100%' >
    <Box w={['inherit',width]} m="auto">
      <Grid templateColumns={`repeat(${column}, 1fr)`} gap={4}>
        {board.map((el, i) => (
          <GridItem key={i}
            cursor="pointer"
            color={el.flipped ? 'gray.100' : 'blue.800'}
          >
            <Circle
              ml={ml}
              size={["40px", "80px"]}
            >
              <Button fontSize={["xl", "3xl"]}
              onClick={()=>{handleStore(el)}}
              fontWeight="bold" 
              disabled={el.matched ? true: false} 
              width='100%' 
              height='100%' 
              borderRadius="50%"  
              bg = {(el.matched ? 'gray.500' : (el.flipped ?  'orange.500':'blue.800'))} 
              _hover={{bg: 'orange.500', borderRadius : "50%", color: el.flipped ? 'white' : 'orange.500'}}
              
              >{el.value}
              </Button>
            </Circle>
          </GridItem>
        ))}
      </Grid>
    </Box>
    <Box width='100%' mt='180px' pb={5}>
            {players.length > 1 
            ? <Players players={players} id={id}/> 
            : <SinglePlayer players={players} time={time} setTime={setTime}/>}
    </Box>
    </Flex>
  );
}

export default Board;
