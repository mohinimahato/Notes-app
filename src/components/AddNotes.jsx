import { useState } from "react";
import Add from "../icons/Add.png";

const AddNotes = (props) => {
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!desc || !priority) {
      alert("Description or priority can't be blank!");
    } else {
      props.addNotes(desc, priority);
      // console.log("I'm consoling,", desc, priority);
    }
  };
  return (
    <div className="addNotesContainer">
      <div className="col-8 col-md-8 mx-auto my-4">
        <div className="col-md-8 mx-auto">
          <form onSubmit={submit}>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <img src={Add} width="30" height="30" />
              </span>
              <input
                type="text"
                className="form-control add-note"
                placeholder={props.note}
                data-bs-toggle="modal"
                data-bs-target="#addNotes"
              />
              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="addNotes"
                tabindex="-1"
                aria-labelledby="addNotesLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <input
                        type="text"
                        className="form-control noteInput"
                        value={desc}
                        name="note"
                        onChange={(e) => setDesc(e.target.value)}
                      />
                      <div className="priorityDiv">
                        <div className="col-md-12 d-md-flex justify-content-start">
                          <div className="col-4 col-md-3 ms-3 ms-md-0 mb-3 mt-3 mb-md-0 mt-md-4 select_priority">
                            Select priority:
                          </div>
                          <div className="col-12 col-md-9 my-auto">
                            <div className="col-12 col-md-12 d-flex justify-content-start">
                              <div className="col-md-3 my-auto">
                                <div className="col-md-12">
                                  <input
                                    type="radio"
                                    value="🔥High"
                                    name="priority"
                                    id="high"
                                    checked={priority === "🔥High"}
                                    onChange={(e) => {
                                      setPriority(e.target.value);
                                    }}
                                  />
                                  <label
                                    htmlFor="high"
                                    className="high text-center"
                                    style={{
                                      backgroundColor: "#C91515",
                                      borderRadius: "10px",
                                      width: "90px",
                                    }}
                                  >
                                    🔥High
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4 my-auto">
                                <div className="col-md-12 mt-md-4">
                                  <input
                                    type="radio"
                                    value="🚀Medium"
                                    name="priority"
                                    id="medium"
                                    checked={priority === "🚀Medium"}
                                    onChange={(e) => {
                                      setPriority(e.target.value);
                                    }}
                                  />
                                  <label
                                    htmlFor="medium"
                                    style={{
                                      backgroundColor: "#DEB113",
                                      borderRadius: "10px",
                                      width: "90px",
                                    }}
                                  >
                                    🚀Medium
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-3 my-auto">
                                <div className="col-md-12">
                                  <input
                                    type="radio"
                                    value="❗Low"
                                    name="priority"
                                    id="low"
                                    checked={priority === "❗Low"}
                                    onChange={(e) => {
                                      setPriority(e.target.value);
                                    }}
                                  />
                                  <label
                                    htmlFor="low"
                                    style={{
                                      backgroundColor: "#319817",
                                      borderRadius: "10px",
                                      width: "90px",
                                    }}
                                  >
                                    ❗Low
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer justify-content-start mt-3 mt-md-5">
                      <button
                        type="submit"
                        className="btn btnModalAdd"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Add Notes
                      </button>
                      <button
                        type="button"
                        className="btn btn-close btnModalDiscard"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Discard
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddNotes;
