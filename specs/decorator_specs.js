const assert = require('assert');
const Room = require('../room.js');
const PaintCan = require('../paint_can.js');
const Decorator = require('../decorator.js');

describe('Room', function () {
    let room1;
    beforeEach(function (){
        room1 = new Room(35);
    });

    it('should have an area', function () {
        const actual = room1.area;
        assert.strictEqual(actual, 35);
    });

    it('should start unpainted', function () {
        const actual = room1.painted;
        assert.strictEqual(actual, false);
    });

    it('should be able to be painted', function () {
        room1.paintRoom()
        const actual = room1.painted;
        assert.strictEqual(actual, true);
    });
})

describe('PaintCan', function () {
    let red;
    beforeEach(function () {
        red = new PaintCan(5);
    });

    it('should have a number of liters', function () {
        const actual = red.numOfLiters;
        assert.strictEqual(actual, 5);
    });

    it('should check if its empty', function () {
        const actual = red.checkIfEmpty();
        assert.strictEqual(actual, false);
    });

    it('should be able to empty itself', function () {
        red.emptyCan()
        const actual = red.checkIfEmpty();
        assert.strictEqual(actual, true);
    });
})

describe('Decorator', function () {
    let decorator1
    let red;
    let blue;
    let room1;
    beforeEach(function () {
        decorator1 = new Decorator();
        red = new PaintCan(5);
        blue = new PaintCan(2);
        room1 = new Room(7);
    });

    it('should start with empty stock', function () {
        const actual = decorator1.stock
        assert.deepStrictEqual(actual, [])
    });

    it('should be able to add a can of paint', function () {
        decorator1.addPaintCan(red);
        const actual = decorator1.stock
        assert.deepStrictEqual(actual, [red])
    });

    it('should be able to calculate total liters of paint', function () {
        decorator1.addPaintCan(red);
        decorator1.addPaintCan(blue);
        const actual = decorator1.calculateTotalPaint();
        assert.strictEqual(actual, 7);
    });

    it('should be able to check if enough stock to paint room', function () {
        decorator1.addPaintCan(red);
        decorator1.addPaintCan(blue);
        const actual = decorator1.checkIfCanPaintRoom(room1);
        assert.strictEqual(actual, true);
    })

    it('should be able to paint room', function () {
        decorator1.addPaintCan(red);
        decorator1.addPaintCan(blue);
        
    })
})
