import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

// action
import GetDetailContact from '../../../redux/action/getDetailContact'

// component
import CardComponent from '../../card'


export default function DetailContact() {
  const dispatch = useDispatch();
  const params = useParams();

  const aho =useSelector((state) =>state.contactReducer.detailContact)
  const contacts = useSelector((state) => state.contactReducer.allContact);

  useEffect(() => {
    dispatch(GetDetailContact(params.id));
  },[contacts])

  

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='d-flex justify-content-center'>
          <div className='col-sm'>
           <CardComponent contactsProps={aho} fromDetail={true}/>
          </div>
        </div>      
      </div>
    </div>
  )
}