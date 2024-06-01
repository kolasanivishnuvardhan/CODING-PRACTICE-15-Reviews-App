import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {review: this.props.reviewsList[0], index: 0}
  onClickLeftArrow = () => {
    const {review} = this.state
    const {reviewsList} = this.props
    const currentIndex = reviewsList.findIndex(
      obj => obj.username === review.username,
    )
    //console.log(index)
    if (currentIndex === 0) {
      this.setState({review: this.props.reviewsList[0], index: 0})
    } else {
      this.setState({
        review: this.props.reviewsList[currentIndex - 1],
        index: currentIndex - 1,
      })
    }
  }

  onClickRightArrow = () => {
    const {review} = this.state
    const {reviewsList} = this.props
    const currentIndex = reviewsList.findIndex(
      obj => obj.username === review.username,
    )
    if (currentIndex < reviewsList.length - 1) {
      this.setState({
        review: this.props.reviewsList[currentIndex + 1],
        index: currentIndex + 1,
      })
    } else {
      this.setState({
        review: this.props.reviewsList[reviewsList.length - 1],
        index: reviewsList.length - 1,
      })
    }
  }
  render() {
    const {review} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <button className="btn" type="button" onClick={this.onClickLeftArrow} data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="each-review-container">
            <img
              src={review.imgUrl}
              className="profile-img"
              alt={review.username}
            />
            <p className="name">{review.username}</p>
            <p className="company-name">{review.companyName}</p>
            <p className="description">{review.description}</p>
          </div>

          <button className="btn" onClick={this.onClickRightArrow} type="button" data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
