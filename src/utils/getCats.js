/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import { PEOPLE } from '../mocks/data';

export const getCatsByGender = (gender) => {
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
