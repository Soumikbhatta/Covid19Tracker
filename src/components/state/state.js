/* eslint-disable no-unused-vars */
import React, { Component, useRef } from "react";
import axios from "axios";
import Statedata from "../statedata/statedata";
import "primeflex/primeflex.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
// import { Toast } from "primereact/toast";

export default class state extends Component {
  state = {
    stateList: [],
    stateNm: "",
    stateData: [],
  };

  componentDidMount = async () => {
    await this.getStateList();
  };

  getStateList = async () => {
    var ref = await axios(
      "https://api.covid19india.org/v2/state_district_wise.json"
    );

    var order = await this.sortingData(ref);

    await this.setState({ stateList: order });
  };

  sortingData = async (ref) => {
    var data = await ref.data.sort((a, b) => {
      var state1 = a.state.toUpperCase();
      var state2 = b.state.toUpperCase();

      if (state1 < state2) {
        return -1;
      }
      if (state1 > state2) {
        return 1;
      }

      return 0;
    });

    return data;
  };

  getData = async () => {
    if (this.state.stateNm) {
      var refData = await axios("https://api.covid19india.org/data.json");

      var district = this.state.stateNm;

      await refData.data.statewise.forEach((l) => {
        if (l.state === district) {
          this.setState({ stateData: l });
        }
      });
    } else {
      await this.setState({ stateData: [] });
    }
  };

  setStateName = async (e) => {
    await this.setState({ stateNm: e.target.value.state });

    if (this.state.stateNm === "Select State") {
      await this.setState({ stateData: [] });
    }

    this.getData();
  };

  render() {
    // const toast = useRef();

    // const showSuccess = () => {
    //   toast.current.show({
    //     severity: "success",
    //     summary: "Success Message",
    //     detail: "Message Content",
    //     life: 3000,
    //   });
    // };

    return (
      <div>
        {/* <Toast ref={toast} /> */}

        {console.log(this.state)}

        <div className="search_bar_div container">
          <h5>Select State From List</h5>
          <Dropdown
            value={this.state.stateNm}
            options={this.state.stateList}
            onChange={(e) => {
              this.setStateName(e);
              // showSuccess();
            }}
            optionLabel="state"
            filterBy="state"
            filter
            showClear
            placeholder="Select a State"
          />

          

          <Button
            className="p-button-raised "
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </Button>
        </div>

        <Statedata stateData={this.state.stateData} />
      </div>
    );
  }
}
