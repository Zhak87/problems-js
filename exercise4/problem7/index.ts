const is = {
  bool: (value: any): value is boolean => typeof value === "boolean",
  num: (value: any): value is number => typeof value === "number",
  str: (value: any): value is string => typeof value === "string",
  fun: (value: any): value is Function => typeof value === "function",
};

export default is;
