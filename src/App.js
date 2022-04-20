import './App.css';

import 'devextreme/dist/css/dx.light.css';
import Button from 'devextreme-react/button';

function App() {
  function sayHello() {
    alert('hello')
  }
  return (
    <>
    <Button
                text="Click m-3333--e"
                onClick={sayHello}
            />
            </>
  );
}

export default App;
