const Search = (props) => {
  return (
    <div>
      <div className="col-md-12 mx-auto my-auto">
        <div className="col-md-10 mx-auto">
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder={props.search}
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success search-btn"
              type="submit"
            >
              Search
            </button>
            <div>{props.Search}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
