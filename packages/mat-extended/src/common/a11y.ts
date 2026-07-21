export function createKeyboardGridNavigation(
  columns: number,
  rows: number,
): (key: string, currentIndex: number) => number {
  return (key: string, currentIndex: number): number => {
    switch (key) {
      case 'ArrowRight':
        return Math.min(currentIndex + 1, columns * rows - 1);
      case 'ArrowLeft':
        return Math.max(currentIndex - 1, 0);
      case 'ArrowDown':
        return Math.min(currentIndex + columns, columns * rows - 1);
      case 'ArrowUp':
        return Math.max(currentIndex - columns, 0);
      case 'Home':
        return 0;
      case 'End':
        return columns * rows - 1;
      default:
        return currentIndex;
    }
  };
}
