import { useState, useEffect, useRef } from 'react';

import { initialValuesFetch } from '../helpers/types';
import { getForecast } from '../helpers/getForecast';

/**
 * hooks to fetch api 7timer
 * @param location
 * @returns {{dataForecast: null, loading: boolean, error: null, dataImage: null}}
 */
export const useFetch = (location) => {

    const isMounted = useRef(true);
    const [ state, setState ] = useState(initialValuesFetch);

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect( () => {
        setState(initialValuesFetch);
        isMounted.current = true;
        if(location){
            getForecast(location)
            .then( res => {
                if(isMounted.current)
                    setState( res );
            })
            .catch( err => {
                setState(err)
            } );
        }

    }, [ location ]);

    return state;
}