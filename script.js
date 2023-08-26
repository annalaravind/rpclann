// let popupButton = document.getElementById('popupButton');
// let popupContent = document.getElementById('popupContent');
// let popup = document.getElementById('popup');
// let loginBtn = document.getElementById('loginBtn');
// let signupBtn = document.getElementById('signupBtn');
// let loginForm = document.getElementById('loginForm');
// let signupForm = document.getElementById('signupForm');
// let alterSign = document.getElementById('alterSign');
// let back = document.getElementById('back');
// let loginEmail = document.getElementById('loginEmail');
// let loginPassword = document.getElementById('loginPassword');
// let signupName = document.getElementById('signupName');
// let signupEmail = document.getElementById('signupEmail');
// let signupPassword = document.getElementById('signupPassword');
// let signupMobile = document.getElementById('signupMobile');

// popupButton.addEventListener('click', () => {
//     popup.style.display = 'block';
//     loginForm.style.display = 'block';
//     signupForm.style.display = 'none';
// });


// loginBtn.addEventListener('click', () => {
//     loginBtn.style.color = 'red';
//     signupBtn.style.color = 'black';

//     loginBtn.style.borderTop = '1px solid black';
//     loginBtn.style.borderRight = '1px solid black';
//     loginBtn.style.borderBottom = 'none';
//     loginBtn.style.borderLeft = '1px solid black';

//     signupBtn.style.borderTop = 'none';
//     signupBtn.style.borderRight = 'none';
//     signupBtn.style.borderBottom = '1px solid black';
//     signupBtn.style.borderLeft = 'none';

//     loginForm.style.display = 'block';
//     signupForm.style.display = 'none';

//     popupContent.style.height = '400px';
// });

// let toggle1 = document.getElementById('toggle1');
// toggle1.addEventListener('click', () => {
//     if (loginPassword.type === 'password') {
//         loginPassword.type = 'text';
//     } else {
//         loginPassword.type = 'password';
//     }
// });

// let toggle2 = document.getElementById('toggle2');
// toggle2.addEventListener('click', () => {
//     if (signupPassword.type === 'password') {
//         signupPassword.type = 'text';
//     } else {
//         signupPassword.type = 'password';
//     }
// });


// alterSign.addEventListener('click', () => {
//     signupBtn.style.color = 'red';
//     loginBtn.style.color = 'black';

//     signupBtn.style.borderTop = '1px solid black';
//     signupBtn.style.borderRight = '1px solid black';
//     signupBtn.style.borderBottom = 'none';
//     signupBtn.style.borderLeft = '1px solid black';

//     loginBtn.style.borderTop = 'none';
//     loginBtn.style.borderRight = 'none';
//     loginBtn.style.borderBottom = '1px solid black';
//     loginBtn.style.borderLeft = 'none';

//     loginForm.style.display = 'none';
//     signupForm.style.display = 'block';

//     popupContent.style.height = '500px';

//     loginEmail.value = '';
//     loginPassword.value = '';
// });

// signupBtn.addEventListener('click', () => {
//     signupBtn.style.color = 'red';
//     loginBtn.style.color = 'black';

//     signupBtn.style.borderTop = '1px solid black';
//     signupBtn.style.borderRight = '1px solid black';
//     signupBtn.style.borderBottom = 'none';
//     signupBtn.style.borderLeft = '1px solid black';

//     loginBtn.style.borderTop = 'none';
//     loginBtn.style.borderRight = 'none';
//     loginBtn.style.borderBottom = '1px solid black';
//     loginBtn.style.borderLeft = 'none';

//     loginForm.style.display = 'none';
//     signupForm.style.display = 'block';

//     popupContent.style.height = '500px';
// });

// back.addEventListener('click', () => {
//     loginBtn.style.color = 'red';
//     signupBtn.style.color = 'black';

