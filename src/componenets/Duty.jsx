const Duty = ({
  eachDuty,
  deleted,
  done,
  doneTask,
  editTask,
  editInput,
  editTasks,
  confirmation
}) => {

  return (
    <div>
      <div className="row d-flex justify-content-center mt-5 animate">
        <div className="col-10 col-md-9">
          <div
            className="alert alert-light d-flex justify-content-between align-items-center px-3 animate"
            role="alert"
            style={{fontSize: '18px', fontWeight: '500'}}
          >
            {doneTask
              ? <div>
                  <del style={{color: 'red'}}>{eachDuty}</del>
                  <span
                    style={{
                      color: 'green',
                      fontSize: '16px',
                      fontWeight: '600',
                      marginRight: '8px',
                    }}
                  >
                    (انجام شد.)
                  </span>
                </div>
              : eachDuty}
            <div className="input-group-prepend">
              <button className="btn btn-default rounedbtn" onClick={done}>
                <i className="fa fa-check" />
              </button>
              <button className="btn btn-warning rounedbtn" onClick={editInput}>
                <i className="fa fa-edit" />
              </button>
              <button
                type="button"
                className="btn btn-danger rounedbtn"
                data-toggle="modal"
                data-target="#confirmationModal"
                onClick={confirmation}
              >
                <i className="fa fa-trash" />
              </button>
            </div>

            <div
              className="modal fade"
              id="confirmationModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body" style={{textAlign:"right"}}>
                   آیا از پاک کردن آن مطمئن هستید؟
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-pink"
                      style={{color:'#fff'}}
                      data-dismiss="modal"
                    >
                      نه، پشیمان شدم
                    </button>
                    <button type="button" className="btn btn-unique" style={{color:"#fff"}} onClick={deleted} data-dismiss="modal">
                      بله، پاکش کن
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-8 col-md-7">
          {editTask
            ? <div className="form-group inputanimation">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value={eachDuty}
                  onChange={editTasks}
                />
              </div>
            : null}
        </div>
      </div>
    </div>
  );
};

export default Duty;
