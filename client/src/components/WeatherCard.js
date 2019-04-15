/*
Author: Usman Ali'
Email: usmanialiq@gmail.com
*/

import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'

class WeatherCard extends Component {

  render() {
    return (
      <div className="col-sm-3 col-md-3 col-lg-3" key={this.props.key}>

          <a 
            href="#"
            data-tip={'Temperature: ' + this.props.linkTemp + '°C' +
                      '<br/>' +
                      'Max Temperature: ' + this.props.linkMaxTemp + '°C' + 
                      '<br/>' +
                      'Min Temperature: ' + this.props.linkMinTemp + '°C' +
                      '<br/>' +
                      'Humidity: ' + this.props.linkHumidity +
                      '<br/>' +
                      'Hour: ' + this.props.linkHour + 
                      '<br/>' +
                      'Day: ' + this.props.linkDay} 
            style={{ textDecoration: 'none', color: 'black'}}>

            <ReactTooltip 
              place="bottom"
              data-type="info"
              event="click"
              multiline={true}
            />
              <div className="card text-center mb-3">
                <div className="card-body">
                  <h4>{this.props.cardHeadDay} | <small>{this.props.cardHeadDate}</small></h4>
                  <img style={{width: 80}} src={'http://openweathermap.org/img/w/' + this.props.cardImage + '.png'} alt={this.props.cardHeadDay} />
                  <p><span className="lead red">{this.props.cardMaxTemp}°C</span> - <span className="lead blue">{this.props.cardMinTemp}°C</span></p>
                </div>
              </div>
          
          </a>

      </div>
    )
  }
}


export default WeatherCard;

/*
Author: Usman Ali'
Email: usmanialiq@gmail.com
*/