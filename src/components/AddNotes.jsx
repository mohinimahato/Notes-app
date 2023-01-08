import Add from "../icons/Add.png";
const AddNotes = (props) => {
  return (
    <div>
      <div className="col-md-8 mx-auto">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <img src={Add} width="30" height="30" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder={props.note}
          />
        </div>
      </div>
    </div>
  );
};
export default AddNotes;
