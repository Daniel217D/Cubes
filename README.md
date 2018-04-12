# CUBES

([Examples](https://daniel217d.github.io/Cubes/ "Пример"))


```javascript
cubes(element, {
  columns: 25,
  rows: 25,
  color: 'rgba(28, 71, 123, 0.99)',
  speed: 50,
  transition: 2000,
  once:false,
  diagonal:true
});
```
### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
columns|int|10|Amount of columns
rows|int|10|Amount of rows
color|string|rgba(66, 134, 244, 1)|Style for ```background-color``` of cubes
speed|int|100|Speed of translate to next cube
transition|int|1000|Style for ```transition``` of cubes in milliseconds
once|boolean|false|Amount of work 
diagonal|boolean|false|```true``` - transition to 8 sides, ```false``` - transition to 4 sides by plus
