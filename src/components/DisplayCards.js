//import the images
import AnneBoonchuy from '../images/anne.jpg';
import HopPopPlantar from '../images/hoppop.png';
import LeopoldLoggle from '../images/loggle.png';
import Sasha from '../images/sasha.jpg';
import MayorToadstool from '../images/toadstool.jpg';
import Wally from '../images/wally.png';

function DisplayCards(){

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

let hasFlippedCard = false;
let firstCard,secondCard;
let firstCardImg,secondCardImg;

 function toggleCard(event) {
     const clickedCard = event.currentTarget;
     clickedCard.classList.add('flip');

     var clickedCardImg = clickedCard.childNodes[1];
    
     if(!hasFlippedCard){
         hasFlippedCard = true;
         firstCard=clickedCard;
         firstCardImg = clickedCardImg
         console.log(firstCard);

     } else {
         secondCard = clickedCard;
         hasFlippedCard = false;
         secondCardImg = clickedCardImg;
         console.log(secondCard);
         checkForMatch();

     }

     function checkForMatch() {
        if (firstCardImg.id === secondCardImg.id) {
          removeCards();
          //return;
        alert('yayy!Its a match!');
        } else {
          flipCardBack();
        }
    }
    function removeCards(){
   firstCardImg.style.display="none";
   secondCardImg.style.display="none"  
    }
    function flipCardBack(){
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
          }, 1500);
    }

    }


return(
<div id='main'>
<div id="cardSection">
    {cardsArr.map
        (function(element,index){
           return (
               <div className='scene scene--card'>
               <div className="card-cell"onClick={e=>toggleCard(e)}> 
               <img src='https://media.istockphoto.com/photos/autumn-maple-leaves-picture-id92774227?s=612x612'alt=""className='card__face card__face--front'></img>
            
           <img src={element.source}alt=""key={index}id={element.id}className='card__face card__face--back'></img>

           </div>
           </div>
         )
          
         })}

</div>
</div>

)
}

export default DisplayCards;