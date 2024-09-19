document.getElementById('LoginFrom'), addEventListener('submit', function(event){
    event.preventDefault();
    
    const correctUsername = "galih";
    const correctUsername = "galih";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctUsername)[
        alert('Login Berhasil');
        window.location.href = 'index.html';
    ]else{
        alert('Username atau password salah');
    }
});
        