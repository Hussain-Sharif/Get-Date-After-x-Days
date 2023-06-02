const addDays = require("date-fns/addDays");

let k = (d) => {
  let p = addDays(new Date("22 Aug 2020"), d);
  //console.log(p.getDate() + "-" + (p.getMonth() + 1) + "-" + p.getFullYear());
  return p.getDate() + "-" + (p.getMonth()+1) + "-" + p.getFullYear();
};

module.exports = k;
//k(5);
