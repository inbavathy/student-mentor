export const createOptions = (values) =>
  values.map((value) => ({ label: value, value }));

export const getValues = (options) => options.map((o) => o.value);
