import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { makeArray, makePlayerArray, shuffle } from '../utils/initialData'
import Board from './Board'
import Congratz from './Congratz'
import Navbar from './Navbar'


function Home({finalConfig}) {
  console.log('runned')
  
  const {theme,numberOfPlayers,gridSize} = finalConfig
  //board
  const [board,setBoard] = useState([])
  const [spareBoard,setSpareBoard] = useState([])
  
  //players
  const [players,setPlayers] = useState([])
  const [sparePlayers,setSparePlayers] = useState([])
  const [id,setId] = useState(0)   // player Id

  //game finish or not
  const [finished,setFinished] = useState(false)

  const [time,setTime] = useState({
      min : 0,
      second: 0
  })
  const [timer,setTimer] = useState(null)

    useEffect(()=>{
      setTimer(setInterval(() => setTime(prevTime => {
        return {...prevTime,second: prevTime.second + 1 }
      }),1000))
     
      return () =>{
        clearInterval(timer)
      }
  },[])

  useEffect(()=>{
    if(time.second >= 60){
      setTime(prevTime => {
        return {
          ...prevTime,
          min: prevTime.min + 1,
          second : 0
        }
      })
    }
  },[time])

  // const navbar = useMemo(() => <Navbar restart={restart}/>,[])
  
  useEffect(() => {
    //set the board and the spare board for restart
    const array = makeArray(gridSize,theme)    
    const shuffleArray = shuffle(array)        
    setSpareBoard(shuffleArray)
    setBoard(shuffleArray)

    //set the players and spare players for restart
    const playerArray = makePlayerArray(numberOfPlayers)
    setPlayers(playerArray)
    setSparePlayers(playerArray)
    
  },[])

  useEffect(() =>{
    if(board.length > 0){
      let matchedFalseArray = board.filter(el => el.matched === false)
      if(!matchedFalseArray.length > 0){
        setFinished(true)
      }
      }
  },[board])


  

  function restart() {
    setBoard(spareBoard)
    setPlayers(sparePlayers)
    setId(1)
    setTime({min : 0,second: 0})
    setTimer(setInterval(() => setTime(prevTime => {
      return {...prevTime,second: prevTime.second + 1 }
    }),1000))
    setFinished(false)
  }
  
  // console.log(board)
  return (
      <>
        {
          finished ? 
          <Congratz players={players} restart={restart} time={time} timer={timer} />
          : ''
          }
          <Box py='50px' px={['40px','80px']} height={['100vh','100vh','140vh']}>
            <Navbar restart={restart} />
            <Flex justify='center' align="center" mt='180px'>
                <Board  time={time} setTime={setTime} board={board} setBoard={setBoard} players={players} setPlayers={setPlayers} id={id} setId={setId}/>
          </Flex>
            
          </Box>
        
      </>
  )
}

export default Home