const formatData = (value: string): string =>
  Intl.NumberFormat('pt-BR').format(value); // TODO
export default formatData;
