export default function bubble_sort(arr: number[]): void {
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
    console.log(arr);
}
