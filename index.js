
// Step 1 - Create an object of XHR
const xhr = new XMLHttpRequest()
// const source = 'https://api.github.com/users'
const source = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'

console.log(xhr.readyState)
// Step 2 - Open the portal of communication b/w client and the server
xhr.open('GET', source, false)
console.log(xhr.readyState)

// Step 3 - Perform a function when the ready state is in transition
xhr.onreadystatechange = () => {
    console.log(xhr.readyState)
    if(xhr.readyState === 4 && xhr.status === 200)
    {
        const response = JSON.parse(xhr.responseText)
        
        let output = ''

        for(let i =0; i < response.length; i++)
         output += `<p>${response[i].username}</p>` 
        // output += `<img src="${response[i].avatar_url}" />`

        document.querySelector('.container').innerHTML = output
    }
}

// Step 4 - Send the request
xhr.send()