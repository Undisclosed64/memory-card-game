
/*import {useState} from 'react';
import '../App.css';

//set an initial state of score 
const initialState = {
    score: 0,
  };

const Cards = () => {
    //set initial state of necessary fields
    const [{score},setState] = useState(initialState);
    const [highestScore,setHighestScore] = useState(0);
    const [scoreArr,setScoreArr] = useState([]);
    const [ids,setIds] = useState([]);
   

//handle card click
const handleClick = (e) => {
    //get clicked card
const clickedTarget = e.target;

//check if there's a double click on any card
checkDoubleClick(clickedTarget.id);

//get the id of clicked card
getID(clickedTarget);

 //increment the score on each click
 incrementScore();

 //shuffle cards
       //     shuffleArray(cardsArr)

function shuffleArray(array) {
    return array.sort( ()=>Math.random()-0.5 ); 
}
}

//define incrementScore function
function incrementScore(){
    setState({score:score+1});
}

//clear State
const clearState = () => {
   setState(initialState)
   }; 

   //define get id function
function getID (card){
    const clickedCardId = card.id;
    storeId(clickedCardId)
}
//store the id in an array
function storeId(id){
    ids.push(id);
}
//define checkDoubleClick
function checkDoubleClick(cardId){
    if(ids.indexOf(cardId) !== -1){ 
 clearState();
 scoreArr.push(score+1);
 setHighestScore(Math.max(...scoreArr));
console.log("it is present");

    } else {
 //testFunction();
console.log("it is absent!");
    }
    }

    //return jsx
    return(
        <div id="main">
         <h3>Score:{score}</h3>
         <h4>Highest Score:{highestScore}</h4>
    </div>
        
    ) 

            }
    
    
    
export default Cards;*/