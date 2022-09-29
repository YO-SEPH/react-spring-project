import React, { useState } from 'react';

function Clock() {
    const [ time, setTime ] = useState(new Date()); 

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return (() => clearInterval(id))
    }, []);
}
export default Clock;


