import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Card } from "primereact/card";

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

            <Row className="p-3">
                <Col className="text-text col m-1 items confirmed">
                  <Card
                    title="Confirmed Cases"
                    style={{ width: "15rem", marginBottom: "2em" }}
                  >
                    {this.state.india.confirmed}
                  </Card>
                </Col>

                <Col className="text-text col m-1 items confirmed">
                  <Card
                    title="Total Deaths"
                    style={{ width: "15rem", marginBottom: "2em" }}
                  >
                    {this.state.india.deaths}
                  </Card>

                </Col>               

                <Col className="text-text col m-1 items today-deaths">
                  <Card
                    title="Recovered"
                    style={{ width: "15rem", marginBottom: "2em" }}
                  >
                    {this.state.india.recovered}
                  </Card>
                </Col>
              </Row>

          </div>
        )}
      </div>
    );
  }
}
