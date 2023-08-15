export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let hi = haystack.length;

    if (low === hi) {
        if (haystack[low] === needle) {
            return true;
        }
        return false;
    }
    while (low < hi) {
        let m = Math.floor(low + (hi - low) / 2);
        const v = haystack[m];
        if (v === needle) {
            return true;
        } else if (v < needle) {
            low = m + 1;
        } else {
            hi = m;
        }
    }
    return false;
}
