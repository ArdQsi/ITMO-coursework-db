import './App.css';
import DataTable from 'react-data-table-component';
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                res => setData(res)
            )
    }, [])

    const columns = [
        {
            name: "ComputerCases",
            selector: row => row.ComputerCases
        },
        {
            name: "datastorage",
            selector: row => row.datastorage
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
            name: "price",
            selector: row => row.price
        }
    ]
    // const data = [
    //     {
    //         id: 1,
    //         ComputerCases: "yea",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     },
    //     {
    //         id: 2,
    //         ComputerCases: "beeeg",
    //         datastorage: "d",
    //         motherboards: "b",
    //         powersupply: "a",
    //         processors: "he",
    //         price: "10"
    //     }
    // ]

    return (
        // <div style={{padding: "50px 10%", backgroundColor: "gray"}}className="container mt-5">
        //     <DataTable columns={columns} data={data} fixedHeader pagination>
        //     </DataTable>
        // </div>
        <div>
            <p>
                {
                    !data ? "Loading..." : data
                }
            </p>
        </div>
    );
}

export default App;
