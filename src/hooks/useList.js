import { useCallback, useState } from "react"


export const useList = (initialList = []) => {

    const [ items, setItems ] = useState(initialList);

    const addItem = useCallback((item) => {
        setItems(prev => {
            if(prev.some(existingItem => existingItem.name === item.name)){
                return prev;
            }
            return [...prev, item];
        });
    }, []);

    const removeItem = useCallback((name) => {
        setItems(prev => prev.filter(item => item.name !== name));
    }, []);

    return {
        items,
        addItem,
        removeItem
    }
}