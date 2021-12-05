const getSelectionSortAnimations = (array) => {
    const animations = []; // { currElement, comparingElement, minIndex, doSwap, isFinalElement, finalElement }

    let min_idx;
    for (let i = 0; i < array.length; i++) {
        min_idx = i;
        // Đẩy hoạt ảnh cho phần tử hiện tại phải được sắp xếp.
        animations.push(i, i, min_idx, false, false, -1);

        for (let j = i + 1; j < array.length; j++) {
            // Đẩy hoạt ảnh cho các phần tử chỉ mục thứ (i) th, (j) th và (min_idx).
            animations.push(i, j, min_idx, false, false, -1);
            if (array[j] < array[min_idx]) {
                min_idx = j;
                // Đẩy hoạt ảnh để thay đổi phần tử min_idx.
                animations.push(i, j, min_idx, false, false, -1);
            }
        }
        if (min_idx !== i) {
            // Hoán đổi 2 giá trị.
            [array[i], array[min_idx]] = [array[min_idx], array[i]];
            // Đẩy hoạt ảnh để hoán đổi các phần tử chỉ mục thứ (i) và (min_idx).
            animations.push(i, i, min_idx, true, false, -1);
        }
        // Tại đây, phần tử được lập chỉ mục thứ (i) sẽ được sắp xếp. Vì vậy, chúng ta cần phải thay đổi màu sắc của nó.
        // Đẩy hoạt ảnh cho phần tử được lập chỉ mục thứ (i) có vị trí được sắp xếp.
        animations.push(i, i, i, false, true, i);
    }

    return animations;
};

export default getSelectionSortAnimations;
