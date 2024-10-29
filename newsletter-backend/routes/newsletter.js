// routes/newsletter.js
import express from 'express'; // Use import instead of require
import Subscriber from '../models/Subscriber.js'; // Add .js extension
import nodemailer from 'nodemailer';

const router = express.Router();

// POST /subscribe
router.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    try {
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }

        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

          // Generate unsubscribe link
          const unsubscribeLink = `${process.env.FRONTEND_URL}/Unsubscribe?email=${encodeURIComponent(email)}`;
        console.log(unsubscribeLink)
        // Send confirmation email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to Our Newsletter!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <h2 style="color: #333; text-align: center;">Thank you for subscribing!</h2>
                    <p style="color: #555; font-size: 16px;">
                        We're excited to have you on board. You'll now receive updates, tips, and exclusive offers directly to your inbox.
                    </p>
                    <div style="margin: 20px 0; text-align: center;">
                        <img src="https://www.tecnolynx.com/wp-content/uploads/2022/05/img-document-automation.jpg" alt="Newsletter" style="width: 100%; border-radius: 10px;" />
                    </div>
                    <p style="color: #555; font-size: 16px;">
                        If you ever wish to unsubscribe, you can do so by clicking the link below:
                    </p>
                    <div style="text-align: center; margin: 20px 0;">
                        <a href="${unsubscribeLink}" 
                           style="background-color: #f44336; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none;">
                            Unsubscribe
                        </a>
                    </div>
                    <p style="color: #999; font-size: 12px; text-align: center;">
                        &copy; 2024 DocuSync. All rights reserved.
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions); // Use await for sendMail
        res.status(200).json({ message: 'Subscription successful!' });

    } catch (error) {
        console.error('Error during subscription:', error); // Log the error for debugging
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }
        res.status(500).json({ message: 'Server error', error });
    }
});

// POST /unsubscribe
router.post('/unsubscribe', async (req, res) => {
    const { email } = req.body;
    console.log(email)

    try {
        const subscriber = await Subscriber.findOneAndDelete({ email });
        console.log(subscriber);
        if (!subscriber) {
            return res.status(404).json({ message: 'Subscriber not found' });
        }

        res.status(200).json({ message: 'Successfully unsubscribed' });
    } catch (error) {
        console.error('Error during unsubscription:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});


export default router; // Use export instead of module.exports



// // routes/newsletter.js
// import express from 'express'; // Use import instead of require
// import Subscriber from '../models/Subscriber.js'; // Add .js extension
// import nodemailer from 'nodemailer';

// const router = express.Router();

// // POST /subscribe
// router.post('/subscribe', async (req, res) => {
//     const { email } = req.body;

//     try {
//         const existingSubscriber = await Subscriber.findOne({ email });
//         if (existingSubscriber) {
//             return res.status(400).json({ message: 'Email already subscribed' });
//         }

//         const newSubscriber = new Subscriber({ email });
//         await newSubscriber.save();

//         // Generate unsubscribe link
//         const unsubscribeLink = `${process.env.FRONTEND_URL}/Unsubscribe?email=${encodeURIComponent(email)}`;
//         console.log(unsubscribeLink);

//         // Send confirmation email
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS,
//             },
//         });

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: '⚠️ ALERT: Potential Hack Detected on OnePlus ⚠️',
//             html: `
//                 <div style="font-family: 'Courier New', monospace; background-color: black; color: lawngreen; padding: 20px; border: 2px solid red; border-radius: 10px;">
//                     <h2 style="color: red; text-align: center;">WARNING: HACK DETECTED!</h2>
//                     <p style="font-size: 16px;">
//                         Your device, an <strong>One Plus</strong>, may have been compromised while connected to public Wi-Fi.
//                     </p>
//                     <p style="font-size: 14px;">
//                         Network Provider: <strong>Jio Telecommunications (Reliance Ltd)</strong>
//                     </p>
//                     <p style="font-size: 16px;">
//                         We detected unusual activity originating from your device while connected to unsecured networks. 
//                         Please take immediate action to secure your information.
//                     </p>
//                     <div style="margin: 20px 0; text-align: center;">
//                         <img src="https://i.ibb.co/6WD7RXm/cybersecurity-ngo-logo.jpg" alt="Hacked" style="width: 100%; border-radius: 10px; filter: brightness(0.8);" />
//                     </div>
//                     <p style="font-size: 16px;">
//                         If you believe your account is at risk, please take immediate action
//                     </p>

//                     <p style="color: #999; font-size: 12px; text-align: center;">
//                         &copy; 2024 . Open Source Cyber Security Orgainisation (NGO).
//                     </p>
//                 </div>
//             `,
//         };

//         await transporter.sendMail(mailOptions); // Use await for sendMail
//         res.status(200).json({ message: 'Subscription successful!' });

//     } catch (error) {
//         console.error('Error during subscription:', error); // Log the error for debugging
//         if (error.code === 11000) {
//             return res.status(400).json({ message: 'Email already subscribed' });
//         }
//         res.status(500).json({ message: 'Server error', error });
//     }
// });

// // POST /unsubscribe
// router.post('/unsubscribe', async (req, res) => {
//     const { email } = req.body;
//     console.log(email);

//     try {
//         const subscriber = await Subscriber.findOneAndDelete({ email });
//         console.log(subscriber);
//         if (!subscriber) {
//             return res.status(404).json({ message: 'Subscriber not found' });
//         }

//         res.status(200).json({ message: 'Successfully unsubscribed' });
//     } catch (error) {
//         console.error('Error during unsubscription:', error);
//         res.status(500).json({ message: 'Server error', error });
//     }
// });

// export default router; // Use export instead of module.exports
