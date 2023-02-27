function Random({min, max}) {

    // Function guidance found at - https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

  return (
    <div className="container">
    <p>Random value between {min} and {max} is {Math.round(getRandomNumber(min, max))} </p>

    </div>
  )
}

export default Random
