const j = [3, 5, 2, 12, 7];
const k = [4, 1, 15, 8, 3];
const j2 = [9, 16, 6, 8, 3];
const k2 = [10, 5, 6, 1, 4];

const checkDogs = (dogsJulia, dogsKate) => {
  const juliaCor = dogsJulia.splice(1, 2);
  const remaining = [...juliaCor, ...dogsKate];
  remaining.map((age, index) =>
    age < 3
      ? console.log(`Dog number ${index + 1} is still a puppy 🐶`)
      : console.log(
          `Dog number ${index + 1} is an adult, and is ${age} years old`
        )
  );
};

checkDogs(j, k);
checkDogs(j2, k2);
