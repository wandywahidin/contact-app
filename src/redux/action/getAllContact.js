import axios from 'axios';
import swal from 'sweetalert2';

const allContact = () => {
    return function (dispatch) {
        dispatch({type:"LOADING", payload:true});
        axios({
            url:"http://localhost:3001/contact",
            method:"GET"
        })
        .then(({data}) => {
            dispatch({type:"LOADING", payload:false})
            dispatch({type:"ALL_CONTACT", payload:data})
            
        }).catch((err) => {
            dispatch({type:"LOADING", payload:false})
            swal.fire({
                position:'top-end',
                icon:'error',
                title:`${err.massage} ${err.status}`,
                showConfirmButton: false,
                timer: 1000
            })
        })
        
    }
}

export default allContact;