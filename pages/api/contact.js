import Contact from '../../models/Contact';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
        return res.status(422).send("Contact form missing one or more fields");
    }
    const contact = await new Contact({ name, email, phone, message }).save();
    res.status(200).json({ message: "Thank you for contacting us."})
}