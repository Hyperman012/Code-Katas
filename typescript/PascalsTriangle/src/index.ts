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
function createNextRow(previousRow: number[]) {
    return [
        1,
        previousRow[0] + previousRow[1],
        previousRow[1] + previousRow[2],
        1,
    ];
}
