var userName,ID;
function signout(){
    window.location.href= "login.html";
}
firebase.auth().onAuthStateChanged(function(user){
    userName = user.email
    userName = userName.split('@');
    userName[0] = userName[0].replace(/[.]/g,"+");
    ID = userName[0];
 })
function saveToDatabase(){
tempCourses = [];

courseName = document.getElementById("courseNameForDatabase").value
if(courseName == "")
{
    window.alert("No course Entered");
    return;
}
console.log(courseName)
pushCourse(courseName);
if(courseName==null)
{
    window.alert("Course Name hasn't been entered");
}
MondayStart = document.getElementById("MondayStart").value
MondayEnd = document.getElementById("MondayEnd").value
MondayStartTut = document.getElementById("MondayStartTut").value
MondayEndTut = document.getElementById("MondayEndTut").value
MondayStartLab = document.getElementById("MondayStartLab").value
MondayEndLab = document.getElementById("MondayEndLab").value
MondayStartExtra1 = document.getElementById("MondayStartExtra1").value;
MondayStartExtra2 = document.getElementById("MondayStartExtra2").value;
MondayEndExtra1 = document.getElementById("MondayEndExtra1").value;
MondayEndExtra2 = document.getElementById("MondayEndExtra2").value;


TuesdayStart = document.getElementById("TuesdayStart").value
TuesdayEnd = document.getElementById("TuesdayEnd").value
TuesdayStartTut = document.getElementById("TuesdayStartTut").value
TuesdayEndTut = document.getElementById("TuesdayEndTut").value
TuesdayStartLab = document.getElementById("TuesdayStartLab").value
TuesdayEndLab = document.getElementById("TuesdayEndLab").value
TuesdayStartExtra1 = document.getElementById("TuesdayStartExtra1").value;
TuesdayStartExtra2 = document.getElementById("TuesdayStartExtra2").value;
TuesdayEndExtra1 = document.getElementById("TuesdayEndExtra1").value;
TuesdayEndExtra2 = document.getElementById("TuesdayEndExtra2").value;



WednesdayStart = document.getElementById("WednesdayStart").value
WednesdayEnd = document.getElementById("WednesdayEnd").value
WednesdayStartTut = document.getElementById("WednesdayStartTut").value
WednesdayEndTut = document.getElementById("WednesdayEndTut").value
WednesdayStartLab = document.getElementById("WednesdayStartLab").value
WednesdayEndLab = document.getElementById("WednesdayEndLab").value
WednesdayStartExtra1 = document.getElementById("WednesdayStartExtra1").value;
WednesdayStartExtra2 = document.getElementById("WednesdayStartExtra2").value;
WednesdayEndExtra1 = document.getElementById("WednesdayEndExtra1").value;
WednesdayEndExtra2 = document.getElementById("WednesdayEndExtra2").value;

ThursdayStart = document.getElementById("ThursdayStart").value
ThursdayEnd = document.getElementById("ThursdayEnd").value
ThursdayStartTut = document.getElementById("ThursdayStartTut").value
ThursdayEndTut = document.getElementById("ThursdayEndTut").value
ThursdayStartLab = document.getElementById("ThursdayStartLab").value
ThursdayEndLab = document.getElementById("ThursdayEndLab").value
ThursdayStartExtra1 = document.getElementById("ThursdayStartExtra1").value;
ThursdayStartExtra2 = document.getElementById("ThursdayStartExtra2").value;
ThursdayEndExtra1 = document.getElementById("ThursdayEndExtra1").value;
ThursdayEndExtra2 = document.getElementById("ThursdayEndExtra2").value;

FridayStart = document.getElementById("FridayStart").value
FridayEnd = document.getElementById("FridayEnd").value
FridayStartTut = document.getElementById("FridayStartTut").value
FridayEndTut = document.getElementById("FridayEndTut").value
FridayStartLab = document.getElementById("FridayStartLab").value
FridayEndLab = document.getElementById("FridayEndLab").value
FridayStartExtra1 = document.getElementById("FridayStartExtra1").value;
FridayStartExtra2 = document.getElementById("FridayStartExtra2").value;
FridayEndExtra1 = document.getElementById("FridayEndExtra1").value;
FridayEndExtra2 = document.getElementById("FridayEndExtra2").value;

SaturdayStart = document.getElementById("SaturdayStart").value
SaturdayEnd = document.getElementById("SaturdayEnd").value
SaturdayStartTut = document.getElementById("SaturdayStartTut").value
SaturdayEndTut = document.getElementById("SaturdayEndTut").value
SaturdayStartLab = document.getElementById("SaturdayStartLab").value
SaturdayEndLab = document.getElementById("SaturdayEndLab").value
SaturdayStartExtra1 = document.getElementById("SaturdayStartExtra1").value;
SaturdayStartExtra2 = document.getElementById("SaturdayStartExtra2").value;
SaturdayEndExtra1 = document.getElementById("SaturdayEndExtra1").value;
SaturdayEndExtra2 = document.getElementById("SaturdayEndExtra2").value;

var Monday = [];
var Tuesday = [];
var Wednesday = [];
var Thursday = [];
var Friday = [];
var Saturday =[];
/*
var MondayO = new Object();
var TuesdayO = new Object();
var WednesdayO = new Object();
var ThursdayO = new Object();
var FridayO = new Object();
var SaturdayO = new Object();
*/

if(true){
if(MondayStart!="time" && MondayEnd!="time"){
    Monday =[MondayStart + "-" + MondayEnd] 
}

if(MondayStartTut!="time" && MondayEndTut!="time"){
    Monday.push(MondayStartTut + "-" + MondayEndTut)
}

if(MondayStartLab!="time" && MondayEndLab!="time"){
    Monday.push(MondayStartLab + "-" + MondayEndLab)
}
if(MondayStartExtra1!="time" && MondayEndExtra1!="time"){
    Monday.push(MondayStartExtra1 + "-" + MondayEndExtra1)
}
if(MondayStartExtra2!="time" && MondayEndExtra2!="time"){
    Monday.push(MondayStartExtra2 + "-" + MondayEndExtra2)
}
if(MondayStart=="time" && MondayEnd=="time" && MondayStartTut=="time" && MondayEndTut=="time" && MondayStartTut=="time" && MondayEndTut=="time" && MondayStartExtra1 == 'time' && MondayEndExtra1=='time' && MondayStartExtra2 == 'time' && MondayEndExtra2=='time') 
Monday.push(null);


    if(TuesdayStart!="time" && TuesdayEnd!="time"){
        Tuesday =[TuesdayStart + "-" + TuesdayEnd] 
    }
    if(TuesdayStartTut!="time" && TuesdayEndTut!="time"){
        Tuesday.push(TuesdayStartTut + "-" + TuesdayEndTut)
    }
    if(TuesdayStartLab!="time" && TuesdayEndLab!="time"){
        Tuesday.push(TuesdayStartLab + "-" + TuesdayEndLab)
    }
    if(TuesdayStartExtra1!="time" && TuesdayEndExtra1!="time"){
        Tuesday.push(TuesdayStartExtra1 + "-" + TuesdayEndExtra1)
    }
    if(TuesdayStartExtra2!="time" && TuesdayEndExtra2!="time"){
        Tuesday.push(TuesdayStartExtra2 + "-" + TuesdayEndExtra2)
    }
    if(TuesdayStart=="time" && TuesdayEnd=="time" && TuesdayStartTut=="time" && TuesdayEndTut=="time" && TuesdayStartTut=="time" && TuesdayEndTut=="time" && TuesdayStartExtra1 == 'time' && TuesdayEndExtra1=='time' && TuesdayStartExtra2 == 'time' && TuesdayEndExtra2=='time') 
    Tuesday.push(null);


        if(WednesdayStart!="time" && WednesdayEnd!="time"){
            Wednesday =[WednesdayStart + "-" + WednesdayEnd] 
        }
        
        if(WednesdayStartTut!="time" && WednesdayEndTut!="time"){
            Wednesday.push(WednesdayStartTut + "-" + WednesdayEndTut)
        }
        
        if(WednesdayStartLab!="time" && WednesdayEndLab!="time"){
            Wednesday.push(WednesdayStartLab + "-" + WednesdayEndLab)
        }
        if(WednesdayStartExtra1!="time" && WednesdayEndExtra1!="time"){
            Wednesday.push(WednesdayStartExtra1 + "-" + WednesdayEndExtra1)
        }
        if(WednesdayStartExtra2!="time" && WednesdayEndExtra2!="time"){
            Wednesday.push(WednesdayStartExtra2 + "-" + WednesdayEndExtra2)
        }
        if(WednesdayStart=="time" && WednesdayEnd=="time" && WednesdayStartTut=="time" && WednesdayEndTut=="time" && WednesdayStartTut=="time" && WednesdayEndTut=="time" && WednesdayStartExtra1 == 'time' && WednesdayEndExtra1=='time' && WednesdayStartExtra2 == 'time' && WednesdayEndExtra2=='time') 
        Wednesday.push(null);

        
            if(ThursdayStart!="time" && ThursdayEnd!="time"){
                Thursday =[ThursdayStart + "-" + ThursdayEnd] 
            }
            
            if(ThursdayStartTut!="time" && ThursdayEndTut!="time"){
                Thursday.push(ThursdayStartTut + "-" + ThursdayEndTut)
            }
            
            if(ThursdayStartLab!="time" && ThursdayEndLab!="time"){
                Thursday.push(ThursdayStartLab + "-" + ThursdayEndLab)
            }
            if(ThursdayStartExtra1!="time" && ThursdayEndExtra1!="time"){
                Thursday.push(ThursdayStartExtra1 + "-" + ThursdayEndExtra1)
            }
            if(ThursdayStartExtra2!="time" && ThursdayEndExtra2!="time"){
                Thursday.push(ThursdayStartExtra2 + "-" + ThursdayEndExtra2)
            }
            if(ThursdayStart=="time" && ThursdayEnd=="time" && ThursdayStartTut=="time" && ThursdayEndTut=="time" && ThursdayStartTut=="time" && ThursdayEndTut=="time" && ThursdayStartExtra1 == 'time' && ThursdayEndExtra1=='time' && ThursdayStartExtra2 == 'time' && ThursdayEndExtra2=='time') 
            Thursday.push(null);

            
                if(FridayStart!="time" && FridayEnd!="time"){
                    Friday =[FridayStart + "-" + FridayEnd] 
                }
                
                if(FridayStartTut!="time" && FridayEndTut!="time"){
                    Friday.push(FridayStartTut + "-" + FridayEndTut)
                }
                
                if(FridayStartLab!="time" && FridayEndLab!="time"){
                    Friday.push(FridayStartLab + "-" + FridayEndLab)
                }
                if(FridayStartExtra1!="time" && FridayEndExtra1!="time"){
                    Friday.push(FridayStartExtra1 + "-" + FridayEndExtra1)
                }
                if(FridayStartExtra2!="time" && FridayEndExtra2!="time"){
                    Friday.push(FridayStartExtra2 + "-" + FridayEndExtra2)
                }
                if(FridayStart=="time" && FridayEnd=="time" && FridayStartTut=="time" && FridayEndTut=="time" && FridayStartTut=="time" && FridayEndTut=="time" && FridayStartExtra1 == 'time' && FridayEndExtra1=='time' && FridayStartExtra2 == 'time' && FridayEndExtra2=='time') 
                Friday.push(null);


                if(SaturdayStart!="time" && SaturdayEnd!="time"){
                    Saturday =[SaturdayStart + "-" + SaturdayEnd] 
                }

                if(SaturdayStartTut!="time" && SaturdayEndTut!="time"){
                    Saturday.push(SaturdayStartTut + "-" + SaturdayEndTut)
                }

                if(SaturdayStartLab!="time" && SaturdayEndLab!="time"){
                    Saturday.push(SaturdayStartLab + "-" + SaturdayEndLab)
                }
                if(SaturdayStartExtra1!="time" && SaturdayEndExtra1!="time"){
                    Saturday.push(SaturdayStartExtra1 + "-" + SaturdayEndExtra1)
                }
                if(SaturdayStartExtra2!="time" && SaturdayEndExtra2!="time"){
                    Saturday.push(SaturdayStartExtra2 + "-" + SaturdayEndExtra2)
                }
                if(SaturdayStart=="time" && SaturdayEnd=="time" && SaturdayStartTut=="time" && SaturdayEndTut=="time" && SaturdayStartTut=="time" && SaturdayEndTut=="time" && SaturdayStartExtra1 == 'time' && SaturdayEndExtra1=='time' && SaturdayStartExtra2 == 'time' && SaturdayEndExtra2=='time') 
                Saturday.push(null);

                }

                
firebase.database().ref("/Teacher/" + ID + "/" + courseName).set({
    Monday:Monday,
    Tuesday:Tuesday,
    Wednesday:Wednesday,
    Thursday:Thursday,
    Friday:Friday,
    Saturday:Saturday
}).then(()=>{
    window.alert("Done saving")
})

/*
if(true){
    if(MondayStart!="time" && MondayEnd!="time"){
        MondayO.Lecture = MondayStart + "-" + MondayEnd;
        
    }
    
    if(MondayStartTut!="time" && MondayEndTut!="time"){
            MondayO.Tute = MondayStartTut + "-" + MondayEndTut
    }
    
    if(MondayStartLab!="time" && MondayEndLab!="time"){
            MondayO.Lab = MondayStartLab + "-" + MondayEndLab
    }
    if(TuesdayStart!="time" && TuesdayEnd!="time"){
        TuesdayO.Lecture = TuesdayStart + "-" + TuesdayEnd;
        
    }
    
    if(TuesdayStartTut!="time" && TuesdayEndTut!="time"){
            TuesdayO.Tute = TuesdayStartTut + "-" + TuesdayEndTut
    }
    
    if(TuesdayStartLab!="time" && TuesdayEndLab!="time"){
            TuesdayO.Lab = TuesdayStartLab + "-" + TuesdayEndLab
    }
    if(WednesdayStart!="time" && WednesdayEnd!="time"){
        WednesdayO.Lecture = WednesdayStart + "-" + WednesdayEnd;
        
    }
    
    if(WednesdayStartTut!="time" && WednesdayEndTut!="time"){
            WednesdayO.Tute = WednesdayStartTut + "-" + WednesdayEndTut
    }
    
    if(WednesdayStartLab!="time" && WednesdayEndLab!="time"){
            WednesdayO.Lab = WednesdayStartLab + "-" + WednesdayEndLab
    }
    if(ThursdayStart!="time" && ThursdayEnd!="time"){
        ThursdayO.Lecture = ThursdayStart + "-" + ThursdayEnd;
        
    }
    
    if(ThursdayStartTut!="time" && ThursdayEndTut!="time"){
            ThursdayO.Tute = ThursdayStartTut + "-" + ThursdayEndTut
    }
    
    if(ThursdayStartLab!="time" && ThursdayEndLab!="time"){
            ThursdayO.Lab = ThursdayStartLab + "-" + ThursdayEndLab
    }
    if(FridayStart!="time" && FridayEnd!="time"){
        FridayO.Lecture = FridayStart + "-" + FridayEnd;
        
    }
    
    if(FridayStartTut!="time" && FridayEndTut!="time"){
            FridayO.Tute = FridayStartTut + "-" + FridayEndTut
    }
    
    if(FridayStartLab!="time" && FridayEndLab!="time"){
            FridayO.Lab = FridayStartLab + "-" + FridayEndLab
    }
    
    if(SaturdayStart!="time" && SaturdayEnd!="time"){
        SaturdayO.Lecture = SaturdayStart + "-" + SaturdayEnd;
        
    }
    
    if(SaturdayStartTut!="time" && SaturdayEndTut!="time"){
            SaturdayO.Tute = SaturdayStartTut + "-" + SaturdayEndTut
    }
    
    if(SaturdayStartLab!="time" && SaturdayEndLab!="time"){
            SaturdayO.Lab = SaturdayStartLab + "-" + SaturdayEndLab
    }
    
    }
    

    firebase.database().ref("/TeachersLLT/" + ID + "/" + courseName).set({
        Monday:MondayO,
        Tuesday:TuesdayO,
        Wednesday:WednesdayO,
        Thursday:ThursdayO,
        Friday:FridayO,
        Saturday:SaturdayO
    }).then(function(){
        window.alert("Done Saving");
    })
    */
}
function startProcession(){
    saturday = [];
    saturday[0] = document.getElementById("SaturdayStart").value;
    console.log(saturday[0]);
    /*
        var date = new Date().getTime();
        console.log(date)
    user = ID
    courseName = document.getElementById("courseName").value
    dayOfTheWeek = document.getElementById("dayOfTheWeek").value
     
var promise = runAllStudentsPromise(courseName);
var freeTimesArray = [];
var overallFreeTime = []
promise.then(function(allStudents){

findAllFreeTimes(allStudents,dayOfTheWeek).then(function(freeTimes){
    freeTimesArray = freeTimes;
    console.log("free times of all students " + freeTimesArray);
 var teacherProm = runTeacherFreeTimePromise(user,dayOfTheWeek)
 teacherProm.then(function(teachersFreeTime){
     console.log("free times of teacher " +  teachersFreeTime)
     overallFreeTime = cmpFreeTimes(freeTimesArray,teachersFreeTime)
 }).then(function(){
     console.log("overall free time "  + overallFreeTime)
     temp = joinSlots(overallFreeTime);
    var date2 = new Date().getTime();
    console.log(date2-date)
     console.log(temp);
 })
})

})
*/
}

function runAllStudentsPromise(courseName){
 return new Promise(function(resolve,reject){
     var studentsEnrolled = []


firebase.database().ref("/Courses").once('value',function(snap){
 snap.forEach(function(subSnap){
     courses = subSnap.val().courses;
for(i=0;i<courses.length;++i){
   if(courses[i]==courseName){
   studentsEnrolled.push(subSnap.key);
   break;}
 }
 })

}).then(function(){
    console.log(studentsEnrolled);
 resolve(studentsEnrolled)
})
 })
}

function runFreeTimePromise(user,dayOfTheWeek){
return new Promise(function(resolve,reject){

var timings = [];
var freeTimings = []


if(dayOfTheWeek == "Monday" || dayOfTheWeek == "monday" ){  

firebase.database().ref("/StudentsLLT/" + user).once('value',(snap)=>{
    snap.forEach(function(subSnap){
        if(subSnap.val().Monday!=null){
            courses = subSnap.val().Monday;
            if(courses.Lecture!=null)
            timings.push(courses.Lecture);
            if(courses.Lab!=null)
            timings.push(courses.Lab);
            if(courses.Tute!=null)
            timings.push(courses.Tute);

        }
    })
}).then(function(){
    freeTimings = findFreeTime(timings,"Student"); // gives free timings of monday
    resolve(freeTimings);
})
/*
firebase.database().ref("/Students/" + user).once("value",function(snapshot){
 
 snapshot.forEach(function(snapshot){ // for each child (each course in this case)
 if(snapshot.val().Monday!=null) // all timings on monday(lecture lab and tute) are pushed into timings array
 timings.push(snapshot.val().Monday);
})
}).then(function(){
    console.log(timings)
    
 freeTimings = findFreeTime(timings); // gives free timings of monday
 resolve(freeTimings);
 
})
*/
}
else if(dayOfTheWeek == "Tuesday" || dayOfTheWeek == "tuesday" ){
    firebase.database().ref("/StudentsLLT/" + user).once('value',(snap)=>{
        snap.forEach(function(subSnap){
            if(subSnap.val().Tuesday!=null){
                courses = subSnap.val().Tuesday;
                if(courses.Lecture!=null)
                timings.push(courses.Lecture);
                if(courses.Lab!=null)
                timings.push(courses.Lab);
                if(courses.Tute!=null)
                timings.push(courses.Tute);
    
            }
        })
    }).then(function(){
        freeTimings = findFreeTime(timings,"Student"); // gives free timings of Tuesday
        resolve(freeTimings);
    })
        
/*
 firebase.database().ref("/Students/" + user).once("value",function(snapshot){
     snapshot.forEach(function(snapshot){
     if(snapshot.val().Tuesday!=null)
     timings.push(snapshot.val().Tuesday);
 })
 }).then(function(){
    
    console.log("busy times of " + user + " " + timings);
     freeTimings = findFreeTime(timings);
     console.log(" free timings of " + user + " " + freeTimings);
 resolve(freeTimings);
 })
 */
}
else if(dayOfTheWeek == "Wednesday" || dayOfTheWeek == "wednesday"){  
    firebase.database().ref("/StudentsLLT/" + user).once('value',(snap)=>{
        snap.forEach(function(subSnap){
            if(subSnap.val().Wednesday!=null){
                courses = subSnap.val().Wednesday;
                if(courses.Lecture!=null)
                timings.push(courses.Lecture);
                if(courses.Lab!=null)
                timings.push(courses.Lab);
                if(courses.Tute!=null)
                timings.push(courses.Tute);
    
            }
        })
    }).then(function(){
        freeTimings = findFreeTime(timings,"Student"); // gives free timings of Wednesday
        resolve(freeTimings);
    })
        
    /*
 firebase.database().ref("/Students/" + user).once("value",function(snapshot){
     snapshot.forEach(function(snapshot){
     if(snapshot.val().Wednesday!=null)
     timings.push(snapshot.val().Wednesday);
 })
 }).then(function(){
     freeTimings = findFreeTime(timings);
 resolve(freeTimings);
 })
 */
}
else if(dayOfTheWeek == "Thursday" || dayOfTheWeek == "thursday" ){  
    firebase.database().ref("/StudentsLLT/" + user).once('value',(snap)=>{
        snap.forEach(function(subSnap){
            if(subSnap.val().Thursday!=null){
                courses = subSnap.val().Thursday;
                if(courses.Lecture!=null)
                timings.push(courses.Lecture);
                if(courses.Lab!=null)
                timings.push(courses.Lab);
                if(courses.Tute!=null)
                timings.push(courses.Tute);
    
            }
        })
    }).then(function(){
        freeTimings = findFreeTime(timings,"Student"); // gives free timings of Thursday
        resolve(freeTimings);
    })
        
    /*
 firebase.database().ref("/Students/" + user).once("value",function(snapshot){
     snapshot.forEach(function(snapshot){
     if(snapshot.val().Thursday!=null)
     timings.push(snapshot.val().Thursday);
 })
 }).then(function(){
     console.log(timings);
     freeTimings = findFreeTime(timings);
 resolve(freeTimings);
 })
 */
}
else if(dayOfTheWeek == "Friday" || dayOfTheWeek == "friday" ){  
    firebase.database().ref("/StudentsLLT/" + user).once('value',(snap)=>{
        snap.forEach(function(subSnap){
            if(subSnap.val().Friday!=null){
                courses = subSnap.val().Friday;
                if(courses.Lecture!=null)
                timings.push(courses.Lecture);
                if(courses.Lab!=null)
                timings.push(courses.Lab);
                if(courses.Tute!=null)
                timings.push(courses.Tute);
    
            }
        })
    }).then(function(){
        freeTimings = findFreeTime(timings,"Student"); // gives free timings of Friday
        resolve(freeTimings);
    })
        
    /*
 firebase.database().ref("/Students/" + user).once("value",function(snapshot){
     snapshot.forEach(function(snapshot){
     if(snapshot.val().Friday!=null)
     timings.push(snapshot.val().Friday);
 })
 }).then(function(){
     freeTimings = findFreeTime(timings);
 resolve(freeTimings);
 })
 */
}
else if(dayOfTheWeek == "Saturday" || dayOfTheWeek == "saturday"){
    firebase.database().ref("/StudentsLLT/" + user).once('value',(snap)=>{
        snap.forEach(function(subSnap){
            if(subSnap.val().Saturday!=null){
                courses = subSnap.val().Saturday;
                if(courses.Lecture!=null)
                timings.push(courses.Lecture);
                if(courses.Lab!=null)
                timings.push(courses.Lab);
                if(courses.Tute!=null)
                timings.push(courses.Tute);
    
            }
        })
    }).then(function(){
        freeTimings = findFreeTime(timings,"Student"); // gives free timings of Saturday
        resolve(freeTimings);
    })
        
}


});
}

