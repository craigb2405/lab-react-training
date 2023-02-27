import VisaLogo from '../assets/images/visa.png'
import MCLogo from './MasterCard'
// import MCLogo from '../assets/images/master-card.svg'


function CreditCard({type, number, expirationMonth, expirationYear,bank,owner,bgColor,color}) {
console.log(<MCLogo/>)

// Altered my approach after looking at Henriques code after speak to him, I had read about react not dealing with svg the same as other image formats and what I'd need to do but wasnt sure that was correct. I created it as a component and imported it but it wouldnt work in my if else statement, I looked at Henriques code and seen he used a Ternary statement so tried that and it worked.

let logo = 
type === 'Visa' ? (
    <img src={VisaLogo} alt="VisaLogo"/>
) : (
    <MCLogo />
)


     
const newNumber = number.replace(/^.{12}/g, '**** **** **** ')

        
  return (
    
    <div className="container">
    <div className="creditCard" style={{background: `${bgColor}`, color: `${color}`}}>
    <div className='type'>{logo}</div>
    <div className='number'>{newNumber}</div>
    
    <div className='exp'>{expirationMonth.toString().padStart(2, '0')}/{expirationYear}<div>{bank}</div></div>
    <div className='name'>{owner}</div>
    
    
    
    </div>

    </div>

  )
}

export default CreditCard
