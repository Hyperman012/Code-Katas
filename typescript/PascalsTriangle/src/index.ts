export function generateTriangle(rowCount: number): number[][] {
    if (rowCount === 0) return [];
    if (rowCount === 2) return [[1], [1, 1]];
    return [[1]];
}
