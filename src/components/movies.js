import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = { movies: [] };
  componentDidMount() {
    this.setState({
      movies: [
        { id: 1, title: "Beast", runtime: 142 },
        { id: 2, title: "Bigil", runtime: 120 },
        { id: 3, title: "KGF", runtime: 150 },
      ],
    });
  }
  render() {
    return (
      <>
        <h1>Choose a movie</h1>
        <ul>
          {this.state.movies.map((m) => (
            <li key={m.id}>
              <Link to={`/movies/${m.id}`}>{m.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
