import { calcularDesconto } from '../src/calculadoraVoucher.js';

describe('VoucherCalculator', () => {
  test('deve aplicar 10% para o voucher NATAL10', () => {
    expect(calcularDesconto('NATAL10', 100)).toBe(10);
  });
  test('deve aplicar 10% para o voucher DEZ', () => {
    expect(calcularDesconto('DEZ', 200)).toBe(20);
  });
  test('deve aplicar 30% para o voucher TRINTA', () => {
    expect(calcularDesconto('TRINTA', 100)).toBe(30);
  });
  test('deve retornar 0 para voucher inválido', () => {
    expect(calcularDesconto('INVALIDO', 100)).toBe(0);
  });
});

