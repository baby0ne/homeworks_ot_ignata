import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import Error404 from './pages/Error404'
import Junior from './pages/Junior'
import Junior_plus from './pages/Junior-plus'
import PreJunior from './pages/PreJunior'

export const PATH = {
   PRE_JUNIOR: '/pre-junior',
   JUNIOR: '/junior',
   JUNIOR_PLUS: '/junior-plus'
}

function Routes() {
   return (
      <div>
         <Switch>
            <Route path={'/'} element={<PreJunior />} />

            <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
            <Route path={PATH.JUNIOR} element={<Junior />} />
            <Route path={PATH.JUNIOR_PLUS} element={<Junior_plus />} />

            <Route element={<Error404 />} />
         </Switch>
      </div>
   )
}

export default Routes;
