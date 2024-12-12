const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userSchema");

// Generate Web Token.
const generateToken = (id) => {
  return jwt.sign({ userId: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};

class userController {
  static userRegistation = asyncHandler(async (req, res) => {
    const { userName, password, email } = req.body.data || {};
    if (userName && password && email) {
      if (password?.length < 4) {
        res.status(200).json({
          status: false,
          message: "your password to short.",
        });
      } else {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
          const existingUser = await userModel.findOne({ email: email });
          if (existingUser) {
            res.status(200).json({
              status: false,
              message: "your email already sign in.",
            });
          } else {
            const user = await userModel.create({
              userName,
              password: hashPassword,
              email,
              role: "user",
            });
            res.status(201).json({
              status: true,
              message: "successful registation.",
              data: user,
            });
            return;
          }
        } catch (error) {
          res.status(401).json({
            status: false,
            message: "server error",
          });
        }
      }
    } else {
      res.status(401).json({
        status: false,
        message: "Not Valid User Data.",
      });
    }

    return;
  });

  static userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body.data || {};
    if (email && password) {
      const user = await userModel.findOne({ email });
      if (user) {
        const matchPassword = await bcrypt.compare(password, user.password);
        if (matchPassword) {
          res.status(200).json({
            status: true,
            message: "success",
            data: user,
          });
        } else {
          res.status(400).json({
            status: false,
            message: "Password does't match.",
            data: null,
          });
        }
      } else {
        res.status(401).json({
          status: false,
          message: "Not sign up yet.",
        });
      }
    } else {
      res.status(401).json({
        status: false,
        message: "Not Valid User Data.",
      });
    }
  });

  //   static userLogin = asyncHandler(async (req, res) => {
  //     const { email, password } = req.body.data;

  //     const findUser = await userModel.findOne({ email: email });
  //     if (!findUser) {
  //       res.status(400).json({
  //         status: false,
  //         message: "This user not signed in",
  //         data: null,
  //       });
  //     } else {
  //       const matchPassword = await bcrypt.compare(password, findUser.password);
  //       if (!matchPassword) {
  //         res.status(400).json({
  //           status: false,
  //           message: "Password does't match.",
  //           data: null,
  //         });
  //       } else {
  //         const { _id } = findUser;
  //         // generate token
  //         const token = generateToken(_id);
  //         res.cookie("token", token, {
  //           httpOnly: true,
  //           secure: true,
  //           sameSite: "none",
  //           maxAge: 86400000,
  //         });

  //         res.status(200).json({
  //           status: true,
  //           message: "success",
  //           // data: { ...findUser?._doc, token },
  //           data: findUser,
  //           token,
  //         });
  //       }
  //     }
  //   });
}
module.exports = userController;
