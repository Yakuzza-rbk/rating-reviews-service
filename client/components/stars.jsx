// import ReactStars from "react-rating-stars-component";
import ReactStars from "react-stars";
import React from "react";
// import { render } from "react-dom";

const ratingChanged = (newRating) => {
  console.log(newRating);
};


// render(<div>
//     {console.log('helloo')}
//     <ReactStars
//     count={5}
//     onChange={ratingChanged}
//     size={24}
//     isHalf={true}
//     emptyIcon={<i className="far fa-star"></i>}
//     halfIcon={<i className="fa fa-star-half-alt"></i>}
//     fullIcon={<i className="fa fa-star"></i>}
//     activeColor="#ffd700"
//   /></div>,

//   document.getElementById("star")
// );

const stars = () => {
  return (
    <div id ='star'>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        value={3}
        size={24}
        color2={"#ffd700"}
      />
    </div>
  );
};

export default stars;
