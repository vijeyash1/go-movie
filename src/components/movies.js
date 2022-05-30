import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = {
    movies: [],
    isLoading: true,
  };
  componentDidMount() {
    fetch("http://localhost:4000/v1/movies")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ movies: json.movies, isLoading: false });
      });
  }
  render() {
    const { movies, isLoading } = this.setState;

    if (!isLoading) {
      return (
        <>
          <h1>Choose a movie</h1>
          <ul>
            {movies.map((m) => (
              <li key={m.id}>
                <Link to={`/movies/${m.id}`}>{m.title}</Link>
              </li>
            ))}
          </ul>
        </>
      );
    } else {
      return <h1>loading...</h1>;
    }
  }
}
