import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  //this is where our methods live
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      this.setState({
        isLoaded: true,
        items: data,
      })
    })
  }
  render() {
    //this is deconstructing the "this.state" object.
    var {isLoaded, items} = this.state;
    if(!isLoaded){
      return <div>Loading...</div>
    } else {


    return(
      <div>
        <ul>
          {items.map(el => {
            return(
              <li key={el.id}>
              Name: {el.name} | UserName: {el.username} | {" "} <a href={`https://${el.website}`}>Website</a>
              </li>
            )
          })}
        </ul>
      </div>
    );
  };
  };
};

export default App;
