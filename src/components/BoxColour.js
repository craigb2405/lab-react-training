function BoxColour(r, g, b) {

function toHex (r, g, b) {
   r = r.toString(16)
   g = g.toString(16)
   b = b.toString(16)

//    Had issues with the above and return below not handling "0" correct in RGB. Found this solution on https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgb-to-hex

    if(r.length === 1){
        r = "0" + r
    }
    if(g.length === 1){
        g = "0" + g
    }
    if(b.length === 1){
        b = "0" + b
    }
    return "#" + r + g + b

   

    

}

const divStyle = {
    backgroundColor: `rgb( ${r.r}, ${r.g}, ${r.b})`
}
  return (
  
    <div style={divStyle} className="container">rgb({r.r},{r.g},{r.b})
    <br/>{toHex(r.r,r.g,r.b)}</div>
    
   )
}

export default BoxColour