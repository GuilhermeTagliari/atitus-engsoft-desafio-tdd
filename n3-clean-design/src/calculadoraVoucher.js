const DESCONTOS = {
  DEZ: 0.10,
  NATAL10: 0.10,
  TRINTA: 0.30,
};

export function calcularDesconto(codigo, valor) {
  const taxa = DESCONTOS[codigo] ?? 0;
  return valor * taxa;
}

