//import the images
import AnneBoonchuy from '../images/anne.jpg';
import HopPopPlantar from '../images/hoppop.png';
import LeopoldLoggle from '../images/loggle.png';
import Sasha from '../images/sasha.jpg';
import MayorToadstool from '../images/toadstool.jpg';
import Wally from '../images/wally.png';
import mapleLeaf from '../images/mapleLeaf.jpg';

import {React,useState,useEffect} from 'react';

function Cards(){
let [moves,setMoves] = useState(0);

let hasFlippedCard = false;
let firstCard,secondCard;
let firstCardImg,secondCardImg;

let [cardsArr, setCardsArr] =  useState([    {"name":"Anne Boonchuy","source":AnneBoonchuy,"id":"anee"},
    {"name":"Hop Pop Plantar","source":HopPopPlantar,"id":"h.p.planter"},
    {"name":"Leopold Loggle","source":LeopoldLoggle,"id":"leopold"},
    {"name":"Mayor Toadstool","source":MayorToadstool ,"id":"mayor"},
    {"name":"Anne Boonchuy","source":AnneBoonchuy,"id":"anee"},
    {"name":"Sasha","source":Sasha,"id":"sasha"},
    {"name":"Wally","source":Wally,"id":"wally"},
    {"name":"Leopold Loggle","source":LeopoldLoggle,"id":"leopold"},
    {"name":"Mayor Toadstool","source":MayorToadstool ,"id":"mayor"},
    {"name":"Wally","source":Wally,"id":"wally"},
    {"name":"Hop Pop Plantar","source":HopPopPlantar,"id":"h.p.planter"},
    {"name":"Sasha","source":Sasha,"id":"sasha"},
]);
   
 function handleGame(event) {
     const clickedCard = event.currentTarget;

     if (clickedCard === firstCard) return;
        clickedCard.classList.add('flip');

     const clickedCardImg = clickedCard.childNodes[1];

     if(!hasFlippedCard){
         hasFlippedCard = true;
         firstCard=clickedCard;
         firstCardImg = clickedCardImg
     } else {
         secondCard = clickedCard;
         secondCardImg = clickedCardImg;
         checkForMatch();
     }
    
     function checkForMatch() {
         setMoves(moves+1);

        if (firstCardImg.id === secondCardImg.id) {
          disableCards();
        } else {
          flipCardBack();
        }
    }
    function disableCards(){
        
        firstCard.removeEventListener('click', handleGame);
        secondCard.removeEventListener('click', handleGame);

        firstCard.classList.add('disabled');
        secondCard.classList.add('disabled');
       
        checkWin();
       resetBoard();

    }
    function flipCardBack(){

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();

          }, 500);
          
    }
    function checkWin(){
        const matchedCards = document.getElementsByClassName('disabled');
            if(matchedCards.length === 12){
                showWinMsg();
            }  
    }
    function showWinMsg(){
        setTimeout(() => {
            alert(`Wohooo!Congratulations!!You completed the challenge in ${moves} tries!`);
          }, 1000); 
    }
    
    function resetBoard() {
        [hasFlippedCard] = [false];
        [firstCard, secondCard] = [null, null];
      }
    }
    const handleRestart = () => {
        hasFlippedCard = false;
        setMoves(0);

        shuffleCards();

        const cards = document.querySelectorAll('.card-cell');
        cards.forEach(card => { 
            card.classList.remove('flip');
            })
        }
   
   useEffect(() => {
        shuffleCards();
      }, []);
     
      function shuffleCards() {
        setCardsArr([...cardsArr.sort( ()=>Math.random()-0.5 )]); 
      }
      
      
return(

<main id='main'>
<p id='findLine'>Find the matching pair of each card in the least number of tries!</p>
<div className='moveRestart'><h2 id="move">Moves: {moves}
</h2>
<button onClick={handleRestart}>Restart</button></div>

<div id="cardSection">
    {cardsArr.map
        (function(element,index){
           return (
                   
               <div className='scene scene--card'key={index}>
               <div className="card-cell"onClick={e=>handleGame(e)}> 
               <img src={mapleLeaf}alt="maple leaf"className='card__face card__face--front'></img>
            
           <img src={element.source}alt="memory-card"key={index}id={element.id}className='card__face card__face--back'></img>

           </div>
           </div>
         )
          
         })}

</div>
</main>

)
}


export default Cards;