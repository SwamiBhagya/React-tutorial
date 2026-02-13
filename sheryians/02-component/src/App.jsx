import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Saurav"
        age={18}
        img="https://plus.unsplash.com/premium_photo-1736816227895-e0653ceb1f0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
      />
      <Card
        user="Bhagya"
        age={22}
        img="https://images.unsplash.com/photo-1767436620092-7cab0404e444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
      />
    </div>
  );
};

export default App;
