import axios from "axios";

export async function searchQuery(query) {
    try {
        const search = await axios.get(`https://meli-api.herokuapp.com/api/items?q=${query}`)
        return search.data;
    }
    catch (e) {
            console.log("Error en la busqueda por query " + e);
    }
};

export async function searchId(id) {
    try {
            const search = await axios.get(`https://meli-api.herokuapp.com/api/items/​${id}`)
            return search.data;
    }
    catch (e) {
            console.log("Error en la busqueda por id " + e);
    }
};
