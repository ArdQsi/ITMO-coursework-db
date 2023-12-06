import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import ProcessorsPage from "./pages/ProcessorsPage";


function App() {
    return (
        <>
            <header>
                <Link to="/">Main</Link>
                <Link to="/processors">Processors</Link>
            </header>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/processors" element={<ProcessorsPage />}/>
            </Routes>
        </>

        // <div style={{padding: "50px 10%", backgroundColor: "gray"}}className="container mt-5">
        //     <DataTable columns={columns} data={data} fixedHeader pagination>
        //     </DataTable>
        // </div>
        // <div>
        //     <MainTable />
        //
        // </div>
    );
}

export default App;