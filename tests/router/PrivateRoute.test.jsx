import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { PrivateRoute } from '../../src/router/PrivateRoute';


describe('Pruebas en <PrivateRoute/>', () => {

  test('debe de mostrar el children si esta autenticado', () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'Daniel Sepulveda'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter >
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta Privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();

  });

});