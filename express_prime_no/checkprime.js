exports.checkprime = function (a) {
    var num = parseInt(a);
    for (i = 2; i < num / 2; i++) {
        if (num % i == 0) {
            return true;
        } else { return false; }
    }
}