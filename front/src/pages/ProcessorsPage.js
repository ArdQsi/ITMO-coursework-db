import {useEffect, useState} from "react";
import DataTable from "react-data-table-component";

const ProcessorsPage = () => {
    const url = 'http://localhost:35941/processors'
    const [price, setPrice] = useState('0');
    const [data, setData] = useState('');

    const handleChange = (event) => {
        setPrice(event.target.value);
    };

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => setData(response))
    }, [])


    const handleClick = (param) => {
        const newPost = {
            "price": param
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((response) => console.log(response))
        // .then(response => setData(response))
    }
    const columns = [
        {
            name: "name",
            selector: row => row.name
        },
        {
            name: "manufacturer",
            selector: row => row.manufacturer
        },
        {
            name: "cores",
            selector: row => row.cores
        },
        {
            name: "clockspeed",
            selector: row => row.clockspeed
        },
        {
            name: "socket",
            selector: row => row.socket
        },
        {
            name: "price",
            selector: row => row.price
        }
    ]

    return (
        <div>
            <input
                type="text"
                id="price"
                name="price"
                onChange={handleChange}
                value={price}
            />
            <button onClick={() => handleClick(price)}>send</button>
            <DataTable columns={columns} data={data} fixedHeader pagination>
            </DataTable>
        </div>
    );
};

export default ProcessorsPage;