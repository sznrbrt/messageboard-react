import React from "react";
import NavBar from './NavBar'
import Messages from './Messages'

export default class Main extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
      <div className="text-center">
        <NavBar />
        <div className="container">
          <Messages />
        </div>
      </div>
    );
  }
}
