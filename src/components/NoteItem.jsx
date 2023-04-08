const NoteItem = ({ note, onDelete, onEdit }) => {
  return (
    <div className="col-12 mt-5">
      <div className="col-11 col-md-9 mx-auto">
        <div className="col-12 d-md-flex ">
          <div className="col-md-11 mx-auto ">
            <div className="col-md-12 p-4 cards-bg mx-auto ">
              <div className="col-12 d-md-flex ">
                <div className="col-5 col-md-2 my-auto">
                  <div className="col-8 col-md-7 my-auto text-center priority-badge my-auto">
                    {note.priority}
                  </div>
                </div>
                <div className="col-11 col-md-7 mt-3 my-md-auto">
                  <div className="col-12 notes-text my-auto">{note.desc}</div>
                </div>
                <div className="col-md-3 my-auto  d-flex justify-content-between ">
                  <div className="col-6">
                    <div
                      className="col-11 text-center edit-btn"
                      onClick={() => {
                        onEdit(note);
                      }}
                    >
                      Edit ✏️
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="col-11  text-center delete-btn"
                      onClick={() => {
                        onDelete(note);
                      }}
                    >
                      Delete 🗑
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteItem;
