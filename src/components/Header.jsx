import Search from "/components/Search";
import Icon from "../icons/Icon.png";
const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="col-12 className d-flex justify-content-between">
          <div className="col-11 d-md-flex justify-content-between">
            <div className="col-md-2">
              <div className="container-fluid d-flex">
                <img
                  src={Icon}
                  width="30"
                  height="30"
                  className="my-auto  myNotes-hIcon"
                />
                <a className="navbar-brand header-title px-md-1">
                  {props.name}
                </a>
              </div>
            </div>
            <div className="col-md-4 my-auto d-none">
              <Search search="Search For Your Notes!" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
