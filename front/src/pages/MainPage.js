import DataTable from 'react-data-table-component';
import {useState} from "react";
import {Link} from "react-router-dom";
import InfoPage from "./InfoPage";


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
            // .then(data => {
            //     const { computercasesid, datastorageid } = data;
            //     console.log(computercasesid, datastorageid)
            // })

            // .then((response) => console.log(response))
            .then(response => setData(response))
    }

    const idData = [{
        computercasesid: data.computercasesid,
        datastorageid: data.datastorageid,
    }]


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

    // const dt = [
    //     { id: 1, name: 'Элемент 1' },
    //     { id: 2, name: 'Элемент 2' },
    //     { id: 3, name: 'Элемент 3' },
    // ];

    // const WrappedHome = function(props) {
    //     // Конструкция "{...props}" нужна, чтобы не потерять
    //     // параметры, переданные от компонента Route
    //     return (<Home {...props} user={user} />);
    // };
    //
    // const navigate = useNavigate();
    // const goNext = () => navigate
    // return (
    //     <table>
    //         <thead>
    //         <tr>
    //             <th>ID</th>
    //             <th>Название</th>
    //             <th>Действие</th>
    //         </tr>
    //         </thead>
    //         <tbody>
    //         {dt.map(item => (
    //             <tr key={item.id}>
    //                 <td>{item.id}</td>
    //                 <td>{item.name}</td>
    //                 <td>
    //                     <Link to={`/info/${item.id}`}>Подробнее</Link>
    //
    //                 </td>
    //             </tr>
    //         ))}
    //         </tbody>
    //     </table>
    // <Link to={{
    //     pathname: "/info",
    //     dom: "23"
    // }}>Подробнее</Link>
    //     <button onCLick={goNext}> go </button>
    // <Link to="/info" state={{ some: "val"}}>Подробнее</Link>
    // );




    return (
        <div>
            <div style={{display: "flex"}}>
                <input
                    type="text"
                    id="price"
                    name="price"
                    onChange={handleChange}
                    value={price}
                />
                <button onClick={() => handleClick(price)}>send</button>
            </div>

            {data ? <DataTable columns={columns} data={data} fixedHeader pagination>
            </DataTable> : <h1>Укажите сумму, на которую вы хотите собрать компьютер!</h1>}
            {/*<Link to={'/info'}>Подробнее</Link>*/}
            {/*<Link to={'/info'}>Подробнее</ Link>*/}
        </div>
    );
};

export default MainPage;