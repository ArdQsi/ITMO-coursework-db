import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import ProcessorsPage from "./pages/ProcessorsPage";
import CasesPage from "./pages/CasesPage";


function App() {
    return (
        <>
            <header>
                <Link to="/">Main</Link>
                <Link to="/cases">ComputerCases</Link>
                <Link to="/datastorage">DataStorage</Link>
                <Link to="/graphicscards">GraphicCards</Link>
                <Link to="/motherboards">MotherBoards</Link>
                <Link to="/powersupply">PowerSupply</Link>
                <Link to="/processors">Processors</Link>
                <Link to="/rammemory">RamMemory</Link>

            </header>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/processors" element={<ProcessorsPage />}/>
                <Route path="/cases" element={<CasesPage />}/>
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