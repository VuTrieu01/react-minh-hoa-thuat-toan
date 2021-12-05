import getInsertionSortAnimations from "./getInsertionSortAnimations";
import {
    changeBackgroundColor,
    changeBoxShadow,
    swapBars,
    resetBarStyleDefault,
    disableButtons,
    enableButtons
} from "../../HelperFunctions.js";

const InsertionSort = (array, animationSpeed) => {
    // Tắt các nút để hoạt ảnh không thể bị gián đoạn.
    disableButtons();

    // Lấy các hoạt ảnh đã được tạo trong hàm "getInsertionSortAnimations".
    const animations = getInsertionSortAnimations(array);

    for (let i = 0; i < animations.length; i += 4) {
        const comparingElement1 = animations[i],
            comparingElement2 = animations[i + 1],
            doSwap = animations[i + 2],
            sortedTill = animations[i + 3];

        // Ở đây, lời hứa đã được sử dụng để biết khi nào nên Bật lại các nút sau khi setTimeout kết thúc.
        const promise1 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                // Thay đổi thanh màu của các phần tử so sánh.
                changeBackgroundColor(comparingElement1, "rgba(255,165,0, 0.9)");
                changeBackgroundColor(comparingElement2, "rgba(255,165,0, 0.9)");

                if (doSwap === true) {

                    // Thay đổi thanh màu của các phần tử phải được hoán đổi.
                    changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)");
                    changeBackgroundColor(comparingElement2, "rgba(144,238,144, 0.9)");
                    // Thực sự hoán đổi các phần tử (chiều cao).
                    swapBars(comparingElement1, comparingElement2);
                }
            }, i * animationSpeed);

            // Giải quyết lời hứa sau khi setTimeout kết thúc.
            resolve();
        });

        // Ở đây, lời hứa đã được sử dụng để biết khi nào nên Bật lại các nút sau khi setTimeout kết thúc.
        const promise2 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                // Changing the color-bars of the elements till sortedTill index.
                for (let j = 0; j <= sortedTill; j++) {
                    changeBackgroundColor(j, "rgba(0, 164, 86, 0.6)");
                    changeBoxShadow(j, "5px 5px 50px 5px rgba(0, 164, 86, 0.2)");
                }

                // Từ hàm "getInsertionSortAnimations", chúng ta biết rằng mảng được sắp xếp khi cả hai phần tử so sánh là (array.length - 1).
                // Giải quyết lời hứa khi cả hai số cao so sánh là (array.length - 1).
                if (
                    comparingElement1 === array.length - 1 &&
                    comparingElement2 === array.length - 1
                )
                    resolve();
            }, (i + 4) * animationSpeed);
        });

        Promise.all([promise1, promise2])
            // Bật các nút khi cả hai lời hứa đã được giải quyết.
            .then(enableButtons);
    }

    // Đặt lại kiểu thanh màu về mặc định sau khi hoạt ảnh kết thúc.
    resetBarStyleDefault(array, (animations.length + 4) * animationSpeed);
};

export default InsertionSort;
