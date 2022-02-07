import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

import { searchQuery } from "../services/endpoints";

export default function SearchResults() {
    const { params } = useLocation();
    const search = new URLSearchParams(params).getAll("search")[0];
    const [results, setResults] = useState([]);
    
    async function getResults() {
        setResults(await searchQuery(search))
    };
    
    useEffect(() =>getResults(), []);
    
    return(
        <>
            {results.author?results.author.name:<></>}
        </>
    )
}
