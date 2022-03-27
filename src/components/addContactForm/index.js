import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

// action
import addContact from "../../redux/action/addContact";

export default function AddContactForm(params) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || phone === '' || category === '') {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        timer : 2000,
        showConfirmButton : false,
        title : 'Please Fill Form Add Contact'
      })
    } else {
      dispatch(
        addContact({
          user: {
            name,
            email,
            phone,
            category,
          },
        })
      );
    };
    setName('');
    setEmail('');
    setPhone('');
    setCategory('')
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCategory('')
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Contact
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Form Add Contact
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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Name :
                  </label>
                  <input
                    value={name}
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
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value) }
                    type="email"
                    className="form-control"
                    id="recipient-email"
                  ></input>
                  <label htmlFor="recipient-phone" className="col-form-label">
                    Phone Number :
                  </label>
                  <input
                    value={phone}
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
                    value={category}
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-control"
                    aria-label="Default select example"
                    id="recipient-category">
                    <option >Pilih Category</option>
                    <option >Family</option>
                    <option >Friend</option>
                    <option >Work</option>
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
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >
                    Add Contact
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
