const formatCPF = (value) => {
  if (value) {
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  return value;
};

const formatPhone = (value) => {
  if (value.length <= 10) {
    value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  } else {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }
  return value;
};

export { formatCPF, formatPhone };
export default formatCPF;
