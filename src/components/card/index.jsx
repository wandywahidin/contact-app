import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import UpdateContactForm from "../updateContactForm";
import Swal from "sweetalert2";
import deleteContact from "../../redux/action/deleteContact";


const CardComponent = (props) => {
  const dispatch = useDispatch();

  const DeleteContact = (id) => {
    Swal.fire({
      title : 'Are you sure?',
      text : 'You want to  delete this',
      icon: 'warning',
      showCancelButton : true,
      confirmButtonColor : 'red',
      cancelButtonColor : 'green' 
    })
    .then((result) => {
      if(result.isConfirmed) {
        dispatch(deleteContact(id))
      }
      
    })
  }

  return (
    <div>
      <div className="card radius shadow m-3">
        <div className="card-body text-center">
          <p>{props.contactsProps.name}</p>
          <p>{props.contactsProps.email}</p>
          <p>{props.contactsProps.phone}</p>
          <p>Category : {props.contactsProps.category}</p>
            {
              props.fromDetail ?
              <div className="d-flex justify-content-center">
                <UpdateContactForm idProps ={props.contactsProps.id}/>
              </div>
              :
              <div className="d-flex justify-content-center">
                <Link to={`/detail/${props.contactsProps.id}`} className="btn btn-success m-2 shadow">Detail
                </Link>
                <button onClick={()=> DeleteContact(props.contactsProps.id)} className="btn btn-danger m-2 shadow">Delete</button>
              </div>
            }
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
