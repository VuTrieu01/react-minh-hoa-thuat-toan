const right_color_bar = document.getElementsByClassName("right-color-bar");
const left_color_bar = document.getElementsByClassName("left-color-bar");
const front_color_bar = document.getElementsByClassName("front-color-bar");
const back_color_bar = document.getElementsByClassName("back-color-bar");
const bottom_color_bar = document.getElementsByClassName("bottom");

// Giúp dễ dàng tìm nạp tất cả các mặt của phần tử //
export function getBarStyle(index) {
    const barStyle = [
        right_color_bar[index].style,
        left_color_bar[index].style,
        back_color_bar[index].style,
        front_color_bar[index].style,
        bottom_color_bar[index].style,
    ];
    return barStyle;
}

// Thay đổi màu của tất cả các mặt của thanh màu //
export function changeBackgroundColor(index, color) {
    const styleOfElement = getBarStyle(index);
    for (let j = 0; j < styleOfElement.length; j++)
        styleOfElement[j].backgroundColor = color;
}

// Thay đổi bóng hộp của tất cả các mặt của thanh màu //
export function changeBoxShadow(index, shadow) {
    const styleOfElement = getBarStyle(index);
    for (let j = 0; j < styleOfElement.length; j++)
        styleOfElement[j].boxShadow = shadow;
}

// Hoán đổi 2 thanh mảng (Hoán đổi chiều cao) //
export function swapBars(index1, index2) {
    const styleOfElement1 = getBarStyle(index1),
        styleOfElement2 = getBarStyle(index2);
    for (let j = 0; j < 4; j++) {
        const tempHeight = styleOfElement1[j].height;
        styleOfElement1[j].height = styleOfElement2[j].height;
        styleOfElement2[j].height = tempHeight;

        const h1 = parseInt(styleOfElement1[j].height, 10),
            h2 = parseInt(styleOfElement2[j].height, 10);

        styleOfElement1[j].transform = `translateY(${70 - h1}vh)`;
        styleOfElement2[j].transform = `translateY(${70 - h2}vh)`;
    }
}

// Đặt lại kiểu của tất cả các thanh màu //
export function resetBarStyleDefault(array, animationSpeed) {
    setTimeout(() => {
        for (let j = 0; j < array.length; j++) {
            changeBackgroundColor(j, "rgba(225, 0, 120, 0.5)");
            changeBoxShadow(j, "5px 5px 50px 5px rgba(225, 0, 120, 0.2)");
        }
    }, animationSpeed);
}

// Trả về bất kỳ giá trị ngẫu nhiên nào từ khoảng thời gian [min, max] //
export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Bật tất cả các nút //
export function enableButtons() {
    document.getElementById("reset").disabled = false;
    document.getElementById("bubbleSortButton").disabled = false;
    document.getElementById("selectionSortButton").disabled = false;
    document.getElementById("insertionSortButton").disabled = false;
    document.getElementById("range-slider").style.opacity = 1;
    document.getElementById("range-slider").style.visibility = "visible";
}

// Tắt tất cả các nút //
export function disableButtons() {
    document.getElementById("reset").disabled = true;
    document.getElementById("bubbleSortButton").disabled = true;
    document.getElementById("selectionSortButton").disabled = true;
    document.getElementById("insertionSortButton").disabled = true;
    document.getElementById("range-slider").style.opacity = 0;
    document.getElementById("range-slider").style.visibility = "hidden";
}