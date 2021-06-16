import React from "react";
import GetList from "../../component/getjob/getjob_list";
import axios from "axios";

export default class Cari extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isSearch: true,

      keyCari: "",
      keyLokasi: "",
      OnlyFulltime: false,

      jobs: [],
    };
  }

  componentDidMount() {
    axios
      .get("positions.json")
      .then((response) => {
        this.setState({ jobs: response.data, isLoading: false });
        // console.log(this.state.jobs);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }

  handlerInputChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "keySearch") {
      this.setState({ keyCari: e.target.value });
    }
    if (e.target.name === "keyLocation") {
      this.setState({ keyLokasi: e.target.value });
    }
    if (e.target.name === "FulltimeOnly") {
      this.setState({ OnlyFulltime: !this.state.OnlyFulltime });
    }

    console.log(this.state.OnlyFulltime);
  };

  render() {
    return (
      <div className="container" style={{ padding: "20px 0" }}>
        <form style={{ marginBottom: "20px", display: "flex" }}>
          <div>
            <label>
              Search:
              <input
                type="text"
                name="keySearch"
                onChange={this.handlerInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Location:
              <input
                type="text"
                name="keyLocation"
                onChange={this.handlerInputChange}
              />
            </label>
          </div>
          <div style={{ alignSelf: "center" }}>
            <label>
              <input
                style={{ marginRight: "10px" }}
                name="FulltimeOnly"
                type="checkbox"
                onChange={this.handlerInputChange}
              />
              Full Time Only
            </label>
          </div>
        </form>

        <div className="content">
          <h3>Job List</h3>
          <hr />
          {this.state.isLoading ? (
            <div style={{ textAlign: "center", padding: "50px" }}>
              <img
                alt="preload"
                src="https://icons8.com/preloaders/preloaders/1486/Hourglass.gif"
                loading="lazy"
              />
            </div>
          ) : (
            this.state.jobs.map((item, i) => {
              if (this.state.isSearch) {
                if (item.location.includes(this.state.keyLokasi)) {
                  if (
                    item.title.includes(this.state.keyCari) ||
                    item.company.includes(this.state.keyCari) ||
                    item.description.includes(this.state.keyCari)
                  ) {
                    if (this.state.OnlyFulltime && item.type == "Full Time") {
                      return (
                        <GetList
                          id={item.id}
                          title={item.title}
                          type={item.type}
                          company={item.company}
                          location={item.location}
                          date={item.created_at}
                        />
                      );
                    } else {
                      return (
                        <GetList
                          id={item.id}
                          title={item.title}
                          type={item.type}
                          company={item.company}
                          location={item.location}
                          date={item.created_at}
                        />
                      );
                    }
                  }
                }
              } else {
                return (
                  <GetList
                    id={item.id}
                    title={item.title}
                    type={item.type}
                    company={item.company}
                    location={item.location}
                    date={item.created_at}
                  />
                );
              }
            })
          )}
        </div>
      </div>
    );
  }
}
