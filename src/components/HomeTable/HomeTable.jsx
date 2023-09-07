import React from "react";
//props extracing example
function HomeTable({ products }) {
  return (
    <div>
      <ul>
        {products.map((dataItem, index) => (
          <li>{dataItem.title}</li>
        ))}
      </ul>
      {/* // example - 1 */}
      {products.map((dataItem, index) => (
        <img src={dataItem.images[0]} alt="" srcset="" />
      ))}

      {/* //example 2 */}
      {products.map((dataItem, index) => {
        return dataItem.images.map((image, index) => (
          <img src={image} alt="" srcset="" />
        ));
      })}
    </div>
  );
}

export default HomeTable;
