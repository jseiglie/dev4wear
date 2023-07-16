import React, { Suspense, lazy, useContext,  useState } from "react";
import { Context } from "../state/appContext";
const DetailsComponent = lazy(() =>
  import("./../components/design/Details.Component")
);

export const Details = () => {
  
  const {store} = useContext(Context)
  const [details] = useState(store.productDetails);


  return (
    <>
    
      {details && details ? (
        <Suspense fallback={<h1>Loading</h1>}>
          <DetailsComponent  />
        </Suspense>
      ) : (
        "LoadingManager..."
      )}
    </>
  );
};
