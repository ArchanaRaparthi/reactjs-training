import React from "react";
import MenuItem from "./menu";
import "./demo.scss";
import Header from './header';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          imageUrl: "https://picsum.photos/200?random=1",
          title: "A",
          subtitle: "1",
        },
        {
          imageUrl: "https://picsum.photos/200?random=1",
          title: "B",
          subtitle: "2",
        },
        {
          imageUrl: "https://picsum.photos/200?random=1",
          title: "C",
          subtitle: "3",
        },
        {
          imageUrl: "https://picsum.photos/200?random=1",
          title: "D",
          subtitle: "4",
        },
        {
          imageUrl: "https://picsum.photos/200?random=1",
          title: "E",
          subtitle: "5",
        },
        {
          imageUrl: "https://picsum.photos/200?random=1",
          title: "F",
          subtitle: "6",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        <Header />
        {this.state.sections.map((section) => (
          <MenuItem
            title={section.title}
            subtitle={section.subtitle}
            imageUrl={section.imageUrl}
          />
        ))}
      </div>
    );
  }
}
export default Directory;
