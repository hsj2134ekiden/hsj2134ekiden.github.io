const zoom = document.querySelectorAll(".zoom");

zoom.forEach(function (value) {
    value.addEventListener("click", () => {
        value.classList.toggle("in");
    });
    });


const dateDisplay = ()=> {
    const weekArray = ["日","月","火","水","木","金","土"];
    let nowDate = new Date();
    let year = nowDate.getFullYear() + "年"
    let month = nowDate.getMonth() + 1 + "月";
    let day = nowDate.getDate() + "日";
    let dayofweek = "(" + weekArray[nowDate.getDay()] + "曜日)";
    let hour = nowDate.getHours() + "時";
    let minute = nowDate.getMinutes() + "分";
    let second = nowDate.getSeconds() + "秒";
    let date = year + month + day + dayofweek;
    let time = hour + minute + second;
    document.getElementById("date").textContent = date;
    document.getElementById("time").textContent = time;
    setTimeout("dateDisplay()",1000);
};

dateDisplay();