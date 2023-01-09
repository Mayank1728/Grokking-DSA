var values = [];

function f(i, values) {
  values.push(i);
  console.log(values);
  return values;
}
f(1, values);
f(2, values);
f(3, values);
