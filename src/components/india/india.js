import React, { Component } from "react";

import axios from "axios";

export default class india extends Component {
  state = {
    loading: true,
    india: [],
  };

  componentDidMount = async () => {
    this.getCountryData();
  };

  getCountryData = async () => {
    var ref = await axios("https://corona.blloc.com/current?country=India");

    this.setState({ india: ref.data, loading: false });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="justify-content-center align-items-center">
            <h3>Loading...</h3>
          </div>
        ) : (
          <div className="container">
            <div className="d-sm-flex col-md-6 col-xl-6 mb-4 justify-content-center align-items-center mb-4">
              <h3 className="text-dark mb-0">COVID-19 STATUS IN INDIA</h3>
            </div>

            <div className="col mr-2">
              <div className="text-dark font-weight-bold text-xs mb-3">
                <span>Confirmed Case</span>
              </div>
              <div className="text-dark font-weight-bold h5 mb-0">
                <span>{this.state.india.confirmed}</span>
              </div>
            </div>


            <br></br>
            <br></br>


            <div className="col mr-2">
              <div className="text-dark font-weight-bold text-xs mb-3">
                <span>Total Deaths</span>
              </div>
              <div className="text-dark font-weight-bold h5 mb-0">
                <span>{this.state.india.deaths}</span>
              </div>
            </div>


            <br></br>
            <br></br>

            
            <div className="col mr-2">
              <div className="text-dark font-weight-bold text-xs mb-3">
                <span>Recovered</span>
              </div>
              <div className="text-dark font-weight-bold h5 mb-0">
                <span>{this.state.india.recovered}</span>
              </div>
            </div>

          </div>
        )}
      </div>
    );
  }
}
