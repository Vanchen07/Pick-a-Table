
export const convertTime = (num) => {
  // debugger
    if (num < 12) {
      return num + ":00 AM";
    } else if (num === 12) {
      return num + ":00 PM";
    } else {
      return (num % 12) + ":00 PM";
    }
  }