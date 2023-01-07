import Icon from "../icons/Icon.png";
const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="col-12 border border-danger d-flex justify-content-between">
          <div className="col-10 border border-danger">
            <div className="col-md-1 ">
              <div className="container-fluid d-flex">
                <img src={Icon} width="100" height="30" />
                <a className="navbar-brand header-title mx-auto">
                  {props.name}
                </a>
              </div>
            </div>
          </div>
          <div className="col-1 my-auto border border-danger">
            <div className="col-5 my-auto mx-auto">
              <div className="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
