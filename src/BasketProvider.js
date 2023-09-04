import React,{useState,createContext,useContext} from 'react'
 
export const basketContext=createContext();

export const BasketProvider=({children})=>{
    const [details,setDetails]=useState([])
    return(
    <basketContext.Provider value={{details,setDetails}}>
        {children}
    </basketContext.Provider>)
    }
export const useBasketValue=()=> useContext(basketContext)