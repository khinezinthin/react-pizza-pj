import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="http://thepizzacompany-myanmar.com/assets/images/logo.png" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Promotion
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#">
                  Pizza
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
