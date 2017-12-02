import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import friendsArray from "./friendsArray.js";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    message: "Click each image only once!",
    scoreCard: 0,
    selected: false
  };

  removeFriend = id => {
    // Somehow need to change the card clicked on's selected value to true.
    // FriendsCard[id].selected = true;
    this.setState({ selected: this.state.selected = true });
      if (this.state.selected = true) {
        this.increaseScore();
      }
      if (this.state.selected = false) {
        this.setState({ message: "You Lose!!" });
      }
    // Call shuffle card function...
    console.log(friends);
  };

  increaseScore = () => {
    this.setState({ scoreCard: this.state.scoreCard + 1 });
    this.youWinMessage();
  }

  youWinMessage = () => {
    if (this.state.scoreCard >= 11) {
      this.setState({ scoreCard: 11 });
      this.setState({ message: "You win!!" });
      console.log("You win");
    }
  }

  // Create shuffle cards function...
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>

        <div className="panel panel-primary">
          <div className="panel-heading"><h2>Clicky Game!</h2>
            <h3 id="messageText">{this.state.message}</h3>
            <h3>Score: {this.state.scoreCard}</h3>
          </div>
        </div>
        <div id="cardDiv">
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            selected={friend.selected}

          />
        ))}
        </div>

      </div>
    );
  }
}
export default App;