function findFreeTime(timings,userType){
TotalSlots = 20;
FreeTimings = [];

BusyTimings = BreakTimings(timings,userType); // breaks all the timings of the user into 1/2 hour slots

start = "8:00"; end = "8:30";
for(i=0;i<=20;++i){ // 20 strings of the form "8:00-8:30", "8:30-9:00" are compared with all the 1/2 hour slots of the user
tempSlotString = start + "-" + end; // form a string to compare 
busyTimingsCount = 0;
for(j=0;j<BusyTimings.length;++j){
if(tempSlotString!=BusyTimings[j]) 
++busyTimingsCount;
else
break;
}
if(busyTimingsCount==BusyTimings.length){ // if the 1/2 hour slot doesn't match wiht any of users slots its pushed into a freetime array
 FreeTimings.push(tempSlotString)
}

start = newTime(start); // increments start time for looping

end = newTime(end);  // increments end time for looping


}

return FreeTimings;
}

function BreakTimings(classTimings,userType){
noOfClasses = classTimings.length;
console.log("no of student classes " + noOfClasses);
brokenTimings = [];
if(userType=="Student"){
for(i=0;i<noOfClasses;++i){
    time=classTimings[i].split("-");
    startTime = time[0];
    endTime = time[1];
    while(startTime!=endTime)
    {
        prevStart = startTime;
        tempSplit = startTime.split(':');
        if(tempSplit[1]=="00"){
            tempSplit[1] = "30"
           startTime = tempSplit[0] +":" + tempSplit[1];
           tempString = prevStart+"-"+startTime;
           brokenTimings.push(tempString);
           }
           else if(tempSplit[1]=="30"){
               tempSplit[1] = "00";
               tempSplit[0] = (parseInt(tempSplit[0]) + 1).toString();
              startTime = tempSplit[0] +":" + tempSplit[1];
              tempString = prevStart+"-"+startTime;
              brokenTimings.push(tempString);
              }
    }
}
}
else if(userType=="Teacher"){
    console.log(classTimings);
    if(classTimings !=[]){
    for(i=0;i<classTimings.length;++i){
 if(classTimings[i].length ==1){
 time = classTimings[i][0].split("-");
 start = time[0];
 end = time[1];
 while(start!=end)
 {
     prevStart = start;
     tempSplit = start.split(':');
     if(tempSplit[1]=="00"){
         tempSplit[1] = "30"
        start = tempSplit[0] +":" + tempSplit[1];
        tempString = prevStart+"-"+start;
        brokenTimings.push(tempString);
        }
        else if(tempSplit[1]=="30"){
            tempSplit[1] = "00";
            tempSplit[0] = (parseInt(tempSplit[0]) + 1).toString();
           start = tempSplit[0] +":" + tempSplit[1];
           tempString = prevStart+"-"+start;
           brokenTimings.push(tempString);
           }
 }
}
else if(classTimings[i].length>1)
{
    for(j=0;j<classTimings[i].length;++j){
        time = classTimings[i][j].split("-");
        start = time[0];
        end = time[1];
        while(start!=end)
        {
            prevStart = start;
            tempSplit = start.split(':');
            if(tempSplit[1]=="00"){
                tempSplit[1] = "30"
               start = tempSplit[0] +":" + tempSplit[1];
               tempString = prevStart+"-"+start;
               brokenTimings.push(tempString);
               }
               else if(tempSplit[1]=="30"){
                   tempSplit[1] = "00";
                   tempSplit[0] = (parseInt(tempSplit[0]) + 1).toString();
                  start = tempSplit[0] +":" + tempSplit[1];
                  tempString = prevStart+"-"+start;
                  brokenTimings.push(tempString);
                  }
        }
    }
}
}
}
}
return brokenTimings;
}

