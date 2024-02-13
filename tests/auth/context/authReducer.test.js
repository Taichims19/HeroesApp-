import { authReducer, types } from '../../../src/auth';


// eslint-disable-next-line no-undef
describe('Pruebas en el authReducer', () => { 
   
  test('debe de retornar el estado por defecto', () => { 
    
    const state = authReducer({logged: false}, {});
    expect(state).toEqual({logged: false});
    
  });

  test('debe de (login) llamar al login autenticar y establecer el user', () => { 
  
    const action = {
      type: types.login,
      payload: {
        name: 'Juan',
        id: '123'
      }
    }

    const state = authReducer({logged: false}, action);
    expect(state).toEqual({
      ...state,
      logged: true,
      user: action.payload
    })
    
  });

  test('debe de (logout) borrar el name del usuario y logged en false', () => { 
    
   const state = {
    logged: true,
    user: {id: '123',name: 'Juan'}
   }

   const action = {
    type: types.logout
  }

  const newState = authReducer(state, action);
  // console.log(newState);

  expect(newState).toEqual({logged: false})

 

  });
  
  

 })