let camelCase = String(prompt("Enter a camelCase string: "));

const snake_case = () => {
  let result = camelCase.replace(/([A-Z])/g, "_$1").toLowerCase();
  return result;
};
console.log(snake_case());
