import DataTable from 'react-data-table-component';
import {useState} from "react";
import {Link} from "react-router-dom";
import InfoPage from "./InfoPage";


const MainPage = () => {
    const [price, setPrice] = useState('0');
    const [data, setData] = useState('');

    const handleChange = (event) => {
        if (!isNaN(Number(event.target.value)))
            setPrice(event.target.value);
    };


    const handleClick = (param) => {
        const newPost = {
            "price": param
        }

        fetch('http://localhost:35941/main', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.ok ? res : Promise.reject(res))
            .then((response) => response.json())
            .then(response => setData(response))
            .catch(() => console.log('some error'));
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
        },
        {
            name: "dop",
            cell: row => <Link to="/info" state={{
                computercasesid: row.computercasesid,
                datastorageid: row.datastorageid,
                motherboardsid: row.motherboardsid,
                powersupplyid: row.powersupplyid,
                processorsid: row.processorsid,
                ram_memoryid: row.ram_memoryid,
                graphicscardsid: row.graphicscardsid
            }}>Подробнее</Link>
        }
    ]

    return (
        <div>
            <div style={{display: "flex"}}>

                <input id="price"
                       name="price"
                       onChange={handleChange}
                       value={price}
                       className="form-control" type="text" placeholder="Default input"
                       aria-label="default input example"/>
                <button type="button" className="btn btn-secondary" onClick={() => handleClick(price)}>Собрать</button>
            </div>

            {data ? (
                <DataTable columns={columns} data={data} fixedHeader pagination />
            ) : (
                <>
                    <h1>Укажите сумму, на которую вы хотите собрать компьютер!</h1>
                    <div className="container">
                    <img style={{textAlign: "center"}} src="https://media1.tenor.com/m/vNHwOmIronoAAAAC/sristy-cutie-putie-sristy.gif" alt="GIF" />
                    </div>
                </>
            )}
        </div>
    );
};

export default MainPage;