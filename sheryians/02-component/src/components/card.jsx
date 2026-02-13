import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} />
      <h1>
        {props.user} {props.age}
      </h1>
      <p>Lorem ipsum dolor sit afmet consectetur adipisicing elit.</p>
      <button className="btn">View Profile</button>
    </div>
  );
};

export default Card;
