import { Icon } from "@chakra-ui/react";
import {  ImAngry2, ImBaffled2, ImConfused2,ImEllo, ImCrying2, ImEvil2, ImFrustrated2, ImGrin2, ImHappy2, ImHipster2, ImNeutral2, ImSad2, ImShocked2, ImSleepy2, ImSmile2, ImTongue2, ImWink2, ImWondering2, ImCool2 } from "react-icons/im"

export const initialSettings = {
  theme: [
    { id: 1, value: "icons", selected: false, belongTo: 'theme' },
    { id: 2, value: "numbers", selected: true, belongTo: 'theme' },
  ], //icon2, || numbers
  numberOfPlayers: [
    { id: 1, value: "1", selected: true, belongTo: 'numberOfPlayers' },
    { id: 2, value: "2", selected: false, belongTo: 'numberOfPlayers' }, 
    { id: 3, value: "3", selected: false, belongTo: 'numberOfPlayers' },
    { id: 4, value: "4", selected: false, belongTo: 'numberOfPlayers' }, 
  ],// 1 to 4
  gridSize: [
    { id: 1, value: "4x4", selected: true, belongTo: 'gridSize' },
    { id: 2, value: "6x6", selected: false, belongTo: 'gridSize' },
  ]
};

export const icons = [
  '',
  <Icon as={ImCool2} fontSize={['xl','3xl']}/>,
  <Icon as={ImConfused2} fontSize={['xl','3xl']}/>,
  <Icon as={ImHappy2} fontSize={['xl','3xl']}/>,
  <Icon as={ImSmile2} fontSize={['xl','3xl']}/>,
  <Icon as={ImTongue2} fontSize={['xl','3xl']}/>,
  <Icon as={ImSad2} fontSize={['xl','3xl']}/>,
  <Icon as={ImGrin2} fontSize={['xl','3xl']}/>,
  <Icon as={ImBaffled2} fontSize={['xl','3xl']}/>,
  <Icon as={ImWink2} fontSize={['xl','3xl']}/>,
  <Icon as={ImAngry2} fontSize={['xl','3xl']}/>,
  <Icon as={ImEvil2} fontSize={['xl','3xl']}/>,
  <Icon as={ImShocked2} fontSize={['xl','3xl']}/>,
  <Icon as={ImNeutral2} fontSize={['xl','3xl']}/>,
  <Icon as={ImHipster2} fontSize={['xl','3xl']}/>,
  <Icon as={ImWondering2} fontSize={['xl','3xl']}/>,
  <Icon as={ImSleepy2} fontSize={['xl','3xl']}/>,
  <Icon as={ImFrustrated2} fontSize={['xl','3xl']}/>,
  <Icon as={ImCrying2} fontSize={['xl','3xl']}/>,
  
]

function fillArrayWithHalfLength(length){
  const array = []
  for( let i =1;i<= length; i++){
    if( i > length/2){
      array.push({
        id: i,
        value: `${i - length/2}`,
        flipped: false,
        matched: false
      })
    } else {
      array.push({
        id: i,
        value: `${i}`,
        flipped: false,
        matched: false
      })
    }
   
  }
  return array
}

function fillArrayWithHalfIcon(length,icons){
  const array = []
  for( let i =1;i<= length; i++){
    if( i > length/2){
      array.push({
        id: i,
        value: icons[i - length/2],
        flipped: false,
        matched: false
      })
    } else {
      array.push({
        id: i,
        value: icons[i],
        flipped: false,
        matched: false
      })
    }
  }
  return array
}



export function makeArray(gridSize,theme){
  let array = []
  if(theme === 'numbers'){
    switch (gridSize){
      case '4x4':
         array = fillArrayWithHalfLength(16)
        break;
      case '6x6':
        array = fillArrayWithHalfLength(36)
        break;
      default: 
        array = fillArrayWithHalfLength(16)
          break;
    }
  } else {
    switch (gridSize){
      case '4x4':
        array = fillArrayWithHalfIcon(16,icons)
        break;
      case '6x6':
        array = fillArrayWithHalfIcon(36,icons)
        break;
      default: 
        array = fillArrayWithHalfIcon(16,icons)
          break;
    }
  }
  return array
  
  
}

export function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


export function makePlayerArray(number){
  const temp = []
  for(let i =1; i<= number;i++){
    temp.push({
      id: i,
      current: false,
      marks: 0,
      moves: 0,
      winner: false,
    })
  }
  return temp
}