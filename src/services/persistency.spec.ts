// import { Persistency } from './persistency';

// describe('Persistency', () => {
//   afterEach(() => jest.clearAllMocks());

//   it('should return undefined', () => {
//     // System under test
//     const sut = new Persistency();
//     expect(sut.saveOrder()).toBeUndefined();
//   });

//   it('should call console.log once', () => {
//     const sut = new Persistency();
//     const consoleSpy = jest.spyOn(console, 'log');
//     sut.saveOrder();
//     expect(consoleSpy).toHaveBeenCalledTimes(1);
//   });

//   it('should call console.log with "Pedido salvo com sucesso..."', () => {
//     const sut = new Persistency();
//     const consoleSpy = jest.spyOn(console, 'log');
//     sut.saveOrder();
//     expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
//   });
// });

// describe('TESTANDO ALGUMA COISA', () => {
//   it('Isso deveria retornar 1', () => {
//     const number = 1;
//     expect(number).toBe(1); //espero que a variável number seja 1
//     //expect(number).not.toBe(1); //espero que a variável number nao seja 1
//   });
// });

// describe('TESTANDO OUTRA COISA', () => {
//   test('Isoo deveria retornar Tiago', () => {
//     const nome = 'Tiago';
//     expect(nome).toBe('Tiago');
//   });
// });
