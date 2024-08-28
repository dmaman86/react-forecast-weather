import { useEffect } from "react"

export const useAsync = (asyncFn, successFn, returnFn, dependencies = []) => {

    useEffect(() => {
        let isActive = true;

        asyncFn().then((result) => {
            if(isActive) successFn(result);
        });

        return () => {
            if(returnFn) returnFn();
            isActive = false;
        };
    }, dependencies);

}