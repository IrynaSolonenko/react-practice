import React from 'react';
import {useState} from "react";

const CountChange = ({cnange}) => {
    const [newCount, setNewCount] = useState({count:''});

    const countChangeHandler = () => {
        const newItem = {...newCount, id: newCount.id}
        setNewCount({count: ''})

        cnange(newItem)
    }

    return (
        <div>
            <input
                onKeyDown={countChangeHandler}
                onChange={e=>setNewCount(e.target.value)}
                   value={newCount.count} />
        </div>
    );
};

export default CountChange;