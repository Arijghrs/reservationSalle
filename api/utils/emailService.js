import nodemailer from 'nodemailer';

// Configuration du transporteur (SMTP)
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'manelaskry@gmail.com',
        pass: 'oocy legq xzha vwah'
    }
});

// Fonction pour envoyer un e-mail de confirmation de réservation
export const sendReservationConfirmationEmail = (recipient, reservationDetails) => {
    const mailOptions = {
        from: 'manelaskry@gmail.com',
        to: recipient,
        subject: 'Confirmation de réservation',
        html: `
            <p>Votre réservation a été confirmée. Détails de la réservation :</p>
            <p>Date : ${reservationDetails.date}</p>
            <p>Salle : ${reservationDetails.room}</p>
            <a href="https://yourdomain.com/confirm-reservation/">Confirmer la réservation</a>

        `
    };

    // Envoyer l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
        } else {
            console.log('E-mail de confirmation de réservation envoyé :', info.response);
        }
    });
};