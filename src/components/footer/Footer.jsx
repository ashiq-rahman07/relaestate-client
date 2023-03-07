import React from 'react'
import classes from './footer.module.css'
const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About our App</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quisquam magni nobis consectetur vel ea obcaecati officiis perferendis autem ipsum ex esse, nesciunt aut amet rerum optio quam placeat sint?</p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span>YouTube: Ashiqur Rahman</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Contient: Asia</span>
          <span>Country: Bangladesh</span>
          <span>Current Location: Bangladesh</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer