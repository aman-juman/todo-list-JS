export function getAuthForm() {
    return `
    <form class="mui-form" id="auth-form">
                <div class="mui-textfield mui-textfield--float-label">
                    <input
                            type="email"
                            id="email"
                    >
                    <label for="email-input">Email</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input
                            type="password"
                            id="password"
                    >
                    <label for="password-input">password</label>
                </div>
                <button
                 
                        type="submit"
                        class="mui-btn mui-btn--raised mui-btn--primary"
                >Sign in
                </button>
            </form>
    
    `
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyDHh6DLsyHnW5OZnJ53XXmjBciwi6l1j_0';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({email, password, returnSecureToken:true}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response=> response.json())
        .then(data=>data.idToken)
}