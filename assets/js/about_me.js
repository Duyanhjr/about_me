// gen code about me list
var aboutList = {
    aboutItemLanguages: [
        {
            mySelfTitle: "Ngôn ngữ lập trình",
            myAbout: [
                "Html",
                "Css",
                "Javascript",
                "Ruby",
                "Php"
            ]
        }

    ],

    aboutItemTarget: [
        {
            mySelfTitle: "Mục tiêu",
            myAbout: [
                "Lập trình viên web",
                "Lập trình game",
                "Fullstack deverloper",
                "Senior dev",
                "Nhân viên của công ty IT"
            ]
        }

    ],

    aboutItemInterest: [
        {
            mySelfTitle: "Sở thích",
            myAbout: [
                "Đá bóng",
                "Bơi lội",
                "Gym",
                "Nghe nhạc",
                "Đọc sách"
            ]
        }

    ],

    aboutItemCharacter: [
        {
            mySelfTitle: "Tính cách",
            myAbout: [
                "Ham học hỏi",
                "Vui vẻ",
                "Hòa đồng",
                "Năng động",
                "Thân thiện"
            ]
        }

    ]
}


var myselfBox = document.getElementById("container-myself");

// Lấy các aboutItem qua vòng lặp
// for in để lấy key các key trong aboutList
for (var key in aboutList) {
    // for of để lấy mảng trong đó có các obj của key vừa lấy aboutList[key]
    for (var obj of aboutList[key]) {

        myselfBox.innerHTML +=
            `<div class="container__myself-col col l-6">
                <div class="container__myself-title">${obj["mySelfTitle"]}</div>
                    <ul class="container__myself-list">
                        <li class="container__myself-item">${obj["myAbout"][0]}</li>
                        <li class="container__myself-item">${obj["myAbout"][1]}</li>
                        <li class="container__myself-item">${obj["myAbout"][2]}</li>
                        <li class="container__myself-item">${obj["myAbout"][3]}</li>
                        <li class="container__myself-item">${obj["myAbout"][4]}</li>
                    </ul>
                </div>`;


    }
}

