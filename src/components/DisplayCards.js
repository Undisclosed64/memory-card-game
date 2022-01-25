//import the images
import AnneBoonchuy from '../images/anne.jpg';
import HopPopPlantar from '../images/hoppop.png';
import LeopoldLoggle from '../images/loggle.png';
import Sasha from '../images/sasha.jpg';
import MayorToadstool from '../images/toadstool.jpg';
import Wally from '../images/wally.png';

import {React,useState,useEffect} from 'react';




function DisplayCards(){
    let [moves,setMoves] = useState(0);

const cardsArr =  [
    {"name":"Anne Boonchuy","source":AnneBoonchuy,"id":"anee"},
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


];
const [cards, setCards] = useState(
    () => shuffleCards(cardsArr.concat(cardsArr))
  );
  
   

let hasFlippedCard = false;
let lockBoard = false;
let firstCard,secondCard;
let firstCardImg,secondCardImg;

 function toggleCard(event) {
     const clickedCard = event.currentTarget;

     if (lockBoard) return;
     if (clickedCard === firstCard) return;
        clickedCard.classList.add('flip');


     var clickedCardImg = clickedCard.childNodes[1];

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
          removeCards();
        } else {
          flipCardBack();
        }
    }
    function removeCards(){
        
        firstCard.removeEventListener('click', toggleCard);
        secondCard.removeEventListener('click', toggleCard);

        firstCard.classList.add('remove');
        secondCard.classList.add('remove');
       
        checkWin();
       resetBoard();

    }
    function flipCardBack(){
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();

          }, 1500);
          
    }
    function checkWin(){
        const matchedCards = document.getElementsByClassName('remove');
            if(matchedCards.length === 12){
                showWinMsg();
            } 
        

    }
    function showWinMsg(){
       alert(`Wohooo!Congratulations!! You completed the challange in ${moves} tries.`);
    }
    
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
      }


    }
    const handleRestart = () => {
        hasFlippedCard = false;
        setMoves(0);
        lockBoard = false;
       
        const cards = document.querySelectorAll('.card-cell');
        cards.forEach(card => { 
            card.classList.remove('flip');
            })
        }
   /* 
   useEffect(() => {
        shuffleCards(cardsArr)
      }, []);*/
    /*
      function shuffleCards(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }*/
      // Fisher Yates Shuffle
function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
 }
 function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
       const randomIndex = Math.floor(Math.random() * i);
       const currentIndex = i - 1;
       swap(array, currentIndex, randomIndex)
    }
    return array;
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
                   
               <div className='scene scene--card'>
               <div className="card-cell"onClick={e=>toggleCard(e)}> 
               <img src='https://images.unsplash.com/photo-1540317700647-ec69694d70d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxlYWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'alt=""className='card__face card__face--front'></img>
            
           <img src={element.source}alt=""key={index}id={element.id}className='card__face card__face--back'></img>

           </div>
           </div>
         )
          
         })}

</div>
</main>

)
}

export default DisplayCards;