const Search = (props) => {
  return (
    <div className="mt-3 mt-md-0">
      <div className="col-10 col-md-12 mx-auto my-auto">
        <div className="col-12 col-md-10 mx-auto">
          <div className="col-12 col-md-12 mx-auto d-flex">
            <input
              className="form-control ms-3 ms-md-0  me-2 search-input"
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
