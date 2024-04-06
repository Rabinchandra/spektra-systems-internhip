const startYear = 2014;
const endYear = 2050;

for (let year = startYear; year <= endYear; year++) {
  const date = new Date(year, 0, 1);

  if (date.getDay() === 0) {
    console.log(`1st January is being Sunday ${year}`);
  }
}
