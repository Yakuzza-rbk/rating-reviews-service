
import ReactStars from "react-stars"

export default class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            title:'',
            imageurl:'',
            description:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }
    handleSubmit() {
        console.log('yeesssss');
    }
  render() {
    return (
        <div className="flex h-screen bg-gray-200 items-center justify-center  mt-32 mb-32">
        <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
          <div className="mx-20">
          <ReactStars
                count={5}
                size={24}
                color2={'#ffd700'} /> 
           </div>     
          <div className="grid grid-cols-1 mt-5 mx-7">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">E-mail</label>
            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" name="email" onChange={(e)=>this.handleChange(e)} placeholder="“Example: jackson11@email.com”." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div className="grid grid-cols-1">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Title</label>
              <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" name='title' onChange={(e)=>this.handleChange(e)} placeholder="Best purchase ever" />
            </div>
            <div className="grid grid-cols-1">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Write Your Review</label>
              <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text"name="description"onChange={(e)=>this.handleChange(e)} placeholder=" “Why did you like the product or not?”" />
            </div>
          </div>
          <div className="grid grid-cols-1 mt-5 mx-7">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
              <div className='flex items-center justify-center w-full'>
                  <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
                      <div className='flex flex-col items-center justify-center pt-7'>
                        <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>Select a photo</p>
                      </div>
                    <input type='file' className="hidden" />
                  </label>
              </div>
          </div>
      
          <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
            <button className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>ADD</button>
          </div>
      
        </div>
      </div>
    )
      
  }
}


