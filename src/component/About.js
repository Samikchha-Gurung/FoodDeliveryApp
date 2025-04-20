import React, { Component } from 'react';
import User from './User';
import UserClass from './UserClass';
class About extends Component{
  constructor(props){
    super(props);
    console.log(" Parent Constructor")
  }
  componentDidMount(){
    console.log("Parent did mount")
  }

 
  render(){
    console.log(" Parent Render")
    return (
      <div> 
          <h1>
         This is  About us page . </h1>
         {/* <User name={"Samikchha"} location={"Dehradun"} contact={"sam@twitter.com"}/> */}
         <UserClass name={"Samikchha"} location={"Dehradun"} />
         </div>
    )

  }
}
// const About = () => {
  
// }

export default About