var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    //This is the same as...
    for (let i = 0; i < profileDataArr.length; i+= 1) {
    console.log(profileDataArr[i]);
    }

console.log('==========');

    //This example
    profileDataArr.forEach((profileItem) => {
    console.log(profileItem)
});
};


printProfileData(profileDataArgs);