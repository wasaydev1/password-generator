let btnAlpha = document.getElementById("btnAlpha")
let input = document.getElementById("input")
let range = document.getElementById("range")

range.addEventListener("input", () => {
    input.value = range.value     
})

btnAlpha.addEventListener("click", () => {
    let password = ""
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 1; i <= range.value; i++) {
        let generate = Math.floor(Math.random() * charset.length)
        password += charset.charAt(generate)
    }
    input.value = password
})

let btnNumeric = document.getElementById("btnNumeric")
btnNumeric.addEventListener("click", () => {
    let password = ""
    let charset = "0123456789"
    for (let i = 1; i <= range.value; i++) {
        let generate = Math.floor(Math.random() * charset.length)
        password += charset.charAt(generate)
    }
    input.value = password
})

let btnAlphaNumeric = document.getElementById("btnAlphaNumeric")

btnAlphaNumeric.addEventListener("click", () => {
    let password = ""
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for (let i = 1; i <= range.value; i++) {
        let generate = Math.floor(Math.random() * charset.length)
        password += charset.charAt(generate)
    }
    input.value = password
})

