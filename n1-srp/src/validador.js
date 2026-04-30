export function validarEmail(email) {
  return email.includes('@');
}

export function validarSenha(password) {
  return password.length >= 8;
}

export function validarIdade(age) {
  return age >= 18;
}

export function validadorUsuario(usuario) {
  return validarEmail(usuario.email) &&
    validarSenha(usuario.password) &&
    validarIdade(usuario.age);
}
