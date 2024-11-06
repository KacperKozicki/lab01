import { useContext, useEffect, useState } from "react";
import AppContext from "../data/AppContext";

// Custom hook to access items from AppContext
export function useData() {
    return useContext(AppContext).items;
}

// Custom hook to access dispatch function from AppContext
export function useDispatch() {
    return useContext(AppContext).dispatch;
}

// Custom hook to fetch data from a given URL
export function useFetch(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [url]);
    return [data];
}
