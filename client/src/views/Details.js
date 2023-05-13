import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../state/appContext";
const DetailsComponent = lazy(() =>
  import("./../components/Details.Component")
);

export const Details = () => {
  const { id } = useParams();
  const {store, actions} = useContext(Context)
  const [details, setDetails] = useState(store.productDetails);


  // const getDetails = async () => {
  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   const requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   const resp = await fetch(
  //     `${process.env.REACT_APP_API}/product/${id}`,
  //     requestOptions
  //   );
  //   const data = await resp.json();
  //   setDetails[data];
  // };

  // useEffect(() => {
  //   getDetails();
  // });

  console.log(details);

  return (
    <>
    
      {details ? (
        <Suspense fallback={<h1>Loading</h1>}>
          <DetailsComponent details={store.details} />
        </Suspense>
      ) : (
        "LoadingManager..."
      )}
    </>
  );
};
