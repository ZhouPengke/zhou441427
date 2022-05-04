text = prompt ("Are you a student or a parent? Pleace enter student or parent")
if (text === "student") {
 window.location.href = "https://fangjingbin.github.io/5.3/course.html";
}else if (text === "parent"){
window.location.href = "https://fangjingbin.github.io/5.3/index.html";
}
document.getElsementById("demo").innerHTML =" end script3";