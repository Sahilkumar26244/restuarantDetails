import React, { useState } from "react";
export const Form = (props) => {
    console.log('props:', props)

  const [formdata, setformdata] = useState({});

  const handlechange = (e) => {
    let inputname = e.target.name;
    setformdata({
      ...formdata,
      [inputname]: e.target.value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    postTodo(formdata);
    
  };
  const postTodo = async (data) => {
    let response = await fetch("http://localhost:3000/data", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
       ...data
      }),
    });
    props.getData();
  }


  return (
    <form action="" onSubmit={handlesubmit}>
      <div>
        <input
          type="text"
          name="url"
          placeholder="Enter the Url"
          onChange={handlechange}
        />
      </div>
      <div>
        <input
          type="text"
          name="Name"
          placeholder="Enter the Name"
          onChange={handlechange}
        />
      </div>
      <div>
        <input
          type="text"
          name="DishType"
          placeholder="Enter the DishType"
          onChange={handlechange}
        />
      </div>
      <div>
        <input
          type="text"
          name="Cost"
          placeholder="Enter the Cost"
          onChange={handlechange}
        />
      </div>
      <div>
        <input
          type="text"
          name="PaymentMethod"
          placeholder="Enter the payment Method"
          onChange={handlechange}
        />
      </div>
      <div>
        <input
          type="text"
          name="Rating"
          placeholder="Rating"
          onChange={handlechange}
        />
      </div>
      <div>
        <input
          type="text"
          name="Review"
          placeholder="Review"
          onChange={handlechange}
        />
      </div>
      <div>
        <input
          type="text"
          name="Votes"
          placeholder="Enter the Votes"
          onChange={handlechange}
        />
      </div>
      <input type="submit" />
    </form>
  );
};
export default Form;