import React, { createContext, useState } from "react";
import { products } from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props)=> {

    const Currency = '₹'
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const value = {
        products , Currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch
    }
    
    return(
        // FIX: The 'value' object is now passed to the Provider
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;