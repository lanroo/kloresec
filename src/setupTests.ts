import "@testing-library/jest-dom";

// Configuração global para testes
beforeAll(() => {
  // Limpa todos os mocks antes de cada teste
  jest.clearAllMocks();
});

// Limpa após cada teste
afterEach(() => {
  jest.clearAllTimers();
});
