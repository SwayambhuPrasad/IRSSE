import React from 'react'

const HeroImages=[
  {
    id:1,
    url:"/1.jpg",
    title:"MSDAC",
    desc:"MSDAC:A latest technology for Train Detection. This is being used in Staion Yards, Auto Section etc. "
  },
  {
    id:2,
    url:"/2.jpg",
    title:'Maintainers Terminals',
    desc:"A Software Solution for Effective Maintenance of the Electronic Interlocking System"
  },
  {
    id:3,
    url:"/3.jpg",
    title:"State of the Art S&T Installation",
    desc:"State of the art S&T Installation provided in the Station Masters Room for efficient and ease of operation"
  },
  {
    id:4,
    url:"/1.jpg",
    title:"Electronic Interlocking",
    desc:"The Brain Behind the Signalling System"
  },
  {
    id:5,
    url:"/2.jpg",
    title:"IPS",
    desc:"Offering Reliable Power Supply for the Signalling Systems"
  },
  {
    id:6,
    url:"/3.jpg",
    title:"Dual VDU",
    desc:"Dual Vidual Display Units for Station Master for Efficient and Ease of Operarion."
  },

]

const ImageCarousel = ({number}) => {
  return (
    <div>ImageCarousel</div>
  )
}

export default ImageCarousel
export {HeroImages}
