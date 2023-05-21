import "./App.css";
import React from "react";
import { Children ,cloneElement} from "react";
const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };
  return (
    <div className="row">
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};
function LiveOrders() {
  return (
    <div className="App">
      <Row spacing={3}>
        <p>Pizza Margerita</p>
        <p>2</p>
        <p>3$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}

export default LiveOrders;
