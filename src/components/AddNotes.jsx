import Add from "../icons/Add.png";
import Cards from "./Cards";
const AddNotes = (props) => {
  return (
    <div>
      <div className="col-md-8 mx-auto my-4">
        <div className="col-md-8 mx-auto">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <img src={Add} width="30" height="30" />
            </span>
            <input
              type="text"
              className="form-control add-note"
              placeholder={props.note}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*----Notes----*/}
      <Cards />
      {/*----Notes----*/}
    </div>
  );
};
export default AddNotes;
