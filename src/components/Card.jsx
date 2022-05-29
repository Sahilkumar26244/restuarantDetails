import React from 'react'
import styles from "./Card.module.css";
const Card = (props) => {
  
  return (
      <div className={styles.div}>
          <h3>{props.Name}</h3>
          <div>{props.DishType}</div>
    <img className={styles.image} src={props.url} alt="" />
    <div className={styles.rating}>
    <p>Rating: {props.Rating}</p>
    <p>Reviews: {props.Review}</p>
    <p>${props.Cost}</p>
    <p>Votes: {props.Votes}</p>
    </div>
   
    <div>Payment Method: {props.PaymentMethod}</div>
    
    

      </div>
  )
}

export default Card