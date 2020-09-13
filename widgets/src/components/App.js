import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';

const App = () => {

  const items = [
    {
      title: 'What is React?',
      content: 'React is a front end JS framework'
    },
    {
      title: 'What is React?',
      content: 'React is a front end JS framework'
    },
    {
      title: 'What is React?',
      content: 'React is a front end JS framework'
    }
  ]

  const options = [
    {
      label: 'Red',
      value: 'red'
    },
    {
      label: 'Green',
      value: 'green'
    },
    {
      label: 'Blue',
      value: 'blue'
    }
  ]

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return <div>
    {/* <Accordion items={items} /> */}
    {/* <Search /> */}
    <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
    {showDropdown ?
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> : null
    }
  </div>
};


export default App;
