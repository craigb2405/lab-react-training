import { useState } from "react"

// Looked into what others had submitted after not being able to complete this. Seen they used State, which makes sense since its
// a states lab. Then wrote the code myself, but have to give credit to Nicole.

function ClickablePicture(props) {
  

    const [image, setImage] = useState(props.img)

    function ClickablePicture(){
        if (image === props.img){
            setImage(props.imgClicked)
        } else {setImage(props.img)}
    }
    
  return (
    <div>
    <img src={image} onClick={() => ClickablePicture()}/>


    </div>
  )
}

export default ClickablePicture
