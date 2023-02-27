import { useState } from 'react'

import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'


function Dice() {

    // issues with this one, the function will only produce a string eg dice1, dice2 etc, and I'm unsure how to get it to recognise it as a variable. Img src is only the string not the url associated with the variable. It does run the random dice and you can see it changing the src, but as I said only to the string

    const [dice, setDice] = useState(dice3)   

    function getRandomDice(min, max) {
        let float = Math.random() * (max - min) + min;
        let int = Math.round(float)
        let diceNo = ['dice' + int]
        setDice(diceNo)
        console.log(dice)
    }



  return (
    <div className='it10'><img src={dice} onClick={() => getRandomDice(6,1)}/></div>
  )
}

export default Dice
