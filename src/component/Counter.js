import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { count : 0};
        this.person ={ fullName :"Maryem",
    bio :"fullstack JS",
img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXczmj8mAzRtHbgHOZ77-0kV9FOu5bF5r_XEwVDBWX7Bo_1YbkIyj7TR5CjCZRapFwKDY&usqp=CAU"}
}
componentDidMount(){
    setInterval(() => {
        this.setState (prevState=>({
           count : prevState.count + 0.5
        }))
    }, 1000);
}

  render() {
    return (
      <div>
     <p>{this.person.fullName} </p> 
     <p>{this.person.bio}</p> 
      <img src={this.person.img} />

      <h1> {this.state.count}</h1>
      </div>
    )
  }
}


