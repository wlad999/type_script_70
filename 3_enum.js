var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
var membershipReverse = Membership[2];
// console.log("membership", membership)
// console.log("membershipReverse", membershipReverse)
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FB"] = "FB";
    SocialMedia["INSTA"] = "INSTA";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.FB;
console.log("social", social);
