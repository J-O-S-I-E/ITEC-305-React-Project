import Header from './components/Header/Header';
import {useState} from 'react';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples/Examples';


function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples onSelect={handleSelect} selectedTopic={selectedTopic}/>
      </main>
    </>
  );
}

export default App;