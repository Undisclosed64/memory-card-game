
import {useState} from 'react';
import '../App.css';
//import the images
import AnneBoonchuy from '../images/anne.jpg';
import SadieCroaker from '../images/croaker.png';
import CaptainGrime from '../images/grime.png';
import HopPopPlantar from '../images/hoppop.png';
import LeopoldLoggle from '../images/loggle.png';
import MaddieFlour from '../images/maddie.jpg';
import PollyPlantar from '../images/polly.png';
import Sasha from '../images/sasha.jpg';
import SprigPlantar from '../images/sprig.png';
import SylviaSundew from '../images/sylvia.png';
import MayorToadstool from '../images/toadstool.jpg';
import Wally from '../images/wally.png';

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
    const [cardsArr,setCardsArr] =  useState([
        {"name":"Anne Boonchuy","source":AnneBoonchuy,"id":"0"},
        {"name":"Sadie Croaker","source":SadieCroaker,"id":"1"},
        {"name":"Captain Grime","source":CaptainGrime,"id":"2"},
        {"name":"Hop Pop Plantar","source":HopPopPlantar,"id":"3"},
        {"name":"Leopold Loggle","source":LeopoldLoggle,"id":"4"},
        {"name":"Maddie Flour","source":MaddieFlour,"id":"5"},
        {"name":"Polly Plantar","source":PollyPlantar,"id":"6"},
        {"name":"Sasha","source":Sasha,"id":"7"},
        {"name":"Sprig Plantar","source":SprigPlantar,"id":"8"},
        {"name":"Sylvia Sundew","source":SylviaSundew,"id":"9"},
        {"name":"Mayor Toadstool","source":MayorToadstool ,"id":"10"},
        {"name":"Wally","source":Wally,"id":"11"},
]);

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
            shuffleArray(cardsArr)

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
    
         <div id="cardSection">
        {cardsArr.map
        (function(element,index){
           return (
               <div id="card-cell">
           <img src={element.source}alt=""key={index}id={element.id}onClick={handleClick}></img>
           <div className="cardName">{element.name}</div>
           </div>
         )
          
         })}
         </div>
         </div>
    ) 

    
        }
    
    
    
export default Cards;