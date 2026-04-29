# 🟡 Nível 2: DIP (Mocks)

O `ServicoNotificacao` depende de um gateway de e-mail. Aplique injeção de dependência para testá-lo isoladamente.

### Tarefas:
- [ ] Injetar `GatewayEmail` no construtor do serviço.
- [ ] Usar `jest.fn()` para criar um Mock do gateway no teste.
- [ ] Validar se o gateway é chamado com os dados corretos.

### Como rodar:
```bash
npm install && npm test
```
