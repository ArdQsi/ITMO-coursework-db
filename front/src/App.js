import './App.css';
import DataTable from 'react-data-table-component';
import MainTable from "./MainTable";


function App() {
    return (
        // <div style={{padding: "50px 10%", backgroundColor: "gray"}}className="container mt-5">
        //     <DataTable columns={columns} data={data} fixedHeader pagination>
        //     </DataTable>
        // </div>
        <div>
            <MainTable />
        </div>
    );
}

export default App;