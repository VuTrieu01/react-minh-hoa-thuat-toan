const getInsertionSortAnimations = (array) => {
    const animations = []; // { comparingELement1, comparingElement2, doSwap, sortedTill }

    // Đẩy hoạt ảnh để sắp xếp phần tử đầu tiên.
    animations.push(0, 0, false, 0);

    for (let i = 1; i < array.length; i++) {
        let key = array[i],
            j = i - 1;

        // Đẩy hoạt ảnh để so sánh 2 phần tử
        animations.push(i, j, false, i - 1);
        while (j >= 0 && array[j] > key) {
            // Swapping 2 values
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            // Đẩy hoạt ảnh để so sánh 2 phần tử
            animations.push(j, j + 1, false, i);
            // Đẩy hoạt ảnh để hoán đổi 2 phần tử
            animations.push(j, j + 1, true, i);
            j--;
        }
    }


    // Đẩy hoạt ảnh để biết rằng đó là phần cuối của hoạt ảnh.
    animations.push(array.length - 1, array.length - 1, false, array.length - 1);
    return animations;
};

export default getInsertionSortAnimations;
