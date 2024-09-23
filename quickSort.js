const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pointer = arr.pop();
  const [left, right] = [[],[]];

  for (let i = 0; i < arr.length; i++) {
    (pointer > arr[i])
      ? left.push(arr[i])
      : right.push(arr[i]);
  };

  return [...quickSort(left), pointer, ...quickSort(right)];
};
