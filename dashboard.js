let Daily = document.getElementById("Daily")
let Weekly = document.getElementById("Weekly")
let Monthly = document.getElementById("Monthly")

let WorkInfo = document.querySelector('[data-category="WorkInfo"]')
let WorkHours = WorkInfo.querySelector(".Hours")
let WorkPrevious = WorkInfo.querySelector(".Previous")


let PlayInfo = document.querySelector('[data-category="PlayInfo"]')
let PlayHours = PlayInfo.querySelector(".Hours")
let PlayPrevious = PlayInfo.querySelector(".Previous")

let StudyInfo = document.querySelector('[data-category="PlayInfo"]')
let StudyHours = StudyInfo.querySelector(".Hours")
let StudyPrevious = StudyInfo.querySelector(".Previous")

let ExerciseInfo = document.querySelector('[data-category="ExerciseInfo"]')
let ExerciseHours = ExerciseInfo.querySelector(".Hours")
let ExercisePrevious = ExerciseInfo.querySelector(".Previous")

let SocialInfo = document.querySelector('[data-category="SocialInfo"]')
let SocialHours = SocialInfo.querySelector(".Hours")
let SocialPrevious = SocialInfo.querySelector(".Previous")

let SelfCareInfo = document.querySelector('[data-category="SelfCareInfo"]')
let SelfCareHours = SocialInfo.querySelector(".Hours")
let SelfCarePrevious = SocialInfo.querySelector(".Previous")



Daily.addEventListener("click", () => {
    Daily.style.opacity = 1
    Weekly.style.opacity = .5
    Monthly.style.opacity = .5

    WorkHours.innerHTML = "5hrs"
    WorkPrevious.innerHTML = "Previous - 7hrs"

    PlayHours.innerHTML = "1hr"
    PlayPrevious.innerHTML = "Previous - 2hrs"

    StudyHours.innerHTML = "0hrs"
    StudyPrevious.innerHTML = "Previous - 1hrs"

    ExerciseHours.innerHTML = "1hr"
    ExercisePrevious.innerHTML = "Previous - 1hrs"

    SocialHours.innerHTML = "1hr"
    SocialPrevious.innerHTML = "Previous - 3hrs"

    SelfCareHours.innerHTML = "0hrs"
    SelfCarePrevious.innerHTML = "Previous - 1hrs"
})

Weekly.addEventListener("click", () => {
    Daily.style.opacity = .5
    Weekly.style.opacity = 1
    Monthly.style.opacity = .5

    WorkHours.innerHTML = "32hrs"
    WorkPrevious.innerHTML = "Previous - 36hrs"

    PlayHours.innerHTML = "10hrs"
    PlayPrevious.innerHTML = "Previous - 8hrs"

    StudyHours.innerHTML = "4hrs"
    StudyPrevious.innerHTML = "Previous - 7hrs"

    ExerciseHours.innerHTML = "4hrs"
    ExercisePrevious.innerHTML = "Previous - 5hrs"

    SocialHours.innerHTML = "5hrs"
    SocialPrevious.innerHTML = "Previous - 10hrs"

    SelfCareHours.innerHTML = "2hrs"
    SelfCarePrevious.innerHTML = "Previous - 2hrs"
})

Monthly.addEventListener("click", () => {
    Daily.style.opacity = .5
    Weekly.style.opacity = .5
    Monthly.style.opacity = 1

    WorkHours.innerHTML = "103hrs"
    WorkPrevious.innerHTML = "Previous - 128hrs"

    PlayHours.innerHTML = "23hrs"
    PlayPrevious.innerHTML = "Previous - 29hrs"

    StudyHours.innerHTML = "13hrs"
    StudyPrevious.innerHTML = "Previous - 19hrs"

    ExerciseHours.innerHTML = "11hrs"
    ExercisePrevious.innerHTML = "Previous - 18hrs"

    SocialHours.innerHTML = "21hrs"
    SocialPrevious.innerHTML = "Previous - 23hrs"

    SelfCareHours.innerHTML = "7hrs"
    SelfCarePrevious.innerHTML = "Previous - 11hrs"
})