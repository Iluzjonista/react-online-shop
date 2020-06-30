export default function formatCurrency(num) {
  return "PLN " + Number(num.toFixed(2)).toLocaleString() + ",00";
}
