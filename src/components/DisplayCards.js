//import the images
import AnneBoonchuy from '../images/anne.jpg';
import HopPopPlantar from '../images/hoppop.png';
import LeopoldLoggle from '../images/loggle.png';
import Sasha from '../images/sasha.jpg';
import MayorToadstool from '../images/toadstool.jpg';
import Wally from '../images/wally.png';

function DisplayCards(){

const cardsArr =  [
    {"name":"Anne Boonchuy","source":AnneBoonchuy,"id":"0"},
    {"name":"Hop Pop Plantar","source":HopPopPlantar,"id":"3"},
    {"name":"Leopold Loggle","source":LeopoldLoggle,"id":"4"},
    {"name":"Mayor Toadstool","source":MayorToadstool ,"id":"10"},
    {"name":"Anne Boonchuy","source":AnneBoonchuy,"id":"0"},
    {"name":"Sasha","source":Sasha,"id":"7"},
    {"name":"Wally","source":Wally,"id":"11"},
    {"name":"Leopold Loggle","source":LeopoldLoggle,"id":"4"},
    {"name":"Mayor Toadstool","source":MayorToadstool ,"id":"10"},
    {"name":"Wally","source":Wally,"id":"11"},
    {"name":"Hop Pop Plantar","source":HopPopPlantar,"id":"3"},
    {"name":"Sasha","source":Sasha,"id":"7"},


];



return(
<div id='main'>
<div id="cardSection">
    {cardsArr.map
        (function(element,index){
           return (
               <div className='scene scene--card'>
               <div id="card-cell"> 
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