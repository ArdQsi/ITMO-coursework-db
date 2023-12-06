import DataTable from 'react-data-table-component';
import {useState} from "react";


const MainPage = () => {
    const [price, setPrice] = useState('0');
    const [data, setData] = useState('');

    const handleChange = (event) => {
        setPrice(event.target.value);
    };


    const handleClick = (param) => {
        const newPost = {
            "price": param
        }

        fetch('http://localhost:8080/main', {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then(response => setData(response))
    }
    const columns = [
        {
            name: "ComputerCases",
            selector: row => row.computercases
        },
        {
            name: "datastorage",
            selector: row => row.datastorage
        },
        {
            name: "graphicscards",
            selector: row => row.graphicscards
        },
        {
            name: "motherboards",
            selector: row => row.motherboards
        },
        {
            name: "powersupply",
            selector: row => row.powersupply
        },
        {
            name: "processors",
            selector: row => row.processors
        },
        {
            name: "ram_memory",
            selector: row => row.ram_memory
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

export default MainPage;