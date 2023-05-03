import React from "react";

const NavbarComponent = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar--wrapper"
      aria-label="Fifth navbar example"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {`wearCode();//`}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample05">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            

            <li class="nav-item nav__link">
              <a class="nav-link nav__link" aria-current="page" href="#">
                wc.home();
              </a>
            </li>
            
            <li class="nav-item nav__link">
              <a class="nav-link nav__link" href="#">
              wc.designs();
              </a>
            </li>
            <li class="nav-item nav__link">
              <a class="nav-link nav__link" href="#">
              wc.products();
              </a>
            </li>
            <li class="nav-item nav__link">
              <a class="nav-link nav__link" href="#">
              wc.buy();
              </a>
            </li>
            
            </ul>
            <ul class="navbar-nav  ">
            <li class="nav-item nav__link">
              <a class="nav-link nav__link" href="#">
              wc.about();
              </a>
            </li>
            <li class="nav-item nav__link">
              <a class="nav-link nav__link" href="#">
              wc.contact();
              </a>
            </li>
          </ul>

        </div>
        
      </div>
    </nav>
  );
};

export default NavbarComponent;