function newTime(time){

tempSplit = time.split(':');
if(tempSplit[1]=="00"){
 tempSplit[1] = "30"
timeNew = tempSplit[0] +":" + tempSplit[1];
return timeNew;
}
else if(tempSplit[1]=="30"){
 tempSplit[1] = "00";
 tempSplit[0] = (parseInt(tempSplit[0]) + 1).toString();
    timeNew= tempSplit[0] +":" + tempSplit[1];
  return timeNew;
   }
   return
}

function cmpFreeTimes(freeTimeArray1,freeTimeArray2){
var newFreeTimeArray = []
for(i=0;i<freeTimeArray1.length;++i){
 for(j=0;j<freeTimeArray2.length;++j){
         if(freeTimeArray1[i]==freeTimeArray2[j]){
             newFreeTimeArray.push(freeTimeArray2[j])
             break;
         }
 }
}
return newFreeTimeArray;


}

function pushCourse(courseName){
    firebase.database().ref("/TeachersCourses/" + ID).once('value').then(function(snap){
        var i=0;
        if(snap.val()==null)
        {tempArray = [courseName];
            firebase.database().ref("/TeachersCourses/" + ID).set({
                courses:tempArray
            })
        }
        else{
            tempArray = [];
            firebase.database().ref("/TeachersCourses/"+ID).once('value').then(function(snap){
                tempArray = snap.val().courses;
                for(i=0;i<tempArray.length;++i){
                    if(tempArray[i]==courseName)
                    break;
                }
                if(i==tempArray.length){
                tempArray.push(courseName)
                firebase.database().ref("/TeachersCourses/"+ID).set({
                    courses:tempArray
                })
            }
            else
            firebase.database().ref("/TeachersCourses/"+ID).set({
                courses:tempArray
            })
            })
        }
       
    })
/*
    firebase.database().ref("/TeachersCourses/" + ID).once('value').then(function(snap){
        if(snap.val()==null)
        {tempArray = [courseName];
            firebase.database().ref("/TeachersCourses/" + ID).set({
                courses:tempArray
            })
        }
        else{
            tempArray = [];tempArray2=[]
            firebase.database().ref("/TeachersCourses/"+ID).once('value').then(function(snap){
                tempArray = snap.val().courses;
                tempArray.push(courseName)
                firebase.database().ref("/TeachersCourses/"+ID).set({
                    courses:tempArray
                })
            })
        }
       
    })
    */
}

