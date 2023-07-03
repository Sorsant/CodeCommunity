// const express = require('express');
// const passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy;

// const app = express();

// // Configura las credenciales de Facebook
// const FACEBOOK_APP_ID = '820451609609693';
// const FACEBOOK_APP_SECRET = '1d726eda0853aeb317d743d219e84c39';

// // Configura la estrategia de autenticación de Passport
// passport.use(new FacebookStrategy({
//     clientID: FACEBOOK_APP_ID,
//     clientSecret: FACEBOOK_APP_SECRET,
//     callbackURL: '/auth/facebook/callback',
//     profileFields: ['id', 'displayName', 'email'] // Campos adicionales del perfil que deseas obtener
// }, (accessToken, refreshToken, profile, done) => {
//     // Aquí puedes realizar acciones con los datos del usuario autenticado
//     // Por ejemplo, guardar el perfil en la base de datos o crear una sesión de usuario
//     return done(null, profile);
// }));

// // Inicializa Passport y establece la sesión
// app.use(passport.initialize());
// app.use(passport.session());

// // Define la ruta de inicio de sesión con Facebook
// app.get('/auth/facebook', passport.authenticate('facebook'));

// // Define la ruta de retorno de llamada de autenticación de Facebook
// app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
//     // Aquí puedes realizar acciones adicionales después de la autenticación exitosa
//     // Por ejemplo, obtener el usuario autenticado y redirigir a la página de inicio

//     const user = req.user; // Accede a los datos del perfil del usuario autenticado
//     // Realiza tus acciones adicionales con el usuario autenticado (por ejemplo, guardar en la base de datos)

//     res.redirect('/'); // Redirige a la página de inicio
// });

// // Ruta protegida para mostrar los datos del usuario autenticado
// app.get('/', (req, res) => {
//     // Verifica si el usuario está autenticado
//     if (req.isAuthenticated()) {
//         // Accede a los datos del perfil del usuario autenticado
//         const user = req.user;
//         res.send(`Hola, ${user.displayName}!`);
//     } else {
//         res.redirect('/login'); // Redirige a la página de inicio de sesión si el usuario no está autenticado
//     }
// });

// // Ruta de inicio de sesión normal
// app.post('/login', (req, res) => {
//     // Aquí puedes manejar la lógica de inicio de sesión normal de tu aplicación
//     // por ejemplo, verificar las credenciales del usuario y crear una sesión

//     // Si el inicio de sesión es exitoso, redirige a la página de inicio
//     res.redirect('/');
// });

// // Inicia el servidor
// const port = 5000;
// app.listen(port, () => {
//     console.log(`Servidor en funcionamiento en https://localhost:${port}`);
// });
