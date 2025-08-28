// Hàm tính tuổi theo từng năm

var ageBox = document.getElementById("age_info")

function countAge() {
    const myBirthDay = new Date (2006, 11, 8);
    const myYearBirthDay = myBirthDay.getFullYear();
    const myMonthOfBirthDay = myBirthDay.getMonth();
    const myDayOfBirthDay = myBirthDay.getDate();
    const currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = currentTime.getMonth();
    let day = currentTime.getDate();

    if (month === myMonthOfBirthDay && day === myDayOfBirthDay) {
        var myCurrentAge = year - myYearBirthDay
    } else {
        var myCurrentAge = (year - myYearBirthDay) - 1
    }

    return myCurrentAge;
}

const infoAge = `<span>Tuổi: ${countAge()}<span>`;

ageBox.innerHTML += infoAge;
