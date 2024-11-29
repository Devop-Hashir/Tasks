let arr = []
let show;
do {
 show = prompt( `Enter option \n
     1. Add a student \n
     2. Remove a student \n
     3. Display all student \n
     0. Quit`)

if(show === "1"){
    let AddStudent = prompt("Enter the name of student to add")
    
    if (arr.includes(AddStudent)) {
        alert("Duplicate name")
    }
    else{
        arr.push(AddStudent)
        alert(`${AddStudent} added to the list`)
    }
}
else if(show ==="2"){
    let RemoveStudent = prompt("Enter the name of student to remove")
    if (arr.includes(RemoveStudent)){
       arr =  arr.filter(student=> student !== RemoveStudent)
        alert(` ${RemoveStudent} removed from the list`)
    }
    else{
        alert("Name Not Found")
    }
}
else if(show ==="3"){
    if(arr.length>0){
        console.log("List of Student: ")
       arr =  arr.map((item) => {
            console.log(item)
        })
    }
    else{
        alert("Array is empty")
    }   
}
else{
    alert("Invalid choice")
}
}
while (show !== "0"){
    alert("Program ended")
};