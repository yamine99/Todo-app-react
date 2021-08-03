import React from 'react';



function SimpleFilter({listFilters, name, onChangeSimpleFilter, filter}) {
   
       return (<div className="col">

                <select className="form-select  btn-success"  id={filter}
                        value = {filter} onChange={onChangeSimpleFilter}  >
                       
                           <option disabled > {name} </option>
                            {
                            listFilters.map(item => <option value={item}  key={Math.random()} >{item}</option> )
                            }

                </select>
   
           </div>)

}

export default SimpleFilter;