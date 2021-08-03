



function CheckBoxWithLabel({ isDoneOnly, title, onChange }){
   

  return (
             <div className="col">
                  <label>{title}</label>
                  <input type="checkbox"  className="form-check-input"
                  checked={isDoneOnly}  onChange={onChange}/>      
              </div>)
          }



export default  CheckBoxWithLabel