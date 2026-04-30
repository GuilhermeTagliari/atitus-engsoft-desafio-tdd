import { validadorUsuario, validarEmail, validarSenha, validarIdade } from '../src/validador.js';

describe('EmailValidator', () => {
  test('deve aceitar email com @', () => {
    expect(validarEmail('test@atitus.edu.br')).toBe(true);
  });
  test('deve rejeitar email sem @', () => {
    expect(validarEmail('invalido.com')).toBe(false);
  });
});

describe('PasswordValidator', () => {
  test('deve aceitar senha com 8 ou mais caracteres', () => {
    expect(validarSenha('password123')).toBe(true);
  });
  test('deve rejeitar senha com menos de 8 caracteres', () => {
    expect(validarSenha('123')).toBe(false);
  });
});

describe('IdadeValidator', () => {
  test('deve aceitar idade maior ou igual a 18', () => {
    expect(validarIdade(18)).toBe(true);
  });
  test('deve rejeitar idade menor que 18', () => {
    expect(validarIdade(17)).toBe(false);
  });
});

describe('validadorUsuario', () => {
  test('deve validar um usuário correto', () => {
    const user = { email: 'test@atitus.edu.br', password: 'password123', age: 20 };
    expect(validadorUsuario(user)).toBe(true);
  });
  test('deve rejeitar usuário com email inválido', () => {
    expect(validadorUsuario({ email: 'invalido', password: 'password123', age: 20 })).toBe(false);
  });
  test('deve rejeitar usuário com senha curta', () => {
    expect(validadorUsuario({ email: 'a@b.com', password: '123', age: 20 })).toBe(false);
  });
  test('deve rejeitar usuário menor de idade', () => {
    expect(validadorUsuario({ email: 'a@b.com', password: 'password123', age: 17 })).toBe(false);
  });
});

