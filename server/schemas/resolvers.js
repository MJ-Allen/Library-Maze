const {
  AuthenticationError
} = require("apollo-server-express");
const {
  signToken
} = require("../utils/auth");
const {
  User
} = require("../models");
// followed along with class video from Thursday to get started
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({
          _id: context.user._id
        });
        return userData;
      }
      throw new AuthenticationError("Please log in!");
    }
  },
  Mutation: {
    addUser: async (parent, {
      username,
      email,
      password
    }) => {
      const user = await User.create({
        username,
        email,
        password
      });
      const token = signToken(user);
      return {
        token,
        user
      };
    },
    login: async (parent, {
      email,
      password
    }) => {
      const user = await User.findOne({
        email
      });
      if (!user) {
        throw new AuthenticationError("Email not found");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Enter Correct Credentials");
      }
      const token = signToken(user);
      return {
        token,
        user
      };
    },

    saveBook: async (parent, {
      bookData
    }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate({
          _id: context.user._id
        }, {
          $addToSet: {
            savedBooks: bookData
          }
        }, {
          new: true
        },
        );

        return updatedUser;
      }
      throw new AuthenticationError("Please Login!");
    },
    // remove a book from `savedBooks`
    removeBook: async (parent, {
      bookId
    }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate({
          _id: context.user._id
        }, {
          $pull: {
            savedBooks: {
              bookId: bookId
            }
          }
        }, {
          new: true
        }, );

        return updatedUser;

      }
      throw new AuthenticationError("Book not deleted");
    }

  },
};


module.exports = resolvers;