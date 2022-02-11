import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { searchQuery } from "../services/endpoints";
import ResultItem from "./ResultItem";

const Results = styled.article`
    background: #f0efef;
`;
const ContCategories = styled.div`
    margin-left: 14.7rem;
    margin-bottom: 1rem;
    padding-top: 1rem;
`;
const Categories = styled.span`
    font-size: 12px;
    margin: 1rem;
    color: #a8a8a8;
`;

export default function SearchResults() {
    let i = 0;
    const params = useLocation();
    const search = new URLSearchParams(params.search).getAll("search")[0];
    const [results, setResults] = useState([]);
    async function getResults() {
        setResults(await searchQuery(search))
    };
    
    useEffect(() => getResults(),// eslint-disable-next-line react-hooks/exhaustive-deps
        [params]);
    
    return(
        <Results>
            <ContCategories>
                {results.categories?.map((category) => <Categories key={i++}>{category}</Categories>)}
            </ContCategories>
            {results.items?.map((item) => ResultItem(item))}
            
        </Results>
    )
}
