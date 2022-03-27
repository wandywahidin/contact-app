import axios from "axios";
import Swal from "sweetalert2";

// action
import getAllContact from "./getAllContact";

const deleteContact = (id) => {
  return function (dispatch) {
    axios({
      url: `http://localhost:3001/contact/${id}`,
      method: "DELETE",
    })
      .then(({data}) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
          title : 'Your contact has been deleted'
        });
        dispatch(getAllContact());
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          timer: 1000,
          showConfirmButton: false,
          title: `${err.massage} - ${err.status}`,
        });
      });
  };
};

export default deleteContact;
