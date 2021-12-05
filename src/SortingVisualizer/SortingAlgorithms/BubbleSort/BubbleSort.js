import getBubbleSortAnimation from './getBubbleSortAnimation';
import {
    changeBackgroundColor,
    changeBoxShadow,
    swapBars,
    resetBarStyleDefault,
    disableButtons,
    enableButtons
} from "../../HelperFunctions.js";

const BubbleSort = (array, animationSpeed) => {

    //Tắt các nút để hoạt ảnh không thể bị gián đoạn.
    disableButtons();


    // Lấy các hoạt ảnh đã được tạo trong hàm "getBubbleSortAnimations".
    const animations = getBubbleSortAnimation(array);

    for (let i = 0; i < animations.length; i += 5) {
        const comparingElement1 = animations[i];
        const comparingElement2 = animations[i + 1];
        const doSwap = animations[i + 2];
        const isFinalElement = animations[i + 3];
        const finalElement = animations[i + 4];

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
                if (isFinalElement === true) {
                    // Thay đổi thanh màu của chỉ mục finalElement đã chiếm vị trí được sắp xếp cuối cùng của nó.
                    changeBackgroundColor(finalElement, "rgba(0, 164, 86, 0.6)");
                    changeBoxShadow(
                        finalElement,
                        "5px 5px 50px 5px  rgba(0, 164, 86, 0.2)"
                    );
                } else {
                    // Thay đổi thanh màu của phần tử chưa có vị trí được sắp xếp cuối cùng.
                    changeBackgroundColor(comparingElement1, "rgba(225, 0, 120, 0.6)");
                    changeBoxShadow(comparingElement1, "rgba(225, 0, 120, 0.2)");
                }
                // Từ hàm "getBubbleSortAnimations", chúng ta biết rằng mảng được sắp xếp khi finalElement bằng 0.
                // Giải quyết lời hứa khi chỉ mục finalElement bằng 0.
                if (finalElement === 0) resolve();
            }, (i + 5) * animationSpeed);
        });

        Promise.all([promise1, promise2])
            // Bật các nút khi cả hai lời hứa đã được giải quyết.
            .then(enableButtons);
    }

    // Đặt lại kiểu thanh màu về mặc định sau khi hoạt ảnh kết thúc.
    resetBarStyleDefault(array, (animations.length + 5) * animationSpeed);
};

export default BubbleSort
