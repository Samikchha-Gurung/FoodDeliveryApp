import React, { Component } from 'react';
import User from './User';
import UserClass from './UserClass';
import UserContext from './UserContext';
class About extends Component{
  constructor(props){
    super(props);
    // console.log(" Parent Constructor")
  }
  componentDidMount(){
    // console.log("Parent did mount")
  }

 
  render(){
    // console.log(" Parent Render")
    return (
      <div> 
          <h1>
         This is  About us page . </h1>
         LoggedIn User
         <UserContext.Consumer>
          {({loggedInUser})=><h1>{loggedInUser}</h1>}
         </UserContext.Consumer>
         {/* <User name={"Samikchha"} location={"Dehradun"} contact={"sam@twitter.com"}/> */}
         <UserClass name={"Samikchha"} location={"Dehradun"} />
         </div>
    )

  }
}
// const About = () => {
  
// }

export default About