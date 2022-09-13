import { createSlice } from "@reduxjs/toolkit";
const fields = {
  name: "",
  age: "",
  email: "",
  date: "",
  address: "",
  time: "",
};
const validateFields = (fields) => {
  const errors = {};
  if (!/.+\ +.+/.test(fields.name)) {
    errors.name = true;
  }
  if (!fields.age || isNaN(fields.age) || fields.age < 0 || fields.age > 150) {
    errors.age = true;
  }
  if (!/\w+@\w+\.\w+/.test(fields.email)) {
    errors.email = true;
  }
  if (!fields.address) {
    errors.address = true;
  }
  if (!fields.time) {
    errors.time = true;
  }
  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 30);
  const date = new Date(fields.date);
  if (
    isNaN(date.getTime()) ||
    date.getTime() < startDate.getTime() ||
    date.getTime() > endDate.getTime()
  ) {
    errors.date = true;
  }

  return errors;
};
const initialState = {
  value: 0,
  status: "idle",
  fields,
  errors: validateFields(fields),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    setFieldValue: (state, action) => {
      state.fields[action.payload.name] = action.payload.value;
      state.errors = validateFields(state.fields);
    },
    validate(state) {
      state.errors = validateFields(state.fields);
    },
  },
});

export const { setFieldValue, validate } = counterSlice.actions;

export default counterSlice.reducer;
