import axios from 'axios';
import { loadAbort } from './loadAbort';

export const service = (() => {

    const getItem = (url) => {
        const controller = loadAbort();
        return {
            call: axios.get(url, { signal: controller.signal }), controller
        }
    }

    return {
        getItem
    }

})();