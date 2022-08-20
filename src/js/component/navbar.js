import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar bg-light">
  <div class="container-fluid">
  <img src="https://s.ecrater.com/stores/442768/5e6e23856b19d_442768b.jpg" alt="logo" height="80px" width="90px"/>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
	);
};
