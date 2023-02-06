const fs = require('fs');
const valid = require('validator');

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Name: ', (name) => {
    readLine.question('Email Address: ', (email) => {
        if(!valid.isEmail(email)) {
            console.log("ERROR: Invalid Format");
            readLine.close();
        }
        else {
            readLine.question('Phone Number: ', (phone) => {
                if(!valid.isMobilePhone(phone, [id-ID])) {
                    console.log("ERROR: Invalid Format");
                    readLine.close();
                }
                else {
                    console.log(`Name: ${name}\n
                    Email Address: ${email}\n
                    Phone Number: ${phone}`);
                    readLine.close();
                }
            })
        }
    })
});

