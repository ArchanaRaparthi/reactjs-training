import React from "react";
import MenuItem from "../menu-items/menu-items.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "A",
          id: "1",
        },
        {
          title: "B",
          id: "2",
        },
        {
          title: "C",
          id: "3",
        },
        {
          title: "D",
          id: "4",
        },
      ],
    };
  }

  render = () => {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title }) => (
          <MenuItem title={title} />
        ))}
      </div>
    );
  };
}

export default Directory;
