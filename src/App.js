/* eslint-disable no-unused-expressions */
import React from 'react';
import List from './components/ui/List';
import { PEOPLE } from './mocks/data';

const getCatsByGender = (gender) => {
  const petsByGender = PEOPLE.filter((item) => item.gender === gender);

  const cats = petsByGender.reduce((pets, people) => {
    people.pets &&
      people.pets.forEach((pet) => {
        pet.type === 'Cat' && pets.push(pet.name);
      });
    return pets;
  }, []);

  return cats.sort();
};

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
