import { useState, useEffect } from 'react';

function useReactcusthook(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then( data => {
            if(data.length > 0) {
                setData(data);
            }
        });
    },[]);
    return data;
}

export default useReactcusthook;
