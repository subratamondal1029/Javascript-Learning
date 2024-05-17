const projectData = [
    {
        projectName : "Color Changer",
        projectDescription : "This is a simple color changer app that changes the background color of the page on click of a button.",
        folderName : "color_changer",
        projectImage : "color_changer.png"
    },
    {
        projectName : "BMI Calculator",
        projectDescription : "This is a BMI calculator that calculate BMI using height and weight",
        folderName : "BMI_calculator",
        projectImage : "Bmi_calculator.png"
    },
    {
        projectName : "Digital Clock",
        projectDescription : "This is a Digital clock That shows the local time",
        folderName : "Digital_clock",
        projectImage : "Digital_clock.png"
    }
]


let arrayOfProjectName = []

projectData.forEach(projectObj => {
    arrayOfProjectName.push(projectObj.projectName)
});

console.log(arrayOfProjectName);