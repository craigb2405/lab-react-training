import Rating from "./Rating"

function DriverCard({name, rating, img,car}) {

    let int = Math.round(rating);
    // Passing stars as a string based on rating integer.
      function intToStar(int) {
        if (int === 0) {
          return '☆☆☆☆☆';
        }
        if (int === 1) {
          return '★☆☆☆☆';
        }
        if (int === 2) {
          return '★★☆☆☆';
        }
        if (int === 3) {
          return '★★★☆☆';
        }
        if (int === 4) {
          return '★★★★☆';
        }
        if (int === 5) {
          return '★★★★★';
        }
      }
    
    

  return (
    <div className="surroundIt7">
    <div className="containerIt7">
    <div className="imageIt7">
        <img src={img} alt={name}/>
    </div>
    <div className="textIt7">
    <div className="name">
        {name}
    </div>
    <div className="rating">
        {intToStar(int)}
    </div>
    <div className="car">
       {car.model} - {car.licensePlate}

    </div>
    </div>
    </div>
    </div>
  )
}

export default DriverCard
