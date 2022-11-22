const PaintCan = function (numOfLiters) {
    this.numOfLiters = numOfLiters;
}

PaintCan.prototype.checkIfEmpty = function () {
    return this.numOfLiters <= 0;
}

PaintCan.prototype.emptyCan = function () {
    this.numOfLiters = 0
}


module.exports = PaintCan;