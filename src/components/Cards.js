
import {useState} from 'react';
import '../App.css';
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

const initialState = {
    score: 0,
  };

function Cards(){
    const [{score},setState] = useState(initialState);

   // const [score,setScore] = useState(0);
    const[clickedTimes,setClickedTimes] = useState(0)
    const [highestScore,sethighestScore] = useState(0);
    const [scoreArr,setScoreArr] = useState([]);
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
const [ids,setIds] = useState([]);

const handleClick = (e) => {
setClickedTimes(clickedTimes+1);
const clickedTarget = e.target;
checkDoubleClick(clickedTarget.id);
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
    if(checkDoubleClick === true){
        console.log('no increase in score');
    } else {
    setState({score:score+1});
}
}

//const clearState = () => {
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
 //testFunction();works fine
console.log("it is present");
return true;

    } else {
 //testFunction();
console.log("it is absent!");
return false;
    }
    }
const clearState = () => {
    setState(initialState);

    }; 

const testFunction = () => {
    console.log('hello')
}

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