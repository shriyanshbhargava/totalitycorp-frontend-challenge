import React from "react";

import Datatable from "./Datatable.jsx";
import getData from "./getData";

export default function Search() {
  const [inputs, setInputs] = React.useState({
    searchName: "",
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const data = getData(inputs);

  return (
    <div className="container my-3">
      <div className="form-row">
        <div className="form-group col-md-8">
          <input
            name="searchName" 
            type="text"
            className="form-control w-50 border border-dark"
            placeholder="Enter Product Name"
            onChange={handleChange}
          />
        </div>
      </div>

      <Datatable data={data} />
    </div>
  );
}
