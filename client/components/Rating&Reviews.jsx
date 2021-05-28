import React from 'react';

export default class RatingReviews extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    console.log('service mounted')
  }

  render() {
    return (
      <div>
        <h1>Hello Service </h1>
      </div>
    );
  }
}