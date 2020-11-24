const Newduty = ({newDuty, hadleSubmitNew, duty, duties, doneTask}) => {
  return (
    <div>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-7 col-lg-3 ">
          <div className="alert alert-secondary pt-4" role="alert" style={{textAlign:"center"}}>
            <p>تعداد کارهای امروز شما: <span className="badge badge-pill badge-dark">{duties.length}</span></p>
            <p>تعداد کارهای انجام شده: <span className="badge badge-pill badge-success">{doneTask.length}</span></p>
            <p>تعداد کارهای باقی مانده: <span className="badge badge-pill badge-danger">{duties.length - doneTask.length }</span></p>
          </div>
        </div>
      </div>
      <div
        className="row d-flex justify-content-center"
        style={{marginTop: '50px'}}
      >
        <div className="col-11 col-md-8">
          <form onSubmit={e => e.preventDefault ()}>
            <div className="md-form input-group mb-5">
              <input
                type="text"
                className="form-control"
                placeholder="فعالیت روزانه"
                aria-label="Example text with button addon"
                aria-describedby="MaterialButton-addon1"
                onChange={newDuty}
                value={duty}
              />
              <div className="input-group-prepend">
                <button
                  className="btn btn-md  blue-gradient m-0 p-3"
                  type="submit"
                  id="MaterialButton-addon1"
                  onClick={hadleSubmitNew}
                >
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newduty;
