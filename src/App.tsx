import React from 'react';
import { Robots } from './features/robots/Robots';

function App() {
  return (
      <>
        <Robots url = {'https://jsonplaceholder.typicode.com/users'}/>
      </>
  );
}

export default App;
