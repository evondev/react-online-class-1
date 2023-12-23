const parentObj = {
  type: "div",
  props: {
    children: [
      {
        type: "button",
        props: {},
      },
      {
        type: "div",
        props: {
          children: [
            {
              type: "input",
              key: "search-post",
              props: {
                className: "",
                placeholder: "",
                type: "",
              },
            },
          ],
        },
      },
    ],
  },
};
const items = [
  {
    type: "input",
    key: "1",
  },
  {
    type: "input",
    key: "2",
  },
];
const demo = [
  // the entire dynamic array is the first position in the children's array
  [
    { type: "Input", key: 1 },
    { type: "Input", key: 2 },
  ],
  {
    type: "Input", // this is our manual Input after the array
  },
];
// isShow ? input : null
// isShow ? null : input
// before
// [
//   {
//     type: 'button'
//   },
//   {
//     type: 'input'
//   },
//   null,
// ]
// after
// [
//   {
//     type: 'button'
//   },
//   null,
//   {
//     type: 'input'
//   },
// ]
