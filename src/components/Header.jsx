import Search from "/components/Search";
import Icon from "../icons/Icon.png";
const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="col-12 className d-flex justify-content-between">
          <div className="col-11 d-md-flex justify-content-between className">
            <div className="col-md-2 className">
              <div className="container-fluid d-flex">
                <img src={Icon} width="30" height="30" className="my-auto" />
                <a className="navbar-brand header-title mx-auto px-1">
                  {props.name}
                </a>
              </div>
            </div>
            <div className="col-md-4 className my-auto">
              <Search search="Search For Your Notes!" />
            </div>
          </div>
          <div className="col-1 my-auto className">
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
