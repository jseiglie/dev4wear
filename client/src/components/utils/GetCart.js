
import React, { useContext, useEffect } from 'react'
import { Context } from '../../state/appContext';

export const GetCart = () => {
    const {store, actions} = useContext(Context);
    useEffect(()=>{
        actions.getCart(store.user.id)
    },[])

  
}
