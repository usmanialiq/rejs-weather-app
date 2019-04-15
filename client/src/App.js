/*
Author: Usman Ali'
Email: usmanialiq@gmail.com
*/

import React, { Component } from 'react';
import axios from 'axios';

// requiring the components
import Loader from './components/Loader';
import WeatherCard from './components/WeatherCard';

// App Structure
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      errors: null
    }
  }

  // react lifecycle 
  componentDidMount() {

    // Enables loading until data is fetched
    this.setState({ isLoading: true });

    // Fetching the data
    axios
      .get('/fetch')
      .then(response => {
        this.setState({ data: response.data, isLoading: false });
      })
      .catch(errors => this.setState({ errors, isLoading: false }));
  }

  
  render() {
    // little bit of destructuring
    const { isLoading, errors } = this.state;

    // Rendering errors
    if(errors) {
      return <p>{errors.message}</p>;
    }

    // Rendering the Loader
    if(isLoading) {
      return <Loader />;
    }

    // Rendering the App
    return (
      <div className="container mt-3">

        <div className="row">

          {this.state.data.map((item, i) => (
              
              <WeatherCard 
                key={i}
                linkTemp={item.temp}
                linkMaxTemp={item.maxTemp}
                linkMinTemp={item.minTemp}
                linkHumidity={item.humidity}
                linkHour={item.hour}
                linkDay={item.day}
                cardHeadDay={item.day}
                cardHeadDate={item.date}
                cardImage={item.icon}
                cardMinTemp={item.minTemp}
                cardMaxTemp={item.maxTemp}
              />
          ))}

        </div>

      </div>
    );
  }
}

export default App;

/*
Author: Usman Ali'
Email: usmanialiq@gmail.com
*/