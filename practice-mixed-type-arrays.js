let userProfile = [
    "Garrett",
    22,
    false,
    {city: "St.Louis"},
    ["Video Games","Rock Climbing"]
];
console.log(userProfile[0], userProfile[4][1]);

userProfile[1] = 23;
userProfile[4][userProfile[4].length] = "Cooking"

console.log(userProfile);