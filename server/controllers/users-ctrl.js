
const bcryptjs = require("bcryptjs");
const usersModel = require("../models/users-model");
const jwt = require("jsonwebtoken");
const validateLogin = require('../validations/login')
const key = process.env.SECRET_KEY;

const getUsers = (req, res) => {
  usersModel.find().then(data=>res.json({data})).catch(err=>console.log(err))
};

const register = async (req, res) => {
  console.log("hello");
  bcryptjs.genSalt().then((salt) => {
    bcryptjs
      .hash(req.body.password, salt)
      .then((hashPassword) => {
        req.body.password = hashPassword;
        usersModel
          .insertMany(req.body)
          .then((result) => res.status(200).json({ message: "success",result }))
          .catch((error) => res.status(400).json({ success: false, error }));
      })
      .catch((err) => {
        console.log(err);
      });
  });
};


   const login = async (req, res) => {
    const { isValid, errors } = validateLogin(req.body)
    if(!isValid) return res.status(400).json(errors)
    const email = req.body.email;
    const password = req.body.password;
    await usersModel.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ emailNotFound: "Email not found" });
            }
            bcryptjs.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    };
                    jwt.sign(payload, key, { expiresIn: "1h" }, (err, token) => {
                        if(err) return res.status(400).json(err)
                        res.json({ success: true, token: `Bearer ${token}`});
                        // res.setHeader("authorization", `Bearer ${token}`)
                    });
                }
                else {
                    return res.status(400).json({ passwordIncorrect: "Password incorrect" });
                }
            });
        });
}

module.exports = { getUsers, register, login };