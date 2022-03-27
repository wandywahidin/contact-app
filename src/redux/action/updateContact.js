import axios from 'axios';
import Swal from 'sweetalert2'

// action
import getAllcontact from './getAllContact'

const updateData = ({user}, id) => {
    return function (dispatch) {
        axios({
            url : `http://localhost:3001/contact/${id}`,
            method : 'PUT',
            data : {
                name : user.name,
                email : user.email,
                phone : user.phone,
                category : user.category
            }
        })
        .then(({data}) => {
            Swal.fire({
                position : 'top-end',
                icon: "success",
                showConfirmButton : false,
                timer : 1000,
                title : `Success Edit Contact ${data.name}`
            });
            dispatch(getAllcontact());
            
        }).catch((err) => {
            Swal.fire({
                position : "top-end",
                icon: "error",
                showConfirmButton: false,
                timer : 1000,
                title : `${err.massage} - ${err.status}`
            })
        });
    }
}

export default updateData;