


export const initialState =
    {

        items:[],
        isDoneOnly: false,
        isNotDoneOnly: false,
        filterOrder:"DATE_DESC",
        filterType:{types:["Communication","Tech","Marketing","RH"]},
      
        titleCategorie:"Categorie",
        titleState:"All",

        titleType:"Type",
        titleOrder:"Ordre"
      
    }
  
export function  todoReducer (state, action)
    {
        switch(action.type){
          
                case 'done' : 
                         return {...state, titleState:action.payload,  isNotDoneOnly:false, isDoneOnly:true}
                                 
               case 'notDone' : 
                          return {...state, titleState:action.payload, isDoneOnly:false, isNotDoneOnly:true}
                  
                case 'businessType': 
                         if(action.payload==="Business")
                            return {...state, titleCategorie: action.payload,
                                              filterType: {types:["Communication","Marketing"]}}
                          else  
                           return {...state,  titleCategorie: action.payload,
                                                    filterType: {types:["Tech","RH"]}}
           
                case 'orderChange': 
                      return {...state,
                                    titleOrder: action.payload,
                                    filterOrder: action.payload} 
            
                case 'filterTypeChange': 
                return {...state, titleType:action.payload, filterType: {types:[action.payload]}} 
                      
                case 'reset':
                    return {...initialState}

            
        default : return state
    }
  }
  