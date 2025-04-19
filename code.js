function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    let stack = [[0, array.length - 1]];

    while (stack.length > 0) {
        let [left, right] = stack.pop();
        if (left < right) {
            let pivotIndex = partition(array, left, right);

            if (left < pivotIndex - 1) {
                stack.push([left, pivotIndex - 1]);
            }

            if (pivotIndex + 1 < right) {
                stack.push([pivotIndex + 1, right]);
            }
        }
    }

    return array;
}

function partition(array, left, right) {
    let pivot = array[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[right]] = [array[right], array[i + 1]];
    
    return i + 1;
}
