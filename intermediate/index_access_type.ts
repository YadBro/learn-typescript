type Animal = {
  name: string,
  legs: number | null,
  lugs: boolean,
  ears: number,
  skills: {
    run: boolean,
    fly: boolean,
    swim: boolean,
  }
}

// Mengambil type skillsnya saja pada type Animal
type animalSkills = Animal['skills'];
type animalFlySkill = Animal['skills']['fly'];

type animalSkillOrLegs = Animal['skills' | 'legs'];

const crocodile: animalSkills = { // crocodile can swim
  run: false,
  fly: false,
  swim: true
}

const eagle: animalFlySkill = true; // eagle can fly
const eagle2: animalSkillOrLegs = { // eagle have skills ...
  fly: true,
  run: false,
  swim: false,
}

const eagle3: animalSkillOrLegs = 2; // eagle have 2 legs

console.log({crocodile});
console.log({eagle});
console.log({eagle2});
console.log({eagle3});