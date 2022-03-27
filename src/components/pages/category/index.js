import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// action
import getAllContact from "../../../redux/action/getAllContact";

// component
import Loading from "../../loading";
import CardComponent from "../../card/index";

const Category = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const loading = useSelector((state) => state.loadingReducer.loading);
  const contact = useSelector((state) => state.contactReducer.allContact);
  const categoryContact = useSelector(
    (state) => state.contactReducer.categoryContact
  );

  useEffect(() => {
    dispatch(getAllContact());
  }, []);

  useEffect(() => {
    const regex = RegExp(params.category, "i");
    const myContactFilter = contact.filter((contact) => {
      return regex.test(contact.category);
    });
    dispatch({ type: "CATEGORY_CONTACT", payload: myContactFilter });
  }, [params, contact]);

  return (
    <>
      <div className="container md-2">
        <div className="row">
          {
          loading ? (
            <Loading />
          ) : categoryContact.length === 0 ? (
            <div className="text-center m-2 p-4">Data Not Found</div>
          ) : (
            categoryContact.map((contact) => {
              return (
                <div key={contact.id} className="col-md-3 p-1">
                  <CardComponent contactsProps={contact} />
                </div>
              );
            })
          )
          }
        </div>
      </div>
    </>
  );
};

export default Category;
