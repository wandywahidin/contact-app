import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// action
import getAllContact from "../../../redux/action/getAllContact";

// component
import CardComponent from "../../card/index";
import Loading from "../../loading";

function Hero() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loadingReducer.loading);
  const contacts = useSelector((state) => state.contactReducer.allContact);

  useEffect(() => {
    dispatch(getAllContact());
  }, []);


  return (
    <>
      <div className="container mt-2">
        <div className="row">
          {loading ? (
            <Loading/>
          ) : contacts.length === 0 ? (
            <div className="text-center m-2 p-4">Data Not Found</div>
          ) : (
            contacts.map((contacts) => {
              return (
                <div className="col-md-3" key={contacts.id}>
                  <CardComponent contactsProps={contacts}/>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
