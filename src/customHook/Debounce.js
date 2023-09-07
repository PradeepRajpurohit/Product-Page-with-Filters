import { useEffect, useState } from "react";

export function useDebounce(value,wait) {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const id = setTimeout(() => {setDebounced(value)}, wait);
        return () => clearTimeout(id);
        
    },[value,wait])
    return debounced;
}