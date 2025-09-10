// Mảng các item 

const itemContainer = {
    item:
        [
            {
                id: "basics",
                title: "Thông tin cơ bản",
                quantity: [1, 2, 3, 4, 5, 6, 7, 8],
                containerItem: [
                    {
                        label: [
                            "Họ và tên",
                            "Nghề nghiệp",
                            "Email",
                            "Di động",
                            "Url",
                            "Tóm tắt",
                            "Xin việc",
                            "Cuộc đời"
                        ],
                        des: [
                            "DavidBui",
                            "Lập trình viên",
                            "bdanh2704@gmail.com",
                            "(+84)983897433",
                            "https://github.com/Duyanhjr",
                            "Một lập trình viên fullStack người Việt Nam, với vô vàn các dự án lớn nhỏ đã làm, sức ảnh hưởng của anh ấy đã có phần tác động vào sự phát triển của ngành lập trình.",
                            "BLa bLa",
                            "Anh thanh niên code dạo may mắn"
                        ]
                    }
                ]
            },
            {
                id: "work",
                title: "Công việc",
                quantity: [
                    1, 2, 3
                ],
                containerItem: [
                    {

                        timeline: [
                            "02/2025 - 07/2025",
                            "02/2025 - 07/2030",
                            "07/2030 - 08/2031"
                        ],
                        elmWork: [
                            {
                                name: [
                                    "Học lập trình",
                                    "Làm Project",
                                    "Làm việc tại Meta"
                                ],
                                location: [
                                    "Học tại nhà",
                                    "Công ty TNHH một thành viên DanhGroup",
                                    "Texas, Mỹ"
                                ],
                                des: [
                                    "Học 3 ngôn ngữ cơ bản của lập trình web(Html, Css, Javascript) và hoàn thiện một vài dự án lập trình web nhỏ.",
                                    "Thực hành các project từ nhỏ đến lớn, từ các project đơn giản đến phức tạp như : Giới thiệu bản thân, Web bán hàng< ...",
                                    "Làm dev với facebook trong công ty Meta và sửa các lỗi liên quan đến UI và UX."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "education",
                title: "Giáo dục",
                quantity: [
                    1, 2, 3
                ],
                containerItem: [
                    {

                        timeline: [
                            "09/2017 - 07/2021",
                            "10/2021 - 07/2024",
                            "02/2025 - 08/2025"
                        ],
                        elmEducation: [
                            {
                                name: [
                                    "Trường THCS Bê Tông",
                                    "Trường Cao đẳng Cộng Đồng Hà Tây",
                                    "Học tại nhà"
                                ],
                                location: [
                                    "Bê tông, Xuân Mai, Chương Mỹ, Hà Nội",
                                    "Cao Đẳng, Xuân Mai, Chương Mỹ, Hà Nội",
                                    "Xuân Trung, Bê Tông, Xuân Mai, Chương Mỹ, Hà Nội"
                                ],
                                des: [
                                    "Học 4 năm cấp 2 tại trường, học văn hóa và kiến thức của cấp 2, lực học của của tôi ở mức khá, đây cũng là lúc tôi được tiếp cận với lập trình.",
                                    "Học 3 năm cấp 3 tại trường, đây cũng là bước ngoặt quan trọng đưa tôi đến với ngành lập trình hiện tại.",
                                    "Học 3 ngôn ngữ cơ bản của lập trình web(Html, Css, Javascript) và hoàn thiện một vài dự án lập trình web nhỏ."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "certificates",
                title: "Chứng chỉ",
                quantity: [1, 2, 3, 4, 5],
                containerItem: [
                    {
                        name: [
                            "Chứng chỉ tin học",
                            "Chứng chỉ Responsive",
                            "Chứng chỉ HTML",
                            "Chứng chỉ Javascript",
                            "Chứng chỉ Ielts"
                        ],
                        location: [
                            "Trường Cao đẳng Cộng Đồng Hà Tây",
                            "F8 FullStack",
                            "freeCodeCamp",
                            "freeCodeCamp",
                            "Hội đồng Anh (British Council)"
                        ],
                        time: [
                            "03/07/2024",
                            "03/07/2025",
                            "03/08/2025",
                            "03/08/2025",
                            "03/10/2027"
                        ]
                    }
                ]
            },
            {
                id: "skills",
                title: "Kĩ năng",
                containerItem: [
                    {

                        frontEnd: [
                            {
                                name: "Front-End",
                                skillList: [
                                    "Html",
                                    "Css",
                                    "Javascript"
                                ]
                            }
                        ],
                        backEnd: [
                            {
                                name: "Back-End",
                                skillList: [
                                    "PHP",
                                    "Ruby",
                                    "NodeJs"
                                ]
                            }
                        ],
                        reactJs: [
                            {
                                name: "ReactJS",
                                skillList: [
                                    "test1",
                                    "test2",

                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "languages",
                title: "Ngôn ngữ",
                containerItem: [
                    {

                        vietnamese: [
                            {
                                name: "Tiếng Việt",
                                languageDes: "Người bản xứ"
                            }
                        ],
                        english: [
                            {
                                name: "Tiếng Anh",
                                languageDes: "Lưu loát"
                            }
                        ],
                        russian: [
                            {
                                name: "Tiếng Nga",
                                languageDes: "Biết nói"
                            }
                        ]
                    }
                ]
            },
            {
                id: "projects",
                title: "Dự án",
                containerItem: [
                    {

                        weather: [
                            {
                                name: "Dự báo thời tiết",
                                projectDes: "Dự án này khiến người dùng có thể xem dự báo thời tiết một cách đơn giản là bấm vào khu vực họ muốn xem thời tiết và web sẽ trả về kết quả thời tiết của khu vực đó ngay lập tức và cực kì chi tiết, khiến người dùng không cần phải mất thời gian tìm kiếm quá nhiều thông tin trên mạng."
                            }
                        ],
                        shop: [
                            {
                                name: "Sàn thương mại mua đồ",
                                projectDes: "Dự án này giúp người dùng có thể mua hàng một cách đơn giản chỉ cần lên trang và tìm kiếm sản phẩm muốn mua và web sẽ trả về kết quả sản phầm cực kì chi tiết, khiến người dùng không cần phải mất thời gian tìm kiếm quá nhiều thông tin trên mạng."
                            }
                        ],

                    }
                ]
            },
        ]
}

var listCv = document.getElementById("list-cv");

var containerMycv = document.getElementById("container-mycv");

var totalListItemCV = ``;

// Lấy key obj itemContainer
for (var key in itemContainer) {
    // itemParent là obj item
    const itemParent = itemContainer[key];
    // itemLength là độ dài của obj item
    const itemLength = itemParent.length;
    // Dùng vòng lặp để lấy ra các elm trong mảng item
    for (let i = 0; i < itemLength; i++) {
        // itemIndex là biến item cha của index trong mảng item
        let itemIndex = itemParent[i];
        // Lưu các biến id title
        let id = itemIndex["id"];
        let title = itemIndex["title"];
        // Thêm list cv
        totalListItemCV += `<li class="container__resume-item-cv">
        <a class="container__resume-item-link" href="#${id}">${title}<a>
    </li>`;
    };

    listCv.innerHTML += totalListItemCV;


    for (let i = 0; i < itemLength; i++) {
        // itemIndex là biến item cha của index trong mảng item
        let itemIndex = itemParent[i];
        // Lưu các biến id title
        let id = itemIndex["id"];
        let title = itemIndex["title"];

        containerMycv.innerHTML += `<div id="${id}" class="container__resume background-text border-radius margin-top-rows">
    <div class="container__resume-mycv-title">${title}</div>
                                <div class="row"></div>`;
        // Biến lấy ra thẻ row bằng css
        let elmContainerRowClass = document.querySelector(`#${id} .row`);
        let totalRow = ``;

        // Basic
        if (id === "basics") {
            // mảng quantity
            let itemQuantity = itemIndex["quantity"];
            // mảng item có key là containerItem
            let item = itemIndex["containerItem"];
            // đây là obj
            let itemContainer = item[0];
            // Lấy các key của obj và nó là mảng
            let keyItemContainer = Object.keys(itemContainer);

            // Vòng lặp chạy với số index trong key containerItem
            for (let j = 0; j < item.length; j++) {
                // Vòng lặp chạy bằng với số key và value trong key containerItem
                for (let m = 0; m < itemQuantity.length; m++) {
                    let arrLabel = [];
                    let arrDes = [];

                    // Lấy 2 mảng label và des
                    for (let k = 0; k < keyItemContainer.length; k++) {

                        if (keyItemContainer[k] === 'label') {
                            // Mảng Label
                            let arrOrgLabel = itemContainer[keyItemContainer[k]];
                            // Lấy các elm trong arrOrgLabel
                            for (let l = 0; l < arrOrgLabel.length; l++) {
                                // elm trong mảng
                                let itemLabel = arrOrgLabel[l];
                                arrLabel[arrLabel.length] = `<div class="container__resume-basics-label-item">${itemLabel}</div>`;
                            }
                        }
                        if (keyItemContainer[k] === 'des') {
                            // Mảng Label
                            let arrOrgDes = itemContainer[keyItemContainer[k]];
                            // Lấy các elm trong arrLabel
                            for (let l = 0; l < arrOrgDes.length; l++) {
                                let itemDes = arrOrgDes[l];
                                if (itemDes === "bdanh2704@gmail.com") {
                                    arrDes[arrDes.length] = `<div class="container__resume-basics-des-item"><a href="mailto:${itemDes}" target="_blank">${itemDes}</a></div>`
                                } else if (itemDes === "https://github.com/Duyanhjr") {
                                    arrDes[arrDes.length] = `<div class="container__resume-basics-des-item"><a href="${itemDes}" target="_blank">${itemDes}</a></div>`
                                } else {
                                    arrDes[arrDes.length] = `<div class="container__resume-basics-des-item">${itemDes}</div>`
                                }
                            }
                        }
                    }


                    totalRow += `<div class= "col l-12 container__resume-basics-item">
                        <div class="row">
                            <div class="col l-1">
                                ${arrLabel[m]}
                            </div>
                            <div class="col l-11">
                                ${arrDes[m]}
                            </div>
                        </div>
                    </div>`

                }
                // thêm các elm vào dom
                elmContainerRowClass.innerHTML = totalRow;
            }
        }
        // Work
        if (id === "work") {
            let itemQuantity = itemIndex["quantity"];
            // mảng item có key là containerItem
            let item = itemIndex["containerItem"];
            // đây là obj chứa  timeline và elmWork
            let itemContainer = item[0];
            // Lấy các key của obj
            let keyItemContainer = Object.keys(itemContainer);
            // Vòng lặp chạy với số index trong key containerItem
            for (let i = 0; i < item.length; i++) {
                // Vòng lặp để add code vào row
                for (let j = 0; j < itemQuantity.length; j++) {
                    // Câu lệnh để chỉ chạy block code này 1 lần
                    if (j === 0) {

                        for (let k = 0; k < keyItemContainer.length; k++) {
                            if (k === 0) {
                                // Lấy mảng TimeLine
                                var arrTimeLine = itemContainer[keyItemContainer[k]];
                            }
                            if (k === 1) {
                                // Lấy mảng ElmWork
                                var arrElmWork = itemContainer[keyItemContainer[k]];
                                // Vòng for để chạy vào trong mảng ElmWork
                                for (let l = 0; l < arrElmWork.length; l++) {
                                    // Lấy obj có các key
                                    let indexArrElmWork = arrElmWork[l];
                                    // lấy các key trong elmWork
                                    // convert sang mảng
                                    let objElmWork = Object.keys(indexArrElmWork);
                                    // vòng lặp này để chạy qua các key trong obj ElmWork
                                    // Và lấy ra các mảng bằng các key
                                    for (let m = 0; m <= objElmWork.length; m++) {
                                        // câu lệnh để lấy từng mảng tương ứng với từng index
                                        if (m === 0) {
                                            var arrName = indexArrElmWork[objElmWork[m]];
                                        }

                                        if (m === 1) {
                                            var arrLocation = indexArrElmWork[objElmWork[m]];
                                        }


                                        if (m === 2) {
                                            var arrDes = indexArrElmWork[objElmWork[m]];
                                        }
                                    }
                                    break;
                                }
                            }
                        }

                    }

                    // Gán biến cho các elm trong mảng mỗi index sẽ là số lượng phần tử quantity có
                    let itemTimeLine = arrTimeLine[j];
                    let itemName = arrName[j];
                    let itemLocation = arrLocation[j];
                    let itemDes = arrDes[j];



                    // totalRow
                    totalRow += `<div div class="container__resume-flex" >
                        <div class="col l-3">
                            <div class="container__resume-mycv-timeline border-radius">
                                ${itemTimeLine}
                            </div>
                        </div>
                        <div class="col l-9">
                            <div class="container__resume-mycv-box">
                                <div class="container__resume-mycv-name">${itemName}</div>
                                <div class="container__resume-mycv-location">
                                    <i class="container__resume-mycv-icon fa-solid fa-location-dot"></i>
                                    <span>
                                        ${itemLocation}
                                    </span>
                                </div>
                                <div class="container__resume-mycv-des">
                                    <i class="container__resume-mycv-icon fa-solid fa-suitcase"></i>
                                    <span>
                                        ${itemDes}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> `
                    // add thẻ này vào dom
                }
                elmContainerRowClass.innerHTML = totalRow;
            }

        }
        // Education
        if (id === "education") {
            let itemQuantity = itemIndex["quantity"];
            // mảng item có key là containerItem
            let item = itemIndex["containerItem"];
            // đây là obj chứa  timeline và elmWork
            let itemContainer = item[0];
            // Lấy các key của obj
            let keyItemContainer = Object.keys(itemContainer);
            // Vòng lặp chạy với số index trong key containerItem
            for (let i = 0; i < item.length; i++) {
                // Vòng lặp để add code vào row
                for (let j = 0; j < itemQuantity.length; j++) {
                    // Câu lệnh để chỉ chạy block code này 1 lần
                    if (j === 0) {
                        for (let k = 0; k < keyItemContainer.length; k++) {
                            if (k === 0) {
                                // Lấy mảng TimeLine
                                var arrTimeLine = itemContainer[keyItemContainer[k]];
                            }
                            if (k === 1) {
                                // Lấy mảng ElmWork
                                var arrElmEducation = itemContainer[keyItemContainer[k]];
                                // Vòng for để chạy vào trong mảng ElmWork
                                for (let l = 0; l < arrElmEducation.length; l++) {
                                    // Lấy obj có các key
                                    let indexarrElmEducation = arrElmEducation[l];
                                    // lấy các key trong elmWork
                                    // convert sang mảng
                                    let objElmEducation = Object.keys(indexarrElmEducation);
                                    // vòng lặp này để chạy qua các key trong obj ElmWork
                                    // Và lấy ra các mảng bằng các key
                                    for (let m = 0; m <= objElmEducation.length; m++) {
                                        // câu lệnh để lấy từng mảng tương ứng với từng index
                                        if (m === 0) {
                                            var arrName = indexarrElmEducation[objElmEducation[m]];
                                        }

                                        if (m === 1) {
                                            var arrLocation = indexarrElmEducation[objElmEducation[m]];
                                        }


                                        if (m === 2) {
                                            var arrDes = indexarrElmEducation[objElmEducation[m]];
                                        }
                                    }
                                    break;
                                }
                            }
                        }

                    }

                    // Gán biến cho các elm trong mảng mỗi index sẽ là số lượng phần tử quantity có
                    let itemTimeLine = arrTimeLine[j];
                    let itemName = arrName[j];
                    let itemLocation = arrLocation[j];
                    let itemDes = arrDes[j];



                    // totalRow
                    totalRow += `<div div class="container__resume-flex" >
                        <div class="col l-3">
                            <div class="container__resume-mycv-timeline border-radius">
                                ${itemTimeLine}
                            </div>
                        </div>
                        <div class="col l-9">
                            <div class="container__resume-mycv-box">
                                <div class="container__resume-mycv-name">${itemName}</div>
                                <div class="container__resume-mycv-location">
                                    <i class="container__resume-mycv-icon fa-solid fa-location-dot"></i>
                                    <span>
                                        ${itemLocation}
                                    </span>
                                </div>
                                <div class="container__resume-mycv-des">
                                    <i class="container__resume-mycv-icon fa-solid fa-suitcase"></i>
                                    <span>
                                        ${itemDes}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> `
                    // add thẻ này vào dom
                }
                elmContainerRowClass.innerHTML = totalRow;
            }
        }
        // Certificates
        if (id === "certificates") {
            let itemQuantity = itemIndex["quantity"];

            let item = itemIndex["containerItem"];
            // đây là obj
            let itemContainer = item[0];
            // Lấy các key của obj và nó là mảng
            let keyItemContainer = Object.keys(itemContainer);

            // Vòng lặp chạy với số index trong key containerItem
            for (let j = 0; j < item.length; j++) {
                // Vòng lặp chạy bằng với số key và value trong key containerItem
                for (let m = 0; m < itemQuantity.length; m++) {
                    let arrName = [];
                    let arrLocation = [];
                    let arrTime = []

                    for (let k = 0; k < keyItemContainer.length; k++) {

                        if (keyItemContainer[k] === 'name') {
                            // Mảng Label
                            let arrOrgName = itemContainer[keyItemContainer[k]];
                            // Lấy các elm trong arrOrgLabel
                            for (let l = 0; l < arrOrgName.length; l++) {
                                // elm trong mảng
                                let itemName = arrOrgName[l];
                                arrName[arrName.length] = `<div class="container__resume-mycv-certificate-name">${itemName}</div>`;
                            }
                        }
                        if (keyItemContainer[k] === 'location') {
                            // Mảng Label
                            let arrOrgLocation = itemContainer[keyItemContainer[k]];
                            // Lấy các elm trong arrLabel
                            for (let l = 0; l < arrOrgLocation.length; l++) {
                                let itemLocation = arrOrgLocation[l];
                                arrLocation[arrLocation.length] = `<div class="container__resume-mycv-certificate-location">${itemLocation}</div>`

                            }
                        }
                        if (keyItemContainer[k] === 'time') {
                            // Mảng Label
                            let arrOrgTime = itemContainer[keyItemContainer[k]];
                            // Lấy các elm trong arrLabel
                            for (let l = 0; l < arrOrgTime.length; l++) {
                                let itemTime = arrOrgTime[l];
                                arrTime[arrTime.length] = `<div class="container__resume-mycv-certificate-time">${itemTime}</div>`

                            }
                        }
                    }


                    totalRow += `<div class= "col l-6">
                        ${arrName[m]}
                        <div class="container__resume-mycv-certificate-box">
                            ${arrLocation[m]}
                            ${arrTime[m]}
                        </div>
                    </div>`

                }
                // thêm các elm vào dom
                elmContainerRowClass.innerHTML = totalRow;
            }
        }
        // Skill
        if (id === "skills") {
            let item = itemIndex["containerItem"];
            // đây là obj chứa  timeline và elmWork
            let itemContainer = item[0];
            // Lấy các key của obj
            let keyItemContainer = Object.keys(itemContainer);
            // Vòng lặp chạy với số index trong key containerItem
            for (let i = 0; i < item.length; i++) {
                // Vòng lặp chạy vào trong itemContainer
                for (let k = 0; k < keyItemContainer.length; k++) {
                    if (keyItemContainer[k] === "frontEnd") {
                        let arrSkill = itemContainer[keyItemContainer[k]];
                        let itemNameSkill = arrSkill[i]['name'];
                        let arrItemSkill = arrSkill[i]['skillList'];
                        let itemSkill = ``;
                        for (let j = 0; j < arrItemSkill.length; j++) {
                            itemSkill += `<li class="container__resume-mycv-skill-item">${arrItemSkill[j]}</li>`;
                        }
                        totalRow += `<div class="col l-6">
                            <div class="container__resume-mycv-skill-box">
                                <div class="container__resume-mycv-skill-title">${itemNameSkill}</div>
                                <ul class="container__resume-mycv-skill-list">
                                    ${itemSkill}
                                </ul>
                            </div>
                        </div>`
                    }
                    if (keyItemContainer[k] === "backEnd") {
                        let arrSkill = itemContainer[keyItemContainer[k]];
                        let itemNameSkill = arrSkill[i]['name'];
                        let arrItemSkill = arrSkill[i]['skillList'];
                        let itemSkill = ``;
                        for (let j = 0; j < arrItemSkill.length; j++) {
                            itemSkill += `<li class="container__resume-mycv-skill-item">${arrItemSkill[j]}</li>`;
                        }
                        totalRow += `<div class="col l-6">
                            <div class="container__resume-mycv-skill-box">
                                <div class="container__resume-mycv-skill-title">${itemNameSkill}</div>
                                <ul class="container__resume-mycv-skill-list">
                                    ${itemSkill}
                                </ul>
                            </div>
                        </div>`
                    }
                    if (keyItemContainer[k] === "reactJs") {
                        let arrSkill = itemContainer[keyItemContainer[k]];
                        let itemNameSkill = arrSkill[i]['name'];
                        let arrItemSkill = arrSkill[i]['skillList'];
                        let itemSkill = ``;
                        for (let j = 0; j < arrItemSkill.length; j++) {
                            itemSkill += `<li class="container__resume-mycv-skill-item">${arrItemSkill[j]}</li>`;
                        }
                        totalRow += `<div class="col l-6">
                            <div class="container__resume-mycv-skill-box">
                                <div class="container__resume-mycv-skill-title">${itemNameSkill}</div>
                                <ul class="container__resume-mycv-skill-list">
                                    ${itemSkill}
                                </ul>
                            </div>
                        </div>`
                    }

                }
                elmContainerRowClass.innerHTML = totalRow;
            }
        }
        // Language
        if (id === "languages") {
            let item = itemIndex["containerItem"];
            // đây là obj chứa  timeline và elmWork
            let itemContainer = item[0];
            // Lấy các key của obj
            let keyItemContainer = Object.keys(itemContainer);
            // Vòng lặp chạy với số index trong key containerItem
            for (let i = 0; i < item.length; i++) {
                // Vòng lặp chạy vào trong itemContainer
                for (let k = 0; k < keyItemContainer.length; k++) {
                    if (keyItemContainer[k] === "vietnamese") {
                        let arrLanguage = itemContainer[keyItemContainer[k]];
                        let itemNameLanguage = arrLanguage[i]['name'];
                        let itemLanguageDes = arrLanguage[i]['languageDes'];

                        totalRow += `<div class="col l-6">
                            <div class="container__resume-mycv-skill-box">
                                <div class="container__resume-mycv-language-name">${itemNameLanguage}</div>
                                <div class="container__resume-mycv-language-des">${itemLanguageDes}</div>

                            </div>
                        </div>`
                    }
                    if (keyItemContainer[k] === "english") {
                        let arrLanguage = itemContainer[keyItemContainer[k]];
                        let itemNameLanguage = arrLanguage[i]['name'];
                        let itemLanguageDes = arrLanguage[i]['languageDes'];

                        totalRow += `<div class="col l-6">
                            <div class="container__resume-mycv-skill-box">
                                <div class="container__resume-mycv-language-name">${itemNameLanguage}</div>
                                <div class="container__resume-mycv-language-des">${itemLanguageDes}</div>

                            </div>
                        </div>`
                    }
                    if (keyItemContainer[k] === "russian") {
                        let arrLanguage = itemContainer[keyItemContainer[k]];
                        let itemNameLanguage = arrLanguage[i]['name'];
                        let itemLanguageDes = arrLanguage[i]['languageDes'];

                        totalRow += `<div class="col l-6">
                            <div class="container__resume-mycv-skill-box">
                                <div class="container__resume-mycv-language-name">${itemNameLanguage}</div>
                                <div class="container__resume-mycv-language-des">${itemLanguageDes}</div>

                            </div>
                        </div>`
                    }

                }
                elmContainerRowClass.innerHTML = totalRow;
            };
        }
        // Project
        if (id === "projects") {
            let item = itemIndex["containerItem"];
            // đây là obj chứa  timeline và elmWork
            let itemContainer = item[0];
            // Lấy các key của obj
            let keyItemContainer = Object.keys(itemContainer);
            // Vòng lặp chạy với số index trong key containerItem
            for (let i = 0; i < item.length; i++) {
                // Vòng lặp chạy vào trong itemContainer
                for (let k = 0; k < keyItemContainer.length; k++) {
                    if (keyItemContainer[k] === "weather") {
                        let arrProject = itemContainer[keyItemContainer[k]];
                        let itemNameProject = arrProject[i]['name'];
                        let itemDesProject = arrProject[i]['projectDes'];

                        totalRow += `<div class="col l-6">
                            <div class="container__resume-mycv-skill-box">
                                <div class="container__resume-mycv-language-name">${itemNameProject}</div>
                                <div class="container__resume-mycv-language-des">${itemDesProject}</div>

                            </div>
                        </div>`
                    }
                    if (keyItemContainer[k] === "shop") {
                        let arrProject = itemContainer[keyItemContainer[k]];
                        let itemNameProject = arrProject[i]['name'];
                        let itemDesProject = arrProject[i]['projectDes'];

                        totalRow += `<div class="col l-6">
                            <div class="container__resume-mycv-skill-box">
                                <div class="container__resume-mycv-language-name">${itemNameProject}</div>
                                <div class="container__resume-mycv-language-des">${itemDesProject}</div>

                            </div>
                        </div>`
                    }
                    if (keyItemContainer[k] === "weather") {
                        let arrProject = itemContainer[keyItemContainer[k]];
                        let itemNameProject = arrProject[i]['name'];
                        let itemDesProject = arrProject[i]['projectDes'];

                        totalRow += `<div class="col l-6">
                            <div class="container__resume-mycv-skill-box">
                                <div class="container__resume-mycv-language-name">${itemNameProject}</div>
                                <div class="container__resume-mycv-language-des">${itemDesProject}</div>

                            </div>
                        </div>`
                    }

                }
                elmContainerRowClass.innerHTML = totalRow;
            };
        }

    }
}