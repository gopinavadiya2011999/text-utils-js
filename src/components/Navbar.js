import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            {props.colors.map((item, key) => {
              return (
                <div
                  onClick={() => {
                    document.body.style.color = item;
                    props.setColour(item);
                  }}
                  key={key}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "4px",
                    borderRadius: "100%",
                    backgroundColor: item,
                    cursor: "pointer",
                  }}
                />
              );
            })}
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button> 
      </form> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                style={{ marginLeft: "5px", marginRight: "10px" }}
                role="switch"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "dark" ? "Light" : "Dark"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// NavBar.defaultProps = {
//   aboutText : "About"
//   };

NavBar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string,
};
