

import 'bootstrap/dist/css/bootstrap.min.css';

import Table from '../components/formTable/Table';
import FilterTable from '../components/formTable/FilterTable';




function TodoPage() { 

    return (  <div className="container mt-4">   
                  <FilterTable />  
                  <Table/>
              </div>
    );
}


export default TodoPage;