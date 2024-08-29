import logo from './logo.svg';
import './App.css';
// import Demo from './Demo';

import { Suspense } from 'react';
const Demo = React.lazy(() => import('./Demo'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Demo />
      </Suspense>
     
    </div>

  );
}
export default App;
