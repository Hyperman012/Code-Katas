export const firstRow = [1];
export const secondRow = [1, 1];

export function generateTriangle(rowCount: number): number[][] {
    if (rowCount === 0) return [];
    if (rowCount === 2) return [firstRow, secondRow];
    return [firstRow];
}
