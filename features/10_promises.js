/* eslint-disable */


/*

  A promise is an object which can be returned synchronously
  from an asynchronous function.

  Promises can be used to avoid callback hell, and they are more and more
  frequently encountered in modern JavaScript projects

  A promise has 3 states. They are:
    Promise is pending: You don't know if you will get that phone until next week.
    Promise is resolved: Your mom really buy you a brand new phone.
    Promise is rejected: You don't get a new phone because your mom is not happy.
*/

let someLongTask = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
          resolve("someLongTask");
      }, 1000);
  });
}


// let someOtherLongTask = (msg) => {
//   return new Promise(function(resolve,reject) {
//       setTimeout(function(){
//            resolve("someOtherLongTask says: " + msg);
//       }, 1500);
//   });
// }




someLongTask()
.then(function (msg) {
    console.log("Single: " + msg);
})


// someLongTask()
// .then(someOtherLongTask)
// .then(function (msg) {
//     console.log("Chained: " + msg);
// });




// var promises = [someLongTask(), someOtherLongTask("Hello")];

// Promise.all(promises).then(function(results) {
//     var msg1 = results[0];
//     var msg2 = results[1];
//     console.log("All: " + msg1+ " then "+ msg2);
// });





// const shouldIBuyTheNewIphone = new Promise(
//   (resolve, reject) => {
//       if (true) {
//           resolve('Yes!');
//       } else {
//           const reason = new Error('Nope');
//           reject(reason);
//       }

//   }
// );

// shouldIBuyTheNewIphone.then( (msg) => {
//   console.log(msg)
// }).catch((error) => {
//   console.log(error)
// } )