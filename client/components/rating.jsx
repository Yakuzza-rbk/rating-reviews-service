import ReactStars from "react-stars";
import Nouislider from "./Nouislider.jsx";
import axios from 'axios';
import Bars from "./ProgressBar.jsx"

const Rating = () => {
  const { useState, useEffect} = React
  const [rating , setRating] =  useState(0);
  const [rat , setRat] =useState([]);
  const [tot , setTot] = useState(0)
  const [avg , setAvg] = useState(0)
  useEffect(() => {
    axios.get("/reviews/api/meta/11002").then((resp)=>{
      console.log(resp.data)
      var arr = Object.values(resp.data.ratings) 
      var sum = 0 
      var arvg = 0
      var rec = 0 
      for(let i = 0 ; i<arr.length ; i++ ){
        sum+=Number(arr[i]) 
        arvg = sum/arr.length
      }
      setRat(resp.data.ratings)
      setTot(sum)
      setRating(arvg); 
      var toot = 0
      for ( let i in resp.data.recommended ){
       toot= toot + Number(resp.data.recommended[i])
       }
       
      
      //  console.log("tot" ,resp.data.recommended[i]);
       if(resp.data.recommended[true]){
         console.log("rec",resp.data.recommended[true])
         rec = (resp.data.recommended[true]*100)/toot
       }
       setAvg(Math.floor(rec))

       console.log(rec)
    });
  },[]);
  console.log(rating)

  return (
    <div className="w-2/5">
      <div className="flex items-start py-3">
        <p className="text-7xl ml-6 font-extrabold text-gray-600">{rating}</p>
        <div className="">
          <ReactStars 
          count={5} 
          size={24} 
          value={rating}
          color2={"#ffd700"} />
        </div>
      </div>
      <p className="text-gray-400 ml-8">
        {avg}% of reviews recommend this product
      </p>

      <div className="py-4 ml-8">
        <div className="flex items-stretch ">
          <p className="underline">5 stars</p>
          <div className="shadow w-10/12 bg-gray-200 mt-2">
          <Bars bgcolor={"#49c14c"} completed={Math.floor(Number(rat[5])*100/tot)} />
          </div>
        </div>
        <div className="flex items-stretch ">
          <p className="underline">4 stars</p>
          <div className="shadow w-10/12 bg-gray-200 mt-2">
          <Bars bgcolor={"#49c14c"} completed={Math.floor(Number(rat[4])*100/tot)} />
          </div>
        </div>
        <div className="flex items-stretch ">
          <p className="underline">3 stars</p>
          <div className="shadow w-10/12 bg-gray-200 mt-2">
          <Bars bgcolor={"#49c14c"} completed={Math.floor(Number(rat[3])*100/tot)} />
          </div>
        </div>
        <div className="flex items-stretch ">
          <p className="underline">2 stars</p>
          <div className="shadow w-10/12 bg-gray-200 mt-2">
          <Bars bgcolor={"#49c14c"} completed={Math.floor(Number(rat[2])*100/tot)} />
          </div>
        </div>
        <div className="flex items-stretch ">
          <p className="underline">1 stars</p>
          <div className="shadow w-10/12 bg-gray-200 mt-2">
          <Bars bgcolor={"#49c14c"} completed={Math.floor(Number(rat[1])*100/tot)} />
          </div>
        </div>
      </div>
      <Nouislider start={50} sections={3} />
    </div>
  );
};

export default Rating;