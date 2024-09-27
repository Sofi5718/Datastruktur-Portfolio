export default class Grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
    }

    set(row, col, value) {
        this.grid[row][col] = value;
    }

    get(row, col) {
        return this.grid[row][col];
    }

    indexFor(row, col) {
        return row * this.cols + col;
    }
    rowColFor(index) {
        const row = Math.floor(index / this.cols);
        const col = index % this.cols;
        return { row, col };
    }
    neighbours(row, col) {
        const neighbours = [];
        if (row > 0) {
            neighbours.push({ row: row - 1, col }); //kig op
        }
        if (row < this.rows - 1) {
            neighbours.push({ row: row + 1, col }); // kig ned
        }
        if (col > 0) {
            neighbours.push({ row, col: col - 1 }); // kig venstre
        }
        if (col < this.cols - 1) {
            neighbours.push({ row, col: col + 1 }); // kig højre
        }
        return neighbours;
    }
    neighboursValues(row, col) {
        return this.neighbours(row, col).map(({ row, col }) => this.get(row, col));
    }
    nextInRow(row, col) {
        if (col < this.cols - 1) {
            return { row, col: col + 1 };
        }
        return undefined;
    }

    nextInCol(row, col) {
        if (row < this.rows - 1) {
            return { row: row + 1, col };
        }
        return undefined;
    }
    north(row, col) {
        if (row > 0) {
            return { row: row - 1, col };
        }
        return undefined;
    }
    south(row, col) {
        if (row < this.rows - 1) {
            return { row: row + 1, col };
        }
        return undefined;
    }
    west(row, col) {
        if (col > 0) {
            return { row, col: col - 1 };
        }
        return undefined;
    }
    east(row, col) {
        if (col < this.cols - 1) {
            return { row, col: col + 1 };
        }
        return undefined;
    }

    rows() {
        return this.rows;
    }
    cols() {
        return this.cols;
    }
    size() {
        return this.rows * this.cols;
    }
    fill(value) {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.set(row, col, value);
            }
        }
    }
}
