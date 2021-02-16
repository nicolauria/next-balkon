import Contact from '../../models/Contact';
import connectDb from '../../utils/connectDb';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
const mailer = require('../../utils/mailer')

connectDb();

export default async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(422).json({ message: "Contact form missing one or more fields" });
    } else if (!isLength(name, { min: 3, max: 20 })) {
        return res.status(422).json({ message: "Name must be between 3 and 20 characters" });
    } else if (!isEmail(email)) {
        return res.status(422).json({ message: "The email is not valid" });
    } else if (!isLength(phone, { min: 10, max: 20 })) {
        return res.status(422).json({ message: "Phone must at least 10 characters" });
    } else if (!isLength(message, { min: 5 })) {
        return res.status(422).json({ message: "Message must be at least 5 characters" });
    }

    // send some mail
    mailer.sendMail({
        from: 'admin@ohm.solutions',
        to: 'admin@ohm.solutions',
        subject: 'Message',
        text: 'I hope this message gets sent!'
    }, (err, info) => {
        console.log(info.envelope);
        console.log(info.messageId);
    });

    const contact = await new Contact({ name, email, phone, message }).save();
    res.status(200).json({ message: "Thank you for contacting us." })
}