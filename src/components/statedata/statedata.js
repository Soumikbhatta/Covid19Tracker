/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import { Card } from "primereact/card";
import { Toast } from 'primereact/toast';

import District from "../districtwise/districtwise";

export default class statedata extends Component {
  render() {
    return (
      <div>
        {this.props.stateData.length !== 0 ? (
          <div className="container mt-3 text-dark ">
            <div className="back p-2 ">
              <div>
                <center>
                  <div>
                    <h2 className="text-dark">{this.props.stateData.state}</h2>
                  </div>
                  <div>
                    <Row className="p-3">
                      <Col className="text-text col m-1 items confirmed">
                        <Card
                          title="Activated Cases"
                          style={{ width: "15rem", marginBottom: "2em" }}
                        >
                          {this.props.stateData.active}
                        </Card>
                      </Col>

                      <Col className="text-text col m-1 items confirmed">
                        <Card
                          title="Confirmed Cases"
                          style={{ width: "15rem", marginBottom: "2em" }}
                        >
                          {this.props.stateData.confirmed}
                        </Card>
                      </Col>

                      <Col className="text-text col m-1 items today-deaths">
                        <Card
                          title="Total Deaths"
                          style={{ width: "15rem", marginBottom: "2em" }}
                        >
                          {this.props.stateData.deaths}
                        </Card>
                      </Col>

                      <Col className="text-text col m-1 items today-recovered">
                        <Card
                          title="Total Recovered"
                          style={{ width: "15rem", marginBottom: "2em" }}
                        >
                          {this.props.stateData.recovered}
                        </Card>
                      </Col>

                      <Col className="text-text col m-1 items today-death">
                        <Card
                          title="Today New Cases"
                          style={{ width: "15rem", marginBottom: "2em" }}
                        >
                          {this.props.stateData.deltaconfirmed}
                        </Card>
                      </Col>

                      <Col className="text-text col m-1 items update">
                        <Card
                          title="Last Update Time"
                          style={{ width: "15rem", marginBottom: "2em" }}
                        >
                          {this.props.stateData.lastupdatedtime}
                        </Card>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <District stateName={this.props.stateData.state} />
                  </div>
                </center>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
