import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';


describe('Pruebas eb <AppRouter/>', () => {

  test('debe de mostrar el login si no esta autenticado', () => {

    const contextValue = {
      logged: false,
    }

    render(

      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>

    );
    expect(screen.getAllByText('Login').length).toBe(2);

  });

  test('debe de mostrar el componente de Marvel si esta autenticado', () => {

    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'Daniel Sepulveda'
      }
    }
    render(

      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>

    );
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
  })

});