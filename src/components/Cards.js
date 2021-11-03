
import {useState} from 'react';
import '../App.css';

function Cards(){
    const [score,setScore] = useState(0);
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
   // const clickedCard = e.target;
   // clickedCard.classList.add('clicked');
   // console.log(clickedCard);
   // setScore(score + 1);
    //console.log(score);


    scoreArr.push(score);
    //console.log(scoreArr);
    
    sethighestScore(Math.max(...scoreArr));
       // console.log(highestScore);
    
            shuffleArray(cardsArr)
        // console.log(cardsArr);

        // checkDoubleClick();

function shuffleArray(array) {
    return array.sort( ()=>Math.random()-0.5 ); 
   }

  
   /**/ 
}
function incrementScore(){
    setScore(score + 1);

}
function getID (card){
    const clickedCardId = card.id;
   // console.log(clickedCardId);
    storeId(clickedCardId)
}
function storeId(id){
    //setIds(ids.push(id))
    ids.push(id);
    //console.log(ids);
//checkDoubleClick(id)

}
function checkDoubleClick(cardId){
    if(ids.indexOf(cardId) !== -1){ 
        resetScore();
console.log("it is present")
    } else {
console.log("it is absent!");
incrementScore();
    }
    
    }
function resetScore(){
setScore(score(0))
}








    return(
        <div>
         <h3>score:{score}</h3>
         <h4>Highest score:{highestScore}</h4>

         
        {cardsArr.map(function(element,index){
           return (<button key={index}id={element.id}onClick={handleClick}>{element.name}</button>)
          
         })}
         
         </div>
    ) 

    
        }
    
    
    
export default Cards;