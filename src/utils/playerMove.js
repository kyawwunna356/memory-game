export function singlePlayerMove(setPlayers){
    setPlayers(prevPlayers => {
        return prevPlayers.map(el => {
            return {...el,moves: el.moves +1}
    })
})
}


export function multiPlayerMove(setPlayers,id){
    setPlayers(prevPlayers => {
        return prevPlayers.map(el => {
            if(el.id === id){
                return {
                    ...el,
                    marks: el.marks + 1
                }
            } else {
                return el
            }
            
        })
    })
}