function runTeacherFreeTimePromise(user,dayOfTheWeek){
    return new Promise(function(resolve,reject){
    
    var timings = [];
    var freeTimings = []
    
    
    if(dayOfTheWeek == "Monday" || dayOfTheWeek == "monday" ){  
        /* commented every section in case we need teachers database structured in Lab,Lecture and Tute.
        firebase.database().ref("/TeachersLLT/" + user).once('value',(snap)=>{
            snap.forEach(function(subSnap){
                if(subSnap.val().Monday!=null){
                    courses = subSnap.val().Monday;
                    if(courses.Lecture!=null)
                    timings.push(courses.Lecture);
                    if(courses.Lab!=null)
                    timings.push(courses.Lab);
                    if(courses.Tute!=null)
                    timings.push(courses.Tute);
        
                }
            })
        }).then(function(){
            freeTimings = findFreeTime(timings); // gives free timings of monday
            resolve(freeTimings);
        })
        */
    
    firebase.database().ref("/Teacher/" + user).once("value",function(snapshot){
     
     snapshot.forEach(function(snapshot){ // for each child (each course in this case)
     if(snapshot.val().Monday!=null) // all timings on monday(lecture lab and tute) are pushed into timings array
     timings.push(snapshot.val().Monday);
    })
    }).then(function(){
     
     freeTimings = findFreeTime(timings,"Teacher"); // gives free timings of monday
     resolve(freeTimings);
    })
    
    }
    else if(dayOfTheWeek == "Tuesday" && dayOfTheWeek == "tuesday" ){  
        /*
        firebase.database().ref("/TeachersLLT/" + user).once('value',(snap)=>{
            snap.forEach(function(subSnap){
                if(subSnap.val().Tuesday!=null){
                    courses = subSnap.val().Tuesday;
                    if(courses.Lecture!=null)
                    timings.push(courses.Lecture);
                    if(courses.Lab!=null)
                    timings.push(courses.Lab);
                    if(courses.Tute!=null)
                    timings.push(courses.Tute);
        
                }
            })
        }).then(function(){
            freeTimings = findFreeTime(timings); // gives free timings of Tuesday
            resolve(freeTimings);
        })
        */
        
     firebase.database().ref("/Teacher/" + user).once("value",function(snapshot){
         snapshot.forEach(function(snapshot){
         if(snapshot.val().Tuesday!=null)
         timings.push(snapshot.val().Tuesday);
     })
     }).then(function(){
         freeTimings = findFreeTime(timings,"Teacher");
     resolve(freeTimings);
     })
     
    }
    else if(dayOfTheWeek == "Wednesday" || dayOfTheWeek == "wednesday"){  
        /*
        firebase.database().ref("/TeachersLLT/" + user).once('value',(snap)=>{
            snap.forEach(function(subSnap){
                if(subSnap.val().Wednesday!=null){
                    courses = subSnap.val().Wednesday;
                    if(courses.Lecture!=null)
                    timings.push(courses.Lecture);
                    if(courses.Lab!=null)
                    timings.push(courses.Lab);
                    if(courses.Tute!=null)
                    timings.push(courses.Tute);
        
                }
            })
        }).then(function(){
            freeTimings = findFreeTime(timings); // gives free timings of Wednesday
            resolve(freeTimings);
        })
        */
        
     firebase.database().ref("/Teacher/" + user).once("value",function(snapshot){
         snapshot.forEach(function(snapshot){
         if(snapshot.val().Wednesday!=null)
         timings.push(snapshot.val().Wednesday);
     })
     }).then(function(){
         freeTimings = findFreeTime(timings,"Teacher");
     resolve(freeTimings);
     })
     
    }
    else if(dayOfTheWeek == "Thursday" || dayOfTheWeek == "thursday"){  
/*
firebase.database().ref("/TeachersLLT/" + user).once('value',(snap)=>{
    snap.forEach(function(subSnap){
        if(subSnap.val().Thursday!=null){
            courses = subSnap.val().Thursday;
            if(courses.Lecture!=null)
            timings.push(courses.Lecture);
            if(courses.Lab!=null)
            timings.push(courses.Lab);
            if(courses.Tute!=null)
            timings.push(courses.Tute);

        }
    })
}).then(function(){
    freeTimings = findFreeTime(timings); // gives free timings of Thursday
    resolve(freeTimings);
})
*/
        
     firebase.database().ref("/Teacher/" + user).once("value",function(snapshot){
         snapshot.forEach(function(snapshot){
         if(snapshot.val().Thursday!=null)
         timings.push(snapshot.val().Thursday);
     })
     }).then(function(){
         freeTimings = findFreeTime(timings,"Teacher");
     resolve(freeTimings);
     })
     
    }
    else if(dayOfTheWeek == "Friday" || dayOfTheWeek == "friday"){  
        /*
        firebase.database().ref("/TeachersLLT/" + user).once('value',(snap)=>{
            snap.forEach(function(subSnap){
                if(subSnap.val().Friday!=null){
                    courses = subSnap.val().Friday;
                    if(courses.Lecture!=null)
                    timings.push(courses.Lecture);
                    if(courses.Lab!=null)
                    timings.push(courses.Lab);
                    if(courses.Tute!=null)
                    timings.push(courses.Tute);
        
                }
            })
        }).then(function(){
            freeTimings = findFreeTime(timings); // gives free timings of Friday
            resolve(freeTimings);
        })
        */
        
        
     firebase.database().ref("/Teacher/" + user).once("value",function(snapshot){
         snapshot.forEach(function(snapshot){
         if(snapshot.val().Friday!=null)
         timings.push(snapshot.val().Friday);
     })
     }).then(function(){
         freeTimings = findFreeTime(timings,"Teacher");
     resolve(freeTimings);
     })
    }


    else if(dayOfTheWeek=="Saturday" || dayOfTheWeek=="saturday"){
        /*
        firebase.database().ref("/TeachersLLT/" + user).once('value',(snap)=>{
            snap.forEach(function(subSnap){
                if(subSnap.val().Saturday!=null){
                    courses = subSnap.val().Saturday;
                    if(courses.Lecture!=null)
                    timings.push(courses.Lecture);
                    if(courses.Lab!=null)
                    timings.push(courses.Lab);
                    if(courses.Tute!=null)
                    timings.push(courses.Tute);
        
                }
            })
        }).then(function(){
            freeTimings = findFreeTime(timings); // gives free timings of Saturday
            resolve(freeTimings);
        })
        */
        firebase.database().ref("/Teacher/" + user).once("value",function(snapshot){
            snapshot.forEach(function(snapshot){
            if(snapshot.val().Saturday!=null)
            timings.push(snapshot.val().Saturday);
        })
        }).then(function(){
            freeTimings = findFreeTime(timings,"Teacher");
        resolve(freeTimings);
        })
    }
    });
}

