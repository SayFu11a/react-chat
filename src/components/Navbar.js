import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Button, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
   const { auth } = useContext(Context);
   const [user] = useAuthState(auth);

   return (
      <div>
         <AppBar style={{ background: 'green' }} position="static">
            <Toolbar variant={'dense'}>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                     src="/01.png"
                     alt="Эко чат лого"
                     style={{ width: '40px', height: '40px', margin: '10px' }}
                  />
                  <div style={{ whiteSpace: 'nowrap', color: 'black' }}>Эко чат</div>
               </div>

               <Grid container justifyContent={'flex-end'}>
                  {user ? (
                     <Button onClick={() => auth.signOut()} variant={'outlined'}>
                        Выйти
                     </Button>
                  ) : (
                     <NavLink to={LOGIN_ROUTE}>
                        <Button variant={'outlined'}>Логин</Button>
                     </NavLink>
                  )}
               </Grid>
            </Toolbar>
         </AppBar>
      </div>
   );
};

export default Navbar;
