import axios from 'axios'
import swal from 'sweetalert2'

// action
import getAllContact from './getAllContact'

const AddContact = (({user}={}) => {
    return function(dispatch) {
        axios({
            url : "http://localhost:3001/contact",
            method : "POST",
            data : {
                name : user.name,
                email : user.email,
                phone : user.phone,
                category : user.category
            }
        })
        .then(({data}) => {
            swal.fire({
                position: 'top-end',
                icon: 'success',
                timer : 2000,
                showConfirmButton : false,
                title : `Success Add contact ${data.name}`
            })
            dispatch(getAllContact());
            
        }).catch(({err}) => {
            swal.fire({
                position:'top-end',
                icon : 'error',
                timer : 1000,
                showConfirmButton : false,
                title : `${err.massage} - ${err.status}`
            })
            
        })
    }
})

export default AddContact
