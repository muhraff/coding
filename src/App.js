import React from 'react';
import { getCatsByGender } from './utils/getCats';
import List from './components/ui/List';
import Container from './components/ui/Container';

const App = () => (
  <Container>
    <div>
      <h2>Male</h2>
      <List data={getCatsByGender('Male')} />
    </div>
    <div>
      <h2>Female</h2>
      <List data={getCatsByGender('Female')} />
    </div>
  </Container>
);

export default App;
