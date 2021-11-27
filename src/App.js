import { HeaderPage } from "./components/Header/HeaderPage"
import { Table } from "./components/Table/Table";
import { FilterRow } from "./components/FilterRow/FilterRow";
import './styles/reset.css'
import './styles/style.css'



function App() {
  return (
    <div className="page">
        <div className="main-wrapper">
            <HeaderPage/>
            <FilterRow/>
            <Table/>
        </div>
    </div>
  );
}

export default App;
