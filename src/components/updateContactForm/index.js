import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

// action
import getDetailContact from "../../redux/action/getDetailContact";
import updateContact from "../../redux/action/updateContact";
import GetDetailContact from '../../redux/action/getDetailContact'
import { Link, useParams } from "react-router-dom";

export default function UpdateContactForm(props) {
  const dispatch = useDispatch();
  const params = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");

  const contact = useSelector((state) => state.contactReducer.detailContact);

  const detailContact = (id) => {
    dispatch(getDetailContact(id));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || category === "") {
      Swal.fire({
        position: "top-end",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
        title: "Please Fill Form Update Contact",
      });
    } else {
      dispatch(
        updateContact(
          {
            user: {
              name,
              email,
              phone,
              category,
            },
          },
          contact.id
        )
      );
    }
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCategory("");
  };

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
    setCategory(contact.category);
  }, [contact]);

  useEffect((id) => {
    getDetailContact(id)
  })


  

  return (
    <>
      <div>
        <button
          onClick={() => detailContact(props.idProps)}
          type="button"
          className="btn btn-secondary"
          data-bs-toggle="modal"
          data-bs-target="#formUpdate"
        >
          Edit
        </button>
        <Link to='/'>
          <button className="btn btn-primary m-2">Back To Home</button>
        </Link>

        <div
          className="modal fade"
          id="formUpdate"
          tabIndex="-1"
          aria-labelledby="formUpdateLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Form Update Contact
                </h5>
                <button
                  onClick={resetForm}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-start">
                <form onSubmit={HandleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Name :
                    </label>
                    <input
                      value={name || ""}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    ></input>
                    <label htmlFor="recipient-email" className="col-form-label">
                      Email :
                    </label>
                    <input
                      value={email || ""}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                      id="recipient-email"
                    ></input>
                    <label htmlFor="recipient-phone" className="col-form-label">
                      Phone Number :
                    </label>
                    <input
                      value={phone || ""}
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      type="number"
                      className="form-control"
                      id="recipient-phone"
                    ></input>
                    <label
                      htmlFor="recipient-category"
                      className="col-form-label"
                    >
                      Category :
                    </label>
                    <select
                      value={category || ""}
                      name="category"
                      onChange={(e) => setCategory(e.target.value)}
                      className="form-control"
                      aria-label="Default select example"
                      id="recipient-category"
                    >
                      <option>Pilih Category</option>
                      <option>Family</option>
                      <option>Friend</option>
                      <option>Work</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button
                      onClick={resetForm}
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
