import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

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


  return <div>
    {/* <Accordion items={items} /> */}
    <Search />
    {/* <Translate /> */}
  </div>
};


export default App;
