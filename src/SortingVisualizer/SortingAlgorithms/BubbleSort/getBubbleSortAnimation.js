const getBubbleSortAnimation = (array) => {
    const animations = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Đẩy hoạt ảnh để so sánh 2 phần tử
            animations.push(j, j + 1, false, false, -1);
            if (array[j] > array[j + 1]) {
                // Hoán đổi giá trị
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                // Đẩy hoạt ảnh để hoán đổi 2 giá trị
                animations.push(j, j + 1, true, false, -1);
            }
        }
        // Tại đây, phần tử được lập chỉ mục thứ (array.length - 1 - i) sẽ được sắp xếp. Vì vậy, chúng ta cần phải thay đổi màu sắc của nó.
        // Đẩy hoạt ảnh cho phần tử được lập chỉ mục thứ (array.length - 1 - i) có vị trí được sắp xếp.
        animations.push(
            array.length - 1 - i,
            array.length - 1 - i,
            false,
            true,
            array.length - 1 - i
        );
    }
    // Đẩy hoạt ảnh để biết rằng nó đã kết thúc hoạt ảnh.
    animations.push(0, 0, false, true, 0);

    return animations;
};

export default getBubbleSortAnimation
