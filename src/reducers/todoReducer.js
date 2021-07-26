export const initialState ={

    items:[],
    isDoneOnly: false,
    isBusiness: false,
    filterOrder:"DATE_DESC",
    filterType:{types:["Communication","Tech","Marketing","RH"]},
  
    titleType:"Type",
    titleOrder:"Ordre"
  
  }
  
export function  todoReducer (state, action){
    switch(action.type){
      case 'done' : 
             if(state.isDoneOnly){
               return {...state, isDoneOnly:false}}
             else {
               return {...state, isDoneOnly:true}}
        
      case 'businessChange': 
            if(state.isBusiness){return {...state,isBusiness:false}}
            else {return {...state, isBusiness:true}} 
  
      case 'orderChange': 
            return {...state,
                          titleOrder: action.payload,
                          filterOrder: action.payload} 
  
  
      case 'filterTypeChange': 
      return {...state, titleType:action.payload, filterType: {types:[action.payload]}} 
            
      case 'reset':
           return {...initialState}
           
      case 'back':
           return {...state}
  
      default : return state
    }
  }
  