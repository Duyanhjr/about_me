// Mảng các item 
var itemCv = [
    "basics",
    "work",
    "education",
    "certificates",
    "skills",
    "languages",
    "referances"
]

var itemCvVn = [
    "Thông tin cơ bản",
    "Công việc",
    "Giáo dục",
    "Chứng chỉ",
    "Kĩ năng",
    "Ngôn ngữ",
    "Tài liệu tham khảo"
]

var listCv = document.getElementById("list-cv");

var containerMycv = document.getElementById("container-mycv")

var totalItemCV =``;


for(i = 0; i < itemCv.length; i++) {
    totalItemCV +=`<li class="container__resume-item-cv">
        <label for="#${itemCv[i]}">${itemCvVn[i]}<label>
    </li>`
}

listCv.innerHTML += totalItemCV;