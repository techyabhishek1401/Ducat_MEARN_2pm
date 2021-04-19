import { useState } from 'react'
import Comp1 from './Component/Comp1';
import Comp2 from './Component/Comp2';
import { NameContext } from './Context';
function App() {
  const [name, setName] = useState("Test");

  const nameChange = (new_name) => {
    setName(new_name)
  }
  return (
    <div className="App">
      <NameContext.Provider value={{ name, nameChange }}>
        <Comp1 />
        <Comp2 />
        {/* <Comp1 name={name} />
        <Comp2 onNameChange={nameChange} /> */}
      </NameContext.Provider>

    </div>
  );
}

export default App;
