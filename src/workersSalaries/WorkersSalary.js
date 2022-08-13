import React from 'react';
import AddTarget from "./AddTarget";
import {useState} from "react";

const WorkersSalary = () => {
    const work = [
        {name: 'Samuel', surname: 'Jacson', count: 20, salary: 130, isEdit:false},
        {name: 'Jam', surname: 'Luise', count: 23, salary: 110, isEdit:false},
        {name: 'Katy', surname: 'Smitt', count: 20, salary: 100, isEdit:false},
        {name: 'Julia', surname: 'Krosbi', count: 22, salary: 140, isEdit:false},
        {name: 'Sam', surname: 'Venson', count: 22, salary: 160, isEdit:false}
    ]

    const [workers, setWorkers] = useState(work);
    const [salary, setSalary] = useState('0');


    function startEdit(index, event) {
        const copy = Object.assign([], workers);
        copy[index].isEdit = true;
        setWorkers(copy);

    }

    function endEdit(index) {
        const copy = Object.assign([], workers);
        copy[index].isEdit = false;
        setWorkers(copy);
    }

    function changeNote(index, event) {
        const copy = Object.assign([], workers);
        copy[index].count = event.target.value;
        setWorkers(copy);
    }

    const result = workers.map((worker, index)=>{
        let elem;
        if (!worker.isEdit){
            elem = <span onClick={()=>startEdit(index)}>{worker.count} </span>
        } else {
            elem = <input
                onChange={e=>changeNote(index, e)}
                value={worker.count}
                onBlur={() => endEdit(index)}
            />
        }

        return elem
    })

    const createItem = (newItem) => {
        setWorkers([...workers, newItem])
    }

    const fullSalary = () => {
        let salaries = workers.reduce((sum, worker)=>(worker.salary * worker.count) + sum, 0)
        console.log(salaries);
        return setSalary(salaries)
    }


    return (
        <>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th> Name </th>
                        <th> Surname </th>
                        <th> Count days </th>
                        <th> Salary per day </th>
                        <th> Salary per month </th>
                    </tr>
                    </thead>
                    <tbody>
                    {workers.map((worker, index) => (
                        <tr key={index}>
                            <td>{worker.name}</td>
                            <td>{worker.surname}</td>
                            <td>{result[index]}</td>
                            <td>{worker.salary}</td>
                            <td>{worker.salary * worker.count}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <AddTarget
                    add={createItem}
                />

                <button onClick={fullSalary}>💰</button>
                <p>{salary}</p>
            </div>
        </>
    );
};

export default WorkersSalary;