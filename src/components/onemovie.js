import React, { Component } from "react";

export default class OneMovie extends Component {
  state = { movie: {} };
  componentDidMount() {
    this.setState({
      movie: {
        id: this.props.match.params.id,
        title: "one movie",
        runtime: 147,
      },
    });
  }
  render() {
    return (
      <>
        <h2>
          Movie:{this.state.movie.title}
          {this.state.movie.id}
        </h2>
        <table className="table table-compact table-striped">
          <thead></thead>
          <tr>
            <td>
              <strong>TITLE:</strong>
            </td>
            <td>{this.state.movie.title}</td>
          </tr>
          <tr>
            <td>
              <strong>RUN TIME:</strong>
            </td>
            <td>{this.state.movie.runtime}</td>
          </tr>
        </table>
      </>
    );
  }
}
