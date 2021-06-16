import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detail.css";

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("../positions/" + id_detail + ".json")
      .then((response) => {
        this.setState({ data: response.data, isLoading: false });
        console.log(this.state.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }

  render() {
    return (
      <div className="container" style={{ padding: "20px 0" }}>
        <div className="content">
          <HookId />
          {this.state.isLoading ? (
            <div style={{ textAlign: "center", padding: "50px" }}>
              <img
                alt="preload"
                src="https://icons8.com/preloaders/preloaders/1486/Hourglass.gif"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="row">
              <div className="col-md-8">
                <h4>{this.state.data["company"]}</h4>
                <h1>{this.state.data["title"]}</h1>
                <h5>
                  {this.state.data["location"]} - {this.state.data["type"]}
                </h5>

                <div
                  style={{ paddingTop: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: this.state.data["description"],
                  }}
                />
              </div>
              <div className="col-md-4">
                <img
                  className="img-responsive"
                  src={this.state.data["company_logo"]}
                />
                <div
                  className="bg-success"
                  style={{ padding: "10px 20px", marginTop: "20px" }}
                >
                  <h4>How to Apply</h4>
                  <div
                    style={{ paddingTop: "10px", "overflow-wrap": "anywhere" }}
                    dangerouslySetInnerHTML={{
                      __html: this.state.data["how_to_apply"],
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

let id_detail = "";
const HookId = () => {
  let { id } = useParams();
  id_detail = id;
  //   console.log(id);
  return <div></div>;
};
