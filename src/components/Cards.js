import {useState} from 'react';

const cardsArr = [{"name":"card1"},{"name":"card2"},{"name":"card3"},{"name":"card4"},{"name":"card5"},{"name":"card6"},{"name":"card7"},{"name":"card8"}
];

function Cards(){
    const [score,setScore] = useState(0);
    
    const handleClick = () => {
        setScore(score + 1);
    }
    
    return(

        <div>
         <h1>score:{score}</h1>
        {cardsArr.map(function(element, index){
           return (<button key={index}onClick={handleClick}>{element.name}</button>)
         })}
         </div>
    )
    
    
}


export default Cards;