function findAllFreeTimes(allStudents,dayOfTheWeek){
var FreeTimesArray =[];
    return new Promise(function(resolve,reject){
        if(allStudents!=null){
        runFreeTimePromise(allStudents[0],dayOfTheWeek).then(function(freeTimes){
           FreeTimesArray = freeTimes;
           console.log(allStudents.length);
           var p=0;
           for(i=1;i<allStudents.length;++i){
            console.log(i);
               runFreeTimePromise(allStudents[i],dayOfTheWeek).then(function(tempFreeTime){
                   ++p;
                FreeTimesArray = cmpFreeTimes(FreeTimesArray,tempFreeTime);
                if(p==allStudents.length-1)
                resolve(FreeTimesArray);
               })
           }
           if(allStudents.length ==1){
               runFreeTimePromise(allStudents[0],dayOfTheWeek).then(function(freeTime){
                   resolve(freeTime);
               })
           }
        })
    }
    else
    {
        window.alert("No Studetns enrolled in the Course ");
        resolve();
    }
    })
}
function joinSlots(data){
    output=[];
    let prev = data[0];
    for (let i = 1; i < data.length; i++) {
        curr = data[i];
        mer = slotMerge(prev, curr);
        if (mer) {
          output.push(mer);
          prev = i + 1 < data.length ? data[i + 1] : undefined;
          i += 1;
        } else {
          output.push(prev);
          prev = curr;
        }
      }
      if (prev) {
        output.push(prev);
      }
      return output;
    }
    function slotMerge(str1,str2){
        [start1, end1] = str1.split("-");
        [start2, end2] = str2.split("-");
        return end1 === start2 ? `${start1}-${end2}` : "";
    }