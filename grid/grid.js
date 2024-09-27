export default class Grid {
    constructor(rows, cols) {
        const { row: rows, col: columns } = this.parseRowCol(rows, cols);
        this.rows = rows;
        this.cols = columns;
        this.grid = Array.from({ length: rows }, () => Array.from({ length: columns }, () => 0));
    }

    parseRowCol(rowOrObj, col) {
        if (typeof rowOrObj === "object") {
            return rowOrObj;
        }
        return { row: rowOrObj, col };
    }

    set(rowOrObj, colOrValue, value) {
        const { row, col } = this.parseRowCol(rowOrObj, colOrValue);
        const checkVal = value !== undefined ? value : colOrValue;
        this.grid[row][col] = checkVal;
    }

    get(rowOrObj, col) {
        const { row, col: column } = this.parseRowCol(rowOrObj, col);
        return this.grid[row][column];
    }

    indexFor(rowOrObj, col) {
        const { row, col: column } = this.parseRowCol(rowOrObj, col);
        return row * this.cols + column;
    }
    rowColFor(index) {
        const row = Math.floor(index / this.cols);
        const col = index % this.cols;
        return { row, col };
    }
    neighbours(rowOrObj, col) {
        const { row, col: column } = this.parseRowCol(rowOrObj, col);
        const neighbours = [];
        if (row > 0) {
            neighbours.push({ row: row - 1, column }); //kig op
        }
        if (row < this.rows - 1) {
            neighbours.push({ row: row + 1, column }); // kig ned
        }
        if (column > 0) {
            neighbours.push({ row, col: column - 1 }); // kig venstre
        }
        if (column < this.cols - 1) {
            neighbours.push({ row, col: column + 1 }); // kig højre
        }
        return neighbours;
    }
    neighboursValues(rowOrObj, col) {
        const { row, col: column } = this.parseRowCol(rowOrObj, col);
        return this.neighbours(row, column).map(({ row, col }) => this.get(row, col));
    }
    nextInRow(rowOrObj, col) {
        const { row, col: column } = this.parseRowCol(rowOrObj, col);
        if (column < this.cols - 1) {
            return { row, col: column + 1 };
        }
        return undefined;
    }

    nextInCol(rowOrObj, col) {
        const { row, col: column } = this.parseRowCol(rowOrObj, col);
        if (row < this.rows - 1) {
            return { row: row + 1, column };
        }
        return undefined;
    }
    north(rowOrObj, col) {
        const { row, col } = this.parseRowCol(rowOrObj, col);
        if (row > 0) {
            return { row: row - 1, column };
        }
        return undefined;
    }
    south(rowOrObj, col) {
        const { row, col } = this.parseRowCol(rowOrObj, col);
        if (row < this.rows - 1) {
            return { row: row + 1, column };
        }
        return undefined;
    }
    west(rowOrObj, col) {
        const { row, col: column } = this.parseRowCol(rowOrObj, col);
        if (col > 0) {
            return { row, col: column - 1 };
        }
        return undefined;
    }
    east(rowOrObj, col) {
        const { row, col: column } = this.parseRowCol(rowOrObj, col);
        if (col < this.cols - 1) {
            return { row, col: column + 1 };
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
