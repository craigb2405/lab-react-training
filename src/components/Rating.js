function Rating(props) {
// Converting floating point to integer
  let int = Math.round(props.children);
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

  return <div className="container">{intToStar(int)}</div>;
}

export default Rating;
