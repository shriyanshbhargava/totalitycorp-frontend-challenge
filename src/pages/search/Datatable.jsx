import React from "react";

const Datatable = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product</th>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ productName, productImage, category }, ind) => (
          <tr key={productName}>
            <th scope="row">{ind + 1}</th>
            <td>
              <img className="w-25" src={productImage} alt={productImage}></img>
            </td>
            <td>{productName}</td>
            <td>{category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
