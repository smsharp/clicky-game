import React from "react";
import CardBtn from "./CardBtn";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      onClick={props.removeFriend}
      data-value="pick"
    />
  </div>
);

export default FriendCard;
