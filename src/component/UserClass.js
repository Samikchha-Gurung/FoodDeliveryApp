import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
         userInfo:{
            name:"Dummy",
            location:"Default",
         
         },
        };
        // console.log(this.props.name + "Child Constructor")
    }
    async componentDidMount(){

        // console.log(this.props.name + "Child Component Did Mount ")
        const data=await fetch("https://api.github.com/users/Samikchha-gurung")
        const json= await data.json();
      
        this.setState({
            userInfo:json,
        });

        // console.log(json);

    }
    componentDidUpdate(){
        // console.log( this.props.name 
        //     + " did update!")
    }
    componentWillUnmount(){
        // console.log(this.props.name  +"component will mount")
    }
  
    render(){
        // console.log(this.props.name + "Child Render")
        const {avatar_url,name,location,contact}=this.state.userInfo;
    
        return(
            <div className="card">
            <h1>Example for Class Component </h1>
            <img src={avatar_url}></img>
            <h2>Name:{name}</h2>
            <h2>Location:{location} </h2>
            <h2>Contact : sam@gmail.com</h2>
            
            
        </div>

        );
        

    }
}
export default UserClass;