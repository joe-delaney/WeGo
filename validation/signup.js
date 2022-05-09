const Validator = require('validator');
const { dateToAge } = require('../models/User');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';
    data.fname = validText(data.fname) ? data.fname : '';
    data.lname = validText(data.lname) ? data.lname : '';

    if (!Validator.isLength(data.fname, { min: 2, max: 30 })) {
        errors.fname = 'First name must be between 2 and 30 characters';
    }

    if(Validator.isEmpty(data.age)) {
        errors.age = "Age field is required";
    }

    if(dateToAge(data.age) < 18) {
        errors.age = "You must be at least 18 years old to use WeGo"
    }

    if (Validator.isEmpty(data.fname)) {
        errors.fname = 'First name field is required';
    }

    if (!Validator.isLength(data.lname, { min: 2, max: 30 })) {
        errors.lname = 'Last name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.lname)) {
        errors.lname = 'Last name field is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password field is required';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};