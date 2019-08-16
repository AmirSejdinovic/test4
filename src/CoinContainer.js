import React, {Component} from 'react';
import Coin from './coin';
import {choice} from './hellpers';

class CoinContainer extends Component{
  static defaultProps = {
    coins: [
     {
       side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"
     },
     {
       side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"
     }
    ]
  }
  constructor(props){
    super(props);
    this.state = {

      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }
    this.handleClick = this.handleClick.bind(this);
    
  }
  flipCoin(){
     const newCoin = choice(this.props.coins);
     this.setState(st => {
       let newState = {
         ...st,
        currCoin: newCoin,
        nFlips: st.nFlips + 1,

      };
      if(newCoin.side === "heads"){
        newState.nHeads += 1;
      }else{
        newState.nTails += 1;
      }
       return newState;
     });
  }
  handleClick(e){
    this.flipCoin();
  }
  render(){
    return(
      <div className="CoinContainer">
         <h2>Let's Flip a Coin</h2>
         <button onClick={this.handleClick}>Flip me!</button>
         {this.state.cuurCoin &&<Coin info={this.state.currCoin}/>}
         <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>
       
       
      </div>
    )
  }
}

export default CoinContainer;