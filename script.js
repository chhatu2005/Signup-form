
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")

const strengthBar = document.getElementById("strengthBar")
const strengthText = document.getElementById("strengthText")
const successMessage = document.getElementById("successMessage")

const validateName = () =>
{
    const name = nameInput.value.trim()

    if(name.length < 2)
    {
        nameError.innerText = "Name must contain at least 2 characters."
        nameInput.classList.add("invalid")
        nameInput.classList.remove("valid")
        return false
    }

    nameError.innerText = ""
    nameInput.classList.remove("invalid")
    nameInput.classList.add("valid")
    return true
}

const validateEmail = () =>
{
    const email = emailInput.value.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailPattern.test(email))
    {
        emailError.innerText = "Please enter a valid email address"
        emailInput.classList.add("invalid")
        emailInput.classList.remove("valid")
        return false
    }

    emailError.innerText = ""
    emailInput.classList.remove("invalid")
    emailInput.classList.add("valid")
    return true
}

const validatePassword = () =>
{
    const password = passwordInput.value
    let strength = 0

    if(password.length >= 8)
    {
        strength++
    }

    if(/[A-Z]/.test(password))
    {
        strength++
    }

    if(/[a-z]/.test(password))
    {
        strength++
    }

    if(/[0-9]/.test(password))
    {
        strength++
    }

    if(/[^A-Za-z0-9]/.test(password))
    {
        strength++
    }

    if(password.length === 0)
    {
        strengthBar.style.width = "0"
        strengthText.innerText = "Password strength"
    }
    else if(strength <= 2)
    {
        strengthBar.style.width = "33%"
        strengthBar.style.background = "#e74c3c"
        strengthText.innerText = "Weak password"
    }
    else if(strength <= 4)
    {
        strengthBar.style.width = "66%"
        strengthBar.style.background = "#f39c12"
        strengthText.innerText = "Medium password"
    }
    else
    {
        strengthBar.style.width = "100%"
        strengthBar.style.background = "#16a085"
        strengthText.innerText = "Strong password"
    }

    if(password.length < 8)
    {
        passwordError.innerText = "Password must be at least 8 characters"
        passwordInput.classList.add("invalid")
        passwordInput.classList.remove("valid")
        return false
    }

    passwordError.innerText = ""
    passwordInput.classList.remove("invalid")
    passwordInput.classList.add("valid")
    return true
}

const validateForm = (event) =>
{
    event.preventDefault()

    const validName = validateName()
    const validEmail = validateEmail()
    const validPassword = validatePassword()

    if(validName && validEmail && validPassword)
    {
        successMessage.innerText = "Signup successful!"
    }
    else
    {
        successMessage.innerText = ""
    }

    return false
}
