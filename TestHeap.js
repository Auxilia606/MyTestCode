function Heap() {
    this.stack = ['ythong'];
    this.direction = 'upper'; // default
    this.length = 0;

    this.setDirction = function (value) {
        if (this.length !== 0) {
            console.error('Stack should be empty array!');
            return;
        }
        if (value === 'upper' || value === 'lower') {
            this.direction = value;
        } else {
            console.error('value list: upper, lower');
        }
    };
    this.insert = function (value) {
        let _value = typeof value === 'number' ? value : Number(value);
        if (typeof _value === 'number') {
            this.stack.push(value);
            this.length += 1;

            let index = this.length;
            if (this.direction === 'lower') {
                while (
                    index !== 1 &&
                    this.stack[Math.floor(index / 2)] > value
                ) {
                    this.stack[index] = this.stack[Math.floor(index / 2)];
                    index = Math.floor(index / 2);
                }
            } else {
                while (
                    index !== 1 &&
                    this.stack[Math.floor(index / 2)] < value
                ) {
                    this.stack[index] = this.stack[Math.floor(index / 2)];
                    index = Math.floor(index / 2);
                }
            }
            this.stack[index] = value;
        } else {
            console.error('Value is not a number!');
        }
    };
    this.pop = function () {
        if (this.length === 0) {
            return;
        }
        if (this.length === 1) {
            this.stack = [];
            this.length = 0;
            return;
        }
        [this.stack[1], this.stack[this.length]] = [
            this.stack[this.length],
            this.stack[1],
        ];
        this.stack.length = this.length;
        this.length -= 1;

        let index = 1;
        if (this.direction === 'lower') {
            while (index < this.length) {
                let next = index * 2;
                if (this.stack[index] > this.stack[next]) {
                    [this.stack[index], this.stack[next]] = [
                        this.stack[next],
                        this.stack[index],
                    ];
                } else if (this.stack[index] > this.stack[next + 1]) {
                    next += 1;
                    [this.stack[index], this.stack[next]] = [
                        this.stack[next],
                        this.stack[index],
                    ];
                } else {
                    break;
                }
                index = next;
            }
        } else {
            while (index < this.length) {
                let next = index * 2;
                if (this.stack[index] < this.stack[next]) {
                    [this.stack[index], this.stack[next]] = [
                        this.stack[next],
                        this.stack[index],
                    ];
                } else if (this.stack[index] < this.stack[next + 1]) {
                    next += 1;
                    [this.stack[index], this.stack[next]] = [
                        this.stack[next],
                        this.stack[index],
                    ];
                } else {
                    break;
                }
                index = next;
            }
        }
    };
}
export default Heap;
