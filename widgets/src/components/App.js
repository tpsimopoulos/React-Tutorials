import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

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

  const [selected, setSelected] = useState(options[0])

  return <div>
    <Header />
    <Route path="/">
      <Accordion items={items} />
    </Route>
    <Route path="/list">
      <Search />
    </Route>
    <Route path="/dropdown">
      <Dropdown
        label="Select a color"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </Route>
    <Route path="/translate">
      <Translate />
    </Route>
  </div >
};


export default App;
