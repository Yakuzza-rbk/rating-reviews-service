var axios = require('../apiService/connection');

const readReview =async (req,res) => {
  let id = req.params.id
  try {
      let response =await axios.get(`/reviews?product_id=${id}`)
    
      res.send(response.data)
  } catch (error) {
     
      res.send(error)
  }
}

const readRating =async (req,res) => {
    let id = req.params.id
    try {
        let response =await axios.get("/reviews/meta?product_id="+id)
    
        res.send(response.data)
    } catch (error) {
        
        res.send(error)
    }
  }
  
  module.exports = {
    readReview, readRating
  }