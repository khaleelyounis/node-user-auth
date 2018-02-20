$(document).ready(addClickHandlers);

function addClickHandlers() {
    $('#register').on('click', () => {
        console.log('register clicked');
        register();
    });
    $('#signin').on('click', () => {
        console.log('sign in clicked');
        signIn();
    });
    $('#get-user').on('click', () => {
        console.log('get user clicked');
        $.ajax({
            url: '/get-user',
            method: 'POST',
            headers: {
                authorization: localStorage.getItem('token')
            },
            success: response => {
                console.log('Get user response: ', response);
            }
        });
    });
}

function signIn() {
    const values = {
        email: $('#email-signin').val(),
        password: $('#password-signin').val()
    };
    console.log('Sign In values: ', values);
    $.ajax({
        url: '/signin',
        method: 'POST',
        data: values,
        dataType: 'json',
        success: response => {
            console.log('Sign In response: ', response);
            localStorage.setItem('token', response.token);
        }
    });
}

function register() {
    const values = {
        email: $('#email').val(),
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        password: $('#password').val()
    };
    console.log('Register values: ', values);
    $.ajax({
        url: '/signup',
        method: 'POST',
        data: values,
        dataType: 'json',
        success: response => {
            console.log('Register response: ', response);
        }
    });
}