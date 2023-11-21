
import User from "./User.js"

var aUser = new User('Ada', "ada@internet.uy", 20)

test('User over 18 can vote', () => {
  expect(aUser.canVote()).toBeTruthy();
});
