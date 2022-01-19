import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data,setData] = useState()
    const apiKey = '633ecc2317d7437b9265a51dbd08a31a';

    useEffect(() => {
    axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
    )
    .then(response => setData(response.data))
    .catch(((error) => console.log(error)))
    }, [])

    return (
       <NewsContext.Provider value={{ data }}>
           { props.children }
      </NewsContext.Provider>
    )
}