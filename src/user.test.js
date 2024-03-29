import User from './User.js';

const aUser = new User('Ada', 'ada@internet.uy', 20);
const youngUser = new User('Young', 'young@internet.uy', 17);

test('Usuario Puede log in', () => {
  aUser.login();
  expect(aUser.isLoggedIn()).toBeTruthy();
});

test('usuario puedo log Out', () => {
  aUser.logout();
  expect(aUser.isLoggedIn()).toBeFalsy();
});

test('User login status is returned correctly', () => {
  expect(aUser.isLoggedIn()).toBeFalsy();
  aUser.login();
  expect(aUser.isLoggedIn()).toBeTruthy();
});

test('UsuarioPuede Votar', () => {
  expect(aUser.canVote()).toBeTruthy();
});

test('Usuario No puede votar', () => {
  expect(youngUser.canVote()).toBeFalsy();
});
test('Usuario Nombre', () => {
  expect(aUser.name).toBe('Ada');
});

test('Usuario Email', () => {
  expect(aUser.email).toBe('ada@internet.uy');
});

test('Usuario Edad', () => {
  expect(aUser.age).toBe(20);
});
test('Usuario no Vota sin no esta Logeado', () => {
  aUser.logout();
  expect(aUser.canVote()).toBeFalsy();
});
