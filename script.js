var Profile = /** @class */ (function () {
    function Profile(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }
    Profile.prototype.getDetails = function () {
        return (this.fullname, this.age);
    };
    return Profile;
}());
var profile1 = new Profile("Aka'aba Musa Akidi", 26);
console.log(profile1.getDetails);
