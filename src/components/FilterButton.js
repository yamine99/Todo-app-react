

import { useQuery } from "@apollo/client";
import JsonFind from "json-find";




function FilterButton({filtersQuery, onChangeFilter, filter, name}){

        const { loading, data, error } =  useQuery(filtersQuery)
     
        let  listFilters=[]
   
  
        if(error) return  <p> Problème de connexion </p>
        
        if(!loading)
        {
        const DOC = JsonFind(data)
        listFilters = DOC.checkKey("enumValues")
        
        }
        else
        {
        return  <p> Chargement ... </p>
        }
   

  



 
  return (<div className="col">

                <select className="form-select btn-primary"  id={name}
                        value = {filter} onChange={onChangeFilter}  >
                       
                           <option disabled > {name} </option>
                            {
                            listFilters.map(item => <option value={item.name}  key={Math.random()} >{item.name}</option> )
                            }

                </select>
   
           </div>)
  }

  
  export default FilterButton