export const firstRow = [1];
export const secondRow = [1, 1];

export type Triangle = number[][];

export function generateTriangle(rowCount: number): Triangle {
    const triangle: Triangle = [];

    if (rowCount >= 1) triangle.push(firstRow);
    if (rowCount >= 2) triangle.push(secondRow);

    if (rowCount >= 3) triangle.push(createNextRow(triangle[1]));

    if (rowCount === 4) {
        triangle.push(createNextRow(triangle[2]));
    }

    return triangle;
}
export function createNextRow(previousRow: number[]) {
    const row = [1];
    for (let i = 0; i < previousRow.length - 1; i++) {
        row.push(previousRow[i] + previousRow[i + 1]);
    }
    row.push(1);
    return row;
}
