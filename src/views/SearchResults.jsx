import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { searchQuery } from "../services/endpoints";
import ResultItem from "./ResultItem";

const Results = styled.article`

`;
const Categories = styled.span`

`;

export default function SearchResults() {
    let i = 0;
    const params = useLocation();
    const search = new URLSearchParams(params.search).getAll("search")[0];
    const [results, setResults] = useState([]);
    async function getResults() {
        setResults(await searchQuery(search))
    };
    
    useEffect(() =>getResults(),[params]);
    
    return(
        <Results>
            {results.categories?.map((category) => <Categories key={i++}>{category}</Categories>)}
            {results.items?.map((item)=>ResultItem(item))}
        </Results>
    )
}
