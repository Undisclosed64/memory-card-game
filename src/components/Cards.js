import {useState} from 'react';
import '../App.css';



   
function Cards(){
    const [score,setScore] = useState(0);
    const [highestScore,sethighestScore] = useState(0);
    const [scoreArr,setScoreArr] = useState([]);
    const [cardsArr,setCardsArr] =  useState([{"name":"card1"},{"name":"card2"},{"name":"card3"},{"name":"card4"},{"name":"card5"},{"name":"card6"},{"name":"card7"},{"name":"card8"}
]);


const handleClick = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('clicked');
    console.log(clickedCard);

    setScore(score + 1);
    console.log(score);
    
    scoreArr.push(score + 1);
    console.log(scoreArr);
    
    sethighestScore(Math.max(...scoreArr));
        console.log(highestScore);
    
            shuffleArray(cardsArr)
         console.log(cardsArr);


function shuffleArray(array) {
    return array.sort( ()=>Math.random()-0.5 ); 
   }
      /**/ 

    

    



}
    


    return(
        <div>
         <h3>score:{score}</h3>
         <h4>Highest score:{highestScore}</h4>

         
        {cardsArr.map(function(element, index){
           return (<button key={index}onClick={handleClick}>{element.name}</button>)
         })}
         </div>
    ) 

        }


export default Cards;