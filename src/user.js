/**
 * Represents a user object.
 *
 * @class
 */
class User {
  /**
   * Creates an instance of the User class.
   *
   * @constructor
   * @param {string} name - The name of the user.
   * @param {string} email - The email address of the user.
   * @param {number} edad - The age of the user.
   */
  constructor(name, email, edad)  {
    this.Name = name;
    this.email = email;
    this.age = edad;
    this.loggedIn = false;
  }

  /**
   * Logs in the user.
   */
  login() {
    this.loggedIn = true;
  }

  /*
   * Logs out the user.
   */
  logout() {
    this.loggedIn = false;
  }

  /**
   * Returns the current login status of the user.
   *
   * @return {boolean} The login status of the user.
   */

  isLoggedIn() {
    return this.loggedIn;
  }

  /**
   * Checks if the user is eligible to vote based on their age.
   *
   * @return {boolean} True if the user is eligible to vote, false otherwise.
   */
  canVote() {
    return this.age >= 18
  }

  /**
   * Returns the message to be sent to another user.
   *
   * @param {User} recipient - The recipient of the message.
   * @param {string} message - The content of the message.
   * @throws {Error} Throws an error if the recipient is not logged in.
   * @return {string} The message to be sent to another user.
   */
  sendmessage(recipient, message) 
  {
    if (!recipient.isLoggedIn()) {
      throw new Error(`${recipient.name} is not logged in.`) ;
    }

    // Send the message to the recipient
    return `Message sent to ${recipient.name}: ${message}`;
  }
}

export default User;