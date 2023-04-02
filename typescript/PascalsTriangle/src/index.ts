export const firstRow = [1];
export const secondRow = [1, 1];

export type Triangle = number[][];

export function generateTriangle(rowCount: number): Triangle {
    const triangle: Triangle = [];

    if (rowCount >= 1) triangle.push(firstRow);
    if (rowCount >= 2) triangle.push(secondRow);

    if (rowCount >= 3) triangle.push([1, triangle[1][0] + triangle[1][1], 1]);

    if (rowCount === 4) {
        const previousRow = triangle[2];
        triangle.push(createNextRow(previousRow));
    }

    return triangle;
}
export function createNextRow(previousRow: number[]) {
    const row = [1];
    for (let i = 1; i < previousRow.length; i++) {
        row.push(previousRow[i - 1] + previousRow[i]);
    }
    row.push(1);
    return row;
}
