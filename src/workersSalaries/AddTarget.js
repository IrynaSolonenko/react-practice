import React from 'react';
import {useState} from "react";

const AddTarget = ({add}) => {

    const [worker, setWorker] = useState({name: '',surname: '', count: '', salary: '' });


    const addHandler = (e) => {
            e.preventDefault();

            const newItem = {...worker, id: worker.id}
            setWorker({name: '',surname: '', count: '', salary: '' })

            add(newItem)

    }


    return (
        <div>
            <input
                value={worker.name}
                type="text"
                onChange={event=>setWorker({...worker, name: event.target.value})}
            />
            <input
                value={worker.surname}
                type="text"
                onChange={event=>setWorker({...worker, surname: event.target.value})}
            />

            <input
                value={worker.count}
                type="text"
                onChange={event=>setWorker({...worker, count: event.target.value})}
            />
            <input
                value={worker.salary}
                type="text"
                onChange={event=>setWorker({...worker, salary: event.target.value})}
            />


            <button onClick={addHandler}>add</button>
        </div>
    );
};

export default AddTarget;