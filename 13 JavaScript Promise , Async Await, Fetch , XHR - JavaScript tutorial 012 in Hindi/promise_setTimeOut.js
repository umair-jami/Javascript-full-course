//promise && setTimeout

// I want to resolve / reject promise after 2 seconds
function myPromise() {
  return new Promise((resolve, reject) => {
    const vlaue = false;
    setTimeout(() => {
      if (vlaue) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}
myPromise()
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("rejected");
  });
