export function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  } else if (value < 1) {
    return `$${value.toFixed(4)}`;
  } else {
    return `$${value.toLocaleString()}`;
  }
}

export function formatBalance(value: number): string {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(2) + "M";
  } else if (value >= 1000) {
    return (value / 1000).toFixed(0) + "K";
  } else {
    return value.toLocaleString();
  }
}