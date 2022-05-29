import React, { useEffect, useState } from "react";
import styles from "./Restaurant.module.css";
import Card from "./Card";
import Form from "./Form";
const Restaurant = () => {
  const [restaurantdata, setrestaurntdata] = useState([]);

  const handlesort = (e) => {
    e.preventDefault();
    const result = restaurantdata.filter( restaurantdata => restaurantdata.Rating > 4);
    setrestaurntdata(result);
  }
  const getData = async () => {
    try {
      let response = await fetch("  http://localhost:3000/data");
      let data = await response.json();
      setrestaurntdata(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
  
    getData();
  },[]);
  return (
    <>
    <button onClick={(e) => handlesort(e)}>Sorting</button>
    <Form getData = {getData}  />
    <div className={styles.container}>
  {restaurantdata.map((e) => (
        <Card {...e} />
  ))}
   
</div>
    </>

  ) 
};

export default Restaurant;