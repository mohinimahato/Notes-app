const Search = (props) => {
  return (
    <div>
      <div className="col-md-8 mx-auto my-4">
        <div className="col-md-10 mx-auto">
          <form className="d-flex">
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
          </form>
        </div>
      </div>
    </div>
  );
};
export default Search;
