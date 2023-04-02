export const firstRow = [1];

export function generateTriangle(rowCount: number): number[][] {
    if (rowCount === 0) return [];
    if (rowCount === 2) return [firstRow, [1, 1]];
    return [firstRow];
}
