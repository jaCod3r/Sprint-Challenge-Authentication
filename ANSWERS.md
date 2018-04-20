<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware: connects two sides of an application and passes data between them.

Sessions are used to keep users logged in, that information is stored in cookies.

Bcrypt: is a password hashing function which is one way.

JWT: JSON Web Tokens used for verifying logged in user.

2.  What does bcrypt do in order to prevent attacks?

It uses hashing and salting, by using iterations it makes it harder for the hacker to dcrypt the password.


3.  What are the three parts of the JSON Web Token?

a. Header
b. Payload
c. Signature 
