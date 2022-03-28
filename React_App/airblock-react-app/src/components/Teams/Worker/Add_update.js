import * as React from "react";

// import { BsFillCalendarCheckFill } from "react-icons/bs";

export default function CustomizedTimeline(props) {
  let today = new Date().toLocaleDateString();

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="form-inline">
            <label className="mb-2">
              <b>Update Brief:</b>
            </label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Tell us about your update ..."
            >
              {props.brief}
            </textarea>
            <small id="emailHelp" className="form-text text-muted">
              Write a very brief of what your update is about.
            </small>
          </div>
          <br />
          <div className="form-inline">
            <label className="mb-2">
              <b>Update Date:</b>
            </label>
            <input
              type="text"
              className="form-control"
              value={props.update_date}
              defaultValue={today}
            />
          </div>
          <br />
          <div className="form-inline">
            <label className="mb-2">
              <b>Update Created By:</b>
            </label>
            <input
              type="text"
              className="form-control"
              value={props.createdby}
            />
          </div>
          <br />
          <div className="form-inline">
            <label className="mb-2">
              <b>Title:</b>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Title ..."
            />
          </div>
          <br />
          <div className="row">
            <div className="col">
              <div class="form-inline">
                <label>
                  <b>Type of File:</b>
                </label>
                <select class="form-control">
                  <option value="doc">Document</option>
                  <option value="img">Image</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div class="form-group">
                <label>Upload File:</label>
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
              <br />
              <button type="button" class="btn btn-primary">
                Upload Image
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <p style={{ marginBottom: "0px" }}>
                <b>Image List:</b>
              </p>
              <br />
              <div className="row">
                <div className="col">
                  {props.imagList ? (
                    <>
                      {props.imagList.map((img, index) => {
                        return (
                          <div class="card">
                            <div class="card-body">
                              <div className="row">
                                <div className="col">
                                  {img.Type === "img" ? (
                                    <img
                                      className="card-img-top"
                                      src={img.URL}
                                      alt="Card image cap"
                                    />
                                  ) : (
                                    <iframe
                                      class="card-img-top"
                                      src={img.URL}
                                    ></iframe>
                                  )}
                                </div>
                                <div className="col">
                                  <h5 class="card-title">{img.Title}</h5>
                                  <p class="card-text">{img.Description}</p>

                                  <a href="#" class="btn btn-danger">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
