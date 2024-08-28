import { useEffect, useState } from 'react';

export const useFetch = () => {

    const [ loading, setLoading ] = useState(false);
    let controller = null;

    const callEndPoint = async (axiosCall) => {
        let response = { data: null, error: null };

        if(axiosCall.controller) controller = axiosCall.controller;
        setLoading(true);

        try{
            const result = await axiosCall.call;
            response.data = result.data;
        }catch(err){
            response.error = err;
        }finally{
            setLoading(false);
        }
        return response;
    }

    const cancelEndPoint = () => {
        setLoading(false);
        if(controller) controller.abort();
    }

    useEffect(() => {
        return () => {
            cancelEndPoint();
        };
    }, []);

    return { loading, callEndPoint };
}
