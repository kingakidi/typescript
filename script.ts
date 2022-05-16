

class Profile {
    

    constructor(private fullname, private age){

    }
   getDetails(){
       console.log(this.fullname, this.age)
   }

}

let profile1 = new Profile("Aka'aba Musa Akidi", 26);

console.log(profile1.getDetails)
