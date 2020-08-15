export const colorCode = (name) => COLORS.indexOf(name);

export const decodedValue = (list) => {
  return parseInt(`${colorCode(list[0])}${colorCode(list[1])}`)
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
