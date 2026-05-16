// const {
//   createContactMessage: insertContactMessage,
//   listContactMessages: findContactMessages,
//   updateMailStatus,
// } = require('../models/ContactMessage');
// const { sendContactMail } = require('../services/mailService');

// async function createContactMessage(req, res, next) {
//   let contactMessage;

//   try {
//     contactMessage = await insertContactMessage(req.body);

//     try {
//       await sendContactMail(contactMessage);
//       contactMessage = await updateMailStatus(contactMessage.id, 'sent');
//     } catch (mailError) {
//       contactMessage = await updateMailStatus(contactMessage.id, 'failed', mailError.message);

//       return res.status(202).json({
//         message: 'Contact message saved, but email could not be sent',
//         data: contactMessage,
//       });
//     }

//     res.status(201).json({
//       message: 'Contact message saved and email sent',
//       data: contactMessage,
//     });
//   } catch (error) {
//     next(error);
//   }
// }

// async function listContactMessages(req, res, next) {
//   try {
//     const messages = await findContactMessages();
//     res.json({ data: messages });
//   } catch (error) {
//     next(error);
//   }
// }

// module.exports = { createContactMessage, listContactMessages };



// 15 may


const { sendContactMail } = require('../services/mailService');

async function createContactMessage(req, res, next) {
  try {
    await sendContactMail(req.body);

    res.status(200).json({
      message: 'Your message has been sent successfully!',
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { createContactMessage };