for (let i = 0; i < 4; i++) {
    let pattern = '';
    for (let j = 0; j < 4; j++) {
        if (i === 0 || i === 4 - 1 || j === 0 || j === 4 - 1) {
            pattern += '*';
        } else {
            pattern += ' ';
        }
    }
    console.log(pattern);
}