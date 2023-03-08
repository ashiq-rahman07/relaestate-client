import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { request } from '../../util/fetchAPI';
import { FaBed, FaSquareFull } from 'react-icons/fa'
import img from '../../assets/estate3.jpg'
import person from '../../assets/person.jpg'
import classes from './featuredProperties.module.css'
const FeaturedProperties = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(()=> {
    const fetchFeatured = async()=> {
      try {
        const data = await request('/property/find/featured', 'GET');
        setFeaturedProperties(data);
      } catch (error) {
        console.error(error.message)
      }
    }

    fetchFeatured();
  }, [])
  return (
   <div className={classes.container}>
  
    <div className={classes.wrapper}>
      <div className={classes.titles}>
        <h5>Properties you may like</h5>
        <h2>Our Featured Properties</h2>
      </div>
      <div className={classes.featuredProperties}>
          {featuredProperties?.map((property)=>(
            <div key={property._id} className={classes.featuredProperty}>
               <Link to={`/propertyDetails/${property._id}`} className={classes.imgContainer}>
                <img src={property.img? `http://localhost:5000/images/${property.img}`: img} alt="" />
               </Link>
               <div className={classes.details}>
                <div className={classes.priceOwner}>
                    <span className={classes.price}>$ {property?.price}</span>
                    <img src="" alt="" className={classes.owner} />
                </div>
                <div className={classes.moreDetails}>
                  <span>{property?.bed} <FaBed className={classes.icon}/></span>
                  <span>{property?.sqmeters} square meters <FaSquareFull className={classes.icon} /></span>
                </div>
                <div className={classes.desc}>{property?.desc}</div>
               </div>
            </div>
          ))}
      </div>
    </div>
   </div>
  )
}

export default FeaturedProperties