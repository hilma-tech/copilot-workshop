function magic(s) {
    const a = 'aeiouAEIOU';
    const yyy = s.split('');
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (!a.includes(yyy[i])) {
            i++;
            continue;
        }
        if (!a.includes(yyy[j])) {
            j--;
            continue;
        }
        [yyy[i], yyy[j]] = [yyy[j], yyy[i]];
        i++;
        j--;
    }
    return yyy.join('');
}
