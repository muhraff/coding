import React from 'react';
import { getCatsByGender } from './utils/getCats';
import List from './components/ui/List';
import Container from './components/ui/Container';

const App = () => (
  <Container>
    <h2>Male</h2>
    <List data={getCatsByGender('Male')} />

    <h2>Female</h2>
    <List data={getCatsByGender('Female')} />
  </Container>
);

export default App;
