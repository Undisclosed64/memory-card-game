
import {useState} from 'react';
import '../App.css';

const initialState = {
    score: 0,
  };

function Cards(){
    const [{score},setState] = useState(initialState);

   // const [score,setScore] = useState(0);
    const[clickedTimes,setClickedTimes] = useState(0)
    const [highestScore,sethighestScore] = useState(0);
    const [scoreArr,setScoreArr] = useState([]);
    const [cardsArr,setCardsArr] =  useState([{"name":"card1","id":"0"},{"name":"card2","id":"1"},{"name":"card3","id":"2"},{"name":"card4","id":"3"},{"name":"card5","id":"4"},{"name":"card6","id":"5"},{"name":"card7","id":"6"},{"name":"card8","id":"7"}
]);
const [ids,setIds] = useState([]);

const handleClick = (e) => {
setClickedTimes(clickedTimes+1);
//console.log(clickedTimes);
const clickedTarget = e.target;
checkDoubleClick(clickedTarget.id)
getID(clickedTarget);

incrementScore();

    scoreArr.push(score+1);
    sethighestScore(Math.max(...scoreArr));

            shuffleArray(cardsArr)

function shuffleArray(array) {
    return array.sort( ()=>Math.random()-0.5 ); 
}

}

function incrementScore(){
    setState({score:score+1});
}
//const clearState = () => {
   //setState({...initialState});
  // setState(initialState)
   
   // }; 

function getID (card){
    const clickedCardId = card.id;
   // console.log(clickedCardId);
    storeId(clickedCardId)
}
function storeId(id){
    ids.push(id);
}
function checkDoubleClick(cardId){
    if(ids.indexOf(cardId) !== -1){ 
 clearState();
console.log("it is present")
    } else {
console.log("it is absent!");
incrementScore();
    }
    
    }
const clearState = () => {
   setState(initialState)
    }; 


    return(
        <div>
         <h3>score:{score}</h3>
         <h4>Highest score:{highestScore}</h4>
         <h1 onClick={clearState}>Reset</h1>

         
        {cardsArr.map
        (function(element,index){
           return (<button key={index}id={element.id}onClick={handleClick}>{element.name}</button>)
          
         })}
         
         </div>
    ) 

    
        }
    
    
    
export default Cards;