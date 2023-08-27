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
            alert("Password should have at least 5 Characters");
        } else if (!/[A-Z]/.test(signupPasswordValue)) {
            alert("Password should have Capital letter");
        } else if (!/\d/.test(signupPasswordValue)) {
            alert("Password should have at least one Number");
        } else {
            const storedCredentialsJSON = localStorage.getItem('credentials');
            const storedCredentials = storedCredentialsJSON ? JSON.parse(storedCredentialsJSON) : {};

            if (storedCredentials.hasOwnProperty(signupEmailValue)) {
                alert("You have already registered");
            } else {
                storedCredentials[signupEmailValue] = signupPasswordValue;

                localStorage.setItem('credentials', JSON.stringify(storedCredentials));

                alert("Thanks for Registration!");
                signupName = '';
                signupEmail = '';
                signupPassword = '';
                signupMobile = '';
            }
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








