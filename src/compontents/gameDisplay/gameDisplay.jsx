import { useEffect } from "react";
import { useState } from "react";

const GameDispaly = () => {

    const [games, gameList] = useState([]);

  const gameName =  useEffect(() => {
        fetch('https://api.rawg.io/api/platforms?key=e3e65c7a7cbe432693cebeadbef46e4d')
        .then(response => {
            return response.json()
        })
        .then(data => {
            gameList(data)
            console.log('this is the data', data)
        }) 
            
    },[])

    return (  
        <>
            
        </>
    );
}
 
export default GameDispaly;