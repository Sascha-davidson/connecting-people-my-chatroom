let ioServer = io()
let messages = document.querySelector(`section ul`)
let input = document.querySelector(`input`)

document.querySelector(`form`).addEventListener(`submit`, (event) =>{
    event.preventDefault()

    if (input.value){
        ioServer.emit(`message`, input.value)

        input.value = ``
        console.log(input)
    }
})

ioServer.on(`message`, (message) =>{
    addMessage(message)
    console.log(message)
})

function addMessage(message){
    messages.appendChild(Object.assign(document.createElement(`li`), { textContent: message }))
    messages.scrolltop = messages.scrollHeight
    messages.scrollTo(0, messages.scrollHeight);
}