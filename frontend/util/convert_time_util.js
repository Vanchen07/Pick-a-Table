
// export const convertTime = (num) => {
//   // debugger
//     if (parseInt(num) < 12) {
//       return num + ":00 AM";
//     } else if (parseInt(num) === 12) {
//       // debugger
//       return num + ":00 PM";
//     } else {
//       // debugger
//       return (num - 12) + ":00 PM";
//     }
//   }



export const convertTime = (num) => {
  // debugger
    if (num < 12) {
      return num + ":00 AM";
    } else if (num === 12) {
      // debugger
      return num + ":00 PM";
    } else {
      // debugger
      return (num - 12) + ":00 PM";
    }
  }