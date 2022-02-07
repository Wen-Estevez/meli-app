import { useLocation } from "react-router-dom";


export default function SearchResults() {
    const { search } = useLocation();
    console.log(search)
    return (
        <>
            Estos son los resultados de busqueda
        </>
    )
}