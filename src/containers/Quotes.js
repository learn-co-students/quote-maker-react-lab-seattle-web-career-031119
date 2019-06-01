import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  onClickUpvote(id){
    this.props.upvoteQuote(id);
  }
  onClickDownvote(id){
    this.props.downvoteQuote(id);
  }
  onClickRemove(id){
    this.props.removeQuote(id);
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => {

              return <div>
                <p>"{quote.content}"</p>
                <p>-{quote.author}</p>
                <div className="btn-group">
                  <button onClick={() => this.onClickUpvote(quote.quoteId)} type="button" className="btn btn-primary">Upvote</button>
                  <button onClick={() => this.onClickDownvote(quote.quoteId)} type="button" className="btn btn-primary">Downvote</button>
                  <button onClick={() => this.onClickRemove(quote.quoteId)} type="button" className="btn btn-primary">Delete</button>
                </div>
                <p>Votes: {quote.votes}</p>
              </div>})
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapDispatchToProps = dispatch => ({
  removeQuote: id => dispatch(removeQuote(id)),
  upvoteQuote: id => dispatch(upvoteQuote(id)),
  downvoteQuote: id => dispatch(downvoteQuote(id))
})

const mapStateToProps = state => ({quotes: state.quotes})

export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
