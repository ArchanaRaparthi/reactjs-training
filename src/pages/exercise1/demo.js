import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import "./demo.scss";

const Demo = () => {
  const sections = [
    {
      id: "1",
      name: "A",
      imageSource: "https://images.app.goo.gl/RcQaqZnaarWakrx86",
    },
    {
      id: "2",
      name: "B",
      imageSource: "https://images.app.goo.gl/VDgjY12fErUiaL1o7",
    },
    {
      id: "3",
      name: "C",
      imageSource: "https://images.app.goo.gl/VDgjY12fErUiaL1o7",
    },
    {
      id: "4",
      name: "D",
      imageSource: "https://images.app.goo.gl/VDgjY12fErUiaL1o7",
    },
    {
      id: "5",
      name: "E",
      imageSource: "https://images.app.goo.gl/VDgjY12fErUiaL1o7",
    },
    {
      id: "6",
      name: "F",
      imageSource: "https://images.app.goo.gl/VDgjY12fErUiaL1o7",
    },
  ];

  const Card = (props) => (
    <div className="card">
      <img className="card-img-top" src={props.imageSource} alt="img" />
      <div className="card-body">
        <h5 class="card-title">{props.name}</h5>
        <button
          type="button"
          className="btn b stretched-link card-button"
          href={props.id}
        >
          {props.id}
        </button>
      </div>
    </div>
  );

  let CardList = sections.map((section) => (
    <Card
      headerImage={section.imageSource}
      id={section.id}
      name={section.name}
    ></Card>
  ));

  return (
    <div className="container">
      <Header />
      {CardList[0]}
      {CardList[1]}
      {CardList[2]}
      {CardList[3]}
      {CardList[4]}
      {CardList[5]}
    </div>
  );
};

export default Demo;
