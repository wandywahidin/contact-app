import axios from "axios";
import Swal from "sweetalert2";


const GetDetailContact = (id) => {
    return function (dispatch) {
        axios({
            url : `http://localhost:3001/contact/${id}`,
            method : "GET"
        })
            .then(({data}) => {
            dispatch({type:"DETAIL_CONTACT", payload:data});
            
            }).catch((err) => {
            Swal.fire({
                position : "top-end",
                icon :"error",
                timer : 2000,
                showConfirmButton : false,
                title :`${err.massage} - ${err.status}`
            })
            });
    }
}

export default GetDetailContact