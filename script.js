// Learn Promises
const p1 = new Promise((res,rej) => {
    setTimeout(() =>{
        rej("val1");
    },3000);
})
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("val2");
  }, 1000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("val3");
  }, 2000);
});
// Promise.all([p1,p2,p3])  // if any oine error then it will throug error
// .then((res) => {
//     console.log(res);
// })
// .catch((err) =>{
//     console.error(err);
// })

// it will return whole array settle up all proimise
// Promise.allSettled([p1,p2,p3]) 
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

//it will return first promise whether it is success and failure
// Promise.race([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
// })

//it will return a=gregate error
// Promise.any([p1,p2,p3])
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err);
// })

