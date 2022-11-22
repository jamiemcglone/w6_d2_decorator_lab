const Decorator = function () {
    this.stock = [];
}

Decorator.prototype.addPaintCan = function (paintCan) {
    this.stock.push(paintCan);
}

Decorator.prototype.calculateTotalPaint = function () {
    let total_paint = 0;
    for (can of this.stock) {
        total_paint += can.numOfLiters;
    }
    return total_paint
}

Decorator.prototype.checkIfCanPaintRoom = function (room) {
    total_paint = this.calculateTotalPaint();
    return total_paint >= room.area;
}

module.exports = Decorator