//     loginBtn.style.borderTop = '1px solid black';
//     loginBtn.style.borderRight = '1px solid black';
//     loginBtn.style.borderBottom = 'none';
//     loginBtn.style.borderLeft = '1px solid black';

//     signupBtn.style.borderTop = 'none';
//     signupBtn.style.borderRight = 'none';
//     signupBtn.style.borderBottom = '1px solid black';
//     signupBtn.style.borderLeft = 'none';

//     loginForm.style.display = 'block';
//     signupForm.style.display = 'none';

//     popupContent.style.height = '400px';
// });


// /* SignUp Form */
// document.addEventListener('DOMContentLoaded', function () {

//     signupForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         if (!validateSignUpForm()) {
//             return;
//         }

//         let signupEmail = document.getElementById('signupEmail').value;
//         let signupPassword = document.getElementById('signupPassword').value;

//         if (signupPassword.length < 5) {
//             alert("Password must have at least 5 characters");
//         } else if (!/[A-Z]/.test(signupPassword)) {
//             alert("Password starts with an uppercase letter");
//         } else if (!/\d/.test(signupPassword)) {
//             alert("Password should contain a digit");
//         } else {
//             const storedCredentialsJSON = localStorage.getItem('credentials');
//             const storedCredentials = storedCredentialsJSON ? JSON.parse(storedCredentialsJSON) : {};

//             storedCredentials[signupEmail] = signupPassword;

//             localStorage.setItem('credentials', JSON.stringify(storedCredentials));

//             document.getElementById('signupEmail').value = '';
//             document.getElementById('signupPassword').value = '';

//             alert("Thanks for Registration!");
//         }
//     });

//     function validateSignUpForm() {
//         let signupName = document.getElementById('signupName').value;
//         let signupMobile = document.getElementById('signupMobile').value;

//         if (/\d/.test(signupName)) {
//             alert("Please enter a valid Name.");
//             return false;
//         }
//         if (isNaN(signupMobile) || signupMobile.length !== 10) {
//             alert("Please enter a valid Number.");
//             return false;
//         }
//         return true;
//     }
// });


// /* Login Form */
// document.addEventListener('DOMContentLoaded', function () {

//     loginForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         let loginEmail = document.getElementById('loginEmail').value;
//         let loginPassword = document.getElementById('loginPassword').value;

//         const storedCredentialsJSON = localStorage.getItem('credentials');
//         const storedCredentials = storedCredentialsJSON ? JSON.parse(storedCredentialsJSON) : {};

//         if (storedCredentials.hasOwnProperty(loginEmail) && storedCredentials[loginEmail] === loginPassword) {
//             alert("Login Successfully!");
//             window.location.href = 'https://www.linkedin.com/in/annaldas-aravind-961a67238/';
//         } else {
//             alert("Please enter valid Email and Password");
//         }
//     });
// });



// popup.addEventListener('click', (event) => {
//     if (event.target === popup) {
//         popup.style.display = 'none';
//     }
//     loginEmail.value = '';
//     loginPassword.value = '';
//     signupEmail.value = '';
//     signupMobile.value = '';
//     signupName.value = '';
//     signupPassword.value = '';
// });

