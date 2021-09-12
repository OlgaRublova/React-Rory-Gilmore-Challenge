const User = require("../models/User");
const jwt = require("jsonwebtoken");


const signToken = id => {
    //  npm install jsonwebtoken
    return jwt.sign({id}, process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN});
}

const createSendToken = (user, statusCode, res) => {
    //creating jwt
    const token = signToken(user._id)

    //cookie definition
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIES_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true  //  cookie can't be modified by browser
    }

    res.cookie('jwt', token, cookieOptions);

    //remove the password from the output
    user.password = undefined;

    //sending a token and a new user to a client
    res.status(statusCode).json({
        status: 'success',
        token,
        user

    })
}

//  register
exports.register = async (req, res, next) => {

    //  creating a new user using created "User" model
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    })

    try {
        //  send our user to our db
        const user = await newUser.save();
        res.status(201).json(user)  // "201" - successfully created
    } catch (err) {
        res.status(500).json(err)
    }
}


//  login
exports.login = async (req, res) => {
    const {email, password} = req.body;

    try {
        // 1) Check if email and password exist
        if (!email || !password) {
            //'401' means 'unathorised'
            res.status(401).json("Wrong password or username");
        }

        // 2) Check if user exists && password is correct
        const user = await User.findOne({email})
            //  include "password" into findOne
            .select('+password');

        const correct = await user.correctPassword(password, user.password);

        if (!user || !correct) {
            res.status(401).json('Incorrect email or password');
        }

        // 3) If everything ok, send token to client
        createSendToken(user, 200, res);


    } catch (err) {
        res.status(500).json(err)
    }
}

