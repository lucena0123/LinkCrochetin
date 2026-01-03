const COLOR_LABELS: Record<string, string> = {
  verdemilitar: 'verde militar',
  offwhite: 'off-white'
};

const formatColor = (color: string) => COLOR_LABELS[color] ?? color;

const formatColors = (colors: string[]) => colors.map(formatColor).join(', ');

export { formatColor, formatColors };
