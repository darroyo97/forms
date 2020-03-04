const express = require('express');
const router = express.Router();
const body_parser = require('body-parser');
router.use(body_parser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    res.render('index.ejs')
})

router.post('/', (req, res) => {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let phoneNumber = req.body.phoneNumber
    let zipCode = req.body.zipCode
    res.render('index', {
        firstName,
        lastName,
        email,
        phoneNumber,
        zipCode
    })
})




module.exports = router;