export const incrementFieldByOne = (array, key, value, fieldToUpdate) => {
  const updatedArray = array.map(item => {
    if (item[key] === value) {
      const updatedItem = {
        ...item,
        [fieldToUpdate]: item[fieldToUpdate] + 1
      };
      return updatedItem;
    }
    return item;
  });
  return updatedArray;
};
