import React, { useContext, useEffect } from 'react'
import { Context } from '../../state/appContext'

export const getCountries = () => {
    const {actions} = useContext(Context)
    useEffect(()=>{
        actions.countries()
    },[]) 
}
