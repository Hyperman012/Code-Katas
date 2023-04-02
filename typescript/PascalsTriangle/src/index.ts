export const firstRow = [1];
export const secondRow = [1, 1];

export type Triangle = number[][];

export function generateTriangle(rowCount: number): Triangle {
    const triangle: Triangle = [];

    if (rowCount >= 1) triangle.push(firstRow);

    if (rowCount === 2) triangle.push(secondRow);

    if (rowCount === 3)
        triangle.push(secondRow, [1, secondRow[0] + secondRow[1], 1]);

    return triangle;
}
