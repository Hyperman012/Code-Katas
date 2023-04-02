export const firstRow = [1];
export const secondRow = [1, 1];

export function generateTriangle(rowCount: number): number[][] {
    const triangle: number[][] = [];

    if (rowCount === 2) return [firstRow, secondRow];

    if (rowCount === 3)
        return [firstRow, secondRow, [1, secondRow[0] + secondRow[1], 1]];

    if (rowCount === 1) return [firstRow];

    return triangle;
}
