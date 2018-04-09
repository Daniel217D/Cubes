cubes(document.querySelector("#s1"), {
  columns: 3,
  rows: 6,
  color: 'rgba(28, 71, 123)',
  speed: 50,
  transition: 2000
});
cubes(document.querySelector("#s1"), {
  columns: 3,
  rows: 6,
  color: 'red',
  speed: 5,
  transition: 200
});

cubes(document.getElementById("s2"), {
  columns: 35,
  rows: 15,
  color: 'rgba(87, 28, 122, 0.8)',
  speed: 100,
  transition: 1000,
  once:true
});

cubes(document.getElementById("s3"), {
  columns: 25,
  rows: 25,
  color: 'rgba(28, 71, 123, 0.99)',
  speed: 50,
  transition: 2000,
  once:false
});
