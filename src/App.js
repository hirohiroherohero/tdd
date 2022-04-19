import {useState} from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDoor = () => setIsOpen(prev => !prev);
  return (
    <>
    {
      isOpen?     <h1>열린문</h1> :     <h1>닫힌문</h1>
    }

      <button onClick={toggleDoor}>열려라</button>
    </>

  );
}

export default App;
