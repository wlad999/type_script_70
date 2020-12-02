enum Membership {
    Simple,
    Standart,
    Premium,
}

const membership = Membership.Standart
const membershipReverse = Membership[2]

console.log("membership", membership)
console.log("membershipReverse", membershipReverse)


enum SocialMedia {
    VK = "VK",
    FB = "FB",
    INSTA = "INSTA"
}

const social = SocialMedia.FB

// console.log("social", social)