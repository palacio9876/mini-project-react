import React from "react";
import imgMain from "../../assets/img/react-main.png";
import "../../assets/css/Main.css";


export const Main = () => {
  return (
    <main>
      <div className="container-text">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae earumeligendi vero quos voluptatem at consequatur officia dolore mollitia,labore ex molestiae. Nemo reprehenderit dicta cumque, commodi eadolores earum?
        </p>
      </div>
      <img src={imgMain} alt="imagen del main" />
    </main>
  );
};
