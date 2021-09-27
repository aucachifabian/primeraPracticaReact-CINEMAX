import React from "react";
import "./navbar.css";
import a from "../../resources/view.json"
export default class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="navBar row mb-1">
        <ul class="row">
          <li class="col-1 row">
            <img class="App-logo-spin col-10 ml-3 img-fluid" src={a.image}></img>
          </li>

          <li class="col-2 my-auto my-auto">
            <a class="btn btn-secondary my-auto" >Cine-Max</a>
          </li>
          <li class="col-2 my-auto">
            <a class="btn btn-secondary my-auto" href="#">Detail</a>
          </li>
          <li class="col-2 my-auto">
            <a class="btn btn-secondary my-auto" href="#">About CineMax</a>
          </li>
        </ul>
      </div>
    );
  }
}
