//exersize 1 


const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}
const pushPull = (f) => {
    f();

}
pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

//exersize 2

const returnTime = function (time) {
    alert('The current time is: ' + time)
}
const getTime = (fun) => {
    
    fun(new Date());
}
getTime(returnTime)


//exersize 3


const logData = (data) => console.log(data)
const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
  displayData(alert, logData, "I like to party")

  //exersize 4

  const sum3params = (i,j,k) => i+j+k;
  console.log(sum3params(10,20,30));

  //exersize 5



const capitalize = (s) =>  "return "+s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR"))// returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia

// exersize 6 

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

 const commentOnWeather = (num) => "it's " + determineWeather(num)

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"

//exersize 7 

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")

