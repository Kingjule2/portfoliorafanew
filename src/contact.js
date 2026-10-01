export const email = 'rafafazli7@gmail.com';

export const composeEmail = (subject) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