document.addEventListener('DOMContentLoaded', function () {
    const popupButton = document.getElementById('popupButton');
    const popupContent = document.getElementById('popupContent');
    const popup = document.getElementById('popup');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const alterSign = document.getElementById('alterSign');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const signupName = document.getElementById('signupName');
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');
    const signupMobile = document.getElementById('signupMobile');
    const toggle1 = document.getElementById('toggle1');
    const toggle2 = document.getElementById('toggle2');
    const back = document.getElementById('back');

    function switchToLoginForm() {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        popupContent.style.height = '400px';

        loginBtn.style.color = 'red';
        signupBtn.style.color = 'black';

        loginBtn.style.borderTop = '1px solid black';
        loginBtn.style.borderRight = '1px solid black';
        loginBtn.style.borderBottom = 'none';
        loginBtn.style.borderLeft = '1px solid black';

        signupBtn.style.borderTop = 'none';
        signupBtn.style.borderRight = 'none';
        signupBtn.style.borderBottom = '1px solid black';
        signupBtn.style.borderLeft = 'none';

        loginForm.style.display = 'block';
        signupForm.style.display = 'none';

        popupContent.style.height = '400px';
    }

    function switchToSignupForm() {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        popupContent.style.height = '500px';
        loginEmail.value = '';
        loginPassword.value = '';
        signupName.value = '';
        signupEmail.value = '';
        signupMobile.value = '';
        signupPassword.value = '';

        signupBtn.style.color = 'red';
        loginBtn.style.color = 'black';

        signupBtn.style.borderTop = '1px solid black';
        signupBtn.style.borderRight = '1px solid black';
        signupBtn.style.borderBottom = 'none';
        signupBtn.style.borderLeft = '1px solid black';

        loginBtn.style.borderTop = 'none';
        loginBtn.style.borderRight = 'none';
        loginBtn.style.borderBottom = '1px solid black';
        loginBtn.style.borderLeft = 'none';

        loginForm.style.display = 'none';
        signupForm.style.display = 'block';

        popupContent.style.height = '500px';
    }

    popupButton.addEventListener('click', () => {
        popup.style.display = 'block';
        switchToLoginForm();
    });

    loginBtn.addEventListener('click', switchToLoginForm);
    signupBtn.addEventListener('click', switchToSignupForm);
    alterSign.addEventListener('click', switchToSignupForm);

    toggle1.addEventListener('click', () => {
        loginPassword.type = loginPassword.type === 'password' ? 'text' : 'password';
    });

    toggle2.addEventListener('click', () => {
        signupPassword.type = signupPassword.type === 'password' ? 'text' : 'password';
    });

    back.addEventListener('click', switchToLoginForm);

    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
            loginEmail.value = '';
            loginPassword.value = '';
        }
    });

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!validateSignUpForm()) {
            return;
        }

        let signupEmailValue = signupEmail.value;
        let signupPasswordValue = signupPassword.value;

        if (signupPasswordValue.length < 5) {
            alert("Password should have atleast 5 Characters");
        } else if (!/[A-Z]/.test(signupPasswordValue)) {
            alert("Password should have Capital letter");
        } else if (!/\d/.test(signupPasswordValue)) {
            alert("Password should have atleast one Number");
        } else {
            const storedCredentialsJSON = localStorage.getItem('credentials');
            const storedCredentials = storedCredentialsJSON ? JSON.parse(storedCredentialsJSON) : {};

            storedCredentials[signupEmailValue] = signupPasswordValue;

            localStorage.setItem('credentials', JSON.stringify(storedCredentials));

            alert("Thanks for Registration!");
            clearFields();
        }
    });

    function validateSignUpForm() {
        let signupNameValue = signupName.value;
        let signupMobileValue = signupMobile.value;

        if (/\d/.test(signupNameValue)) {
            alert("Please enter a valid Name.");
            return false;
        }
        if (isNaN(signupMobileValue) || signupMobileValue.length !== 10) {
            alert("Please enter a valid Number.");
            return false;
        }
        return true;
    }


    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let loginEmailValue = loginEmail.value;
        let loginPasswordValue = loginPassword.value;

        const storedCredentialsJSON = localStorage.getItem('credentials');
        const storedCredentials = storedCredentialsJSON ? JSON.parse(storedCredentialsJSON) : {};

        if (storedCredentials.hasOwnProperty(loginEmailValue) && storedCredentials[loginEmailValue] === loginPasswordValue) {
            alert("Login Successfully!");
            window.location.href = 'https://www.linkedin.com/in/annaldas-aravind-961a67238/';
        } else {
            alert("Please enter valid Email and Password");
        }
    });
});








