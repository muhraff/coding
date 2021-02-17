import React from 'react';
import { getCatsByGender } from './utils/getCats';
import List from './components/ui/List';

const App = () => (
  <div>
    <div>
      <div>
        <h2>Male</h2>
        <List data={getCatsByGender('Male')} />
      </div>
      <div>
        <h2>Female</h2>
        <List data={getCatsByGender('Female')} />
      </div>
    </div>
  </div>
);

export default App;
