import "../index.css"
import "../main.css"
import Rating from "./rating.jsx";
import axios from "axios";
import { TOKEN } from "../../server/apiService/config.js";
import AddReview from "./AddReviews.jsx";
import ReviewList from "./Review.jsx";
export default class RatingReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { results: [] },
      addreview: "hidden",
      count: 0,
      stars: 0,
      ra: [],
      recommend:false
    };
    this.getReviewsDataFromAPi = this.getReviewsDataFromAPi.bind(this);
    this.addrerevies = this.addrerevies.bind(this);
    this.handleStars = this.handleStars.bind(this);
    this.Progress = this.Progress.bind(this);

  }
  Progress(data) {
    console.log("daaaaaaaaaaatatat",data);
    this.setState({ra:data})
    // if (data.rating === 5) {
    //   this.state.ra.five += 1;
    //   // this.setState({ ra: { five: this.state.ra.five } });
    // }
    // if (data.rating === 4) {
    //   this.state.ra.four += 1;
    //   // this.setState({ ra: { four: this.state.ra.four } });
    // }
    // if (data.rating === 3) {
    //   this.state.ra.three += 1;
    //   // this.setState({ ra: { three: this.state.ra.three } });
    // }
    // if (data.rating === 2) {
    //   this.state.ra.two += 1;
    //   // this.setState({ ra: { two: this.state.ra.two } });
    // }
    // if (data.rating === 1) {
    //   this.state.ra.one += 1;
      // this.setState({ ra: { one: this.state.ra.one } });
    // }
    // this.setState({
    //   ra: {
    //     five: this.state.ra.five,
    //     four: this.state.ra.four,
    //     three: this.state.ra.three,
    //     two: this.state.ra.two,
    //     one: this.state.ra.one,
    //   },
    // });
   return
  }
  getReviewsDataFromAPi() {
    axios
      .get(`/reviews/api/11001`)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  addrerevies() {
    if (this.state.count === 0) {
      this.setState({ addreview: "shown", count: 1 });
    } else {
      this.setState({ addreview: "hidden", count: 0 });
    }
  }
  componentDidMount() {
    console.log("service mounted");
    this.getReviewsDataFromAPi();
  }
  handleStars(num) {
    this.setState({ stars: num });
  }
  render() {
    return (
      <div>
        <h1 className="text-2xl ml-40 py-8 text-gray-400">
          {" "}
          RATINGS & REVIEWS
        </h1>
        <div className="flex items-stretch px-24 mx-12">
          {console.log(this.state.data)}
          <Rating rating={this.state.ra} />
          <ReviewList
            handleStars={(num) => this.handleStars(num)}
            data={this.state.data}
            addrerevies={this.addrerevies}
            addreview={this.state.addreview}
            Progress={this.Progress}
          />
        </div>
      </div>
    );
  }
}
