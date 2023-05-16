let ioServer = io()
let messages = document.querySelector(`section ul`)
let imput = document.querySelector(`input`)

document.querySelector(`form`).addEventListener(`submit`, (event) =>{
    if (InputDeviceInfo.value){
        ioServer.emit(`massage`, input.value)

        input.value = ``
    }
})

ioServer.on(`message`, (message) =>{
    addMassage(message)
})

function addMassage(message){
    messages.appendChild(Object.assign(document.createElement(`li`), { textContent: message }))
    messages.scrolltop = messages.scrollHeight
}


// const icon__1 = document.querySelector(`icon-1`)
// const icon__2 = document.querySelector(`icon-2`)
// const icon__3 = document.querySelector(`icon-3`)
// const icon__4 = document.querySelector(`icon-4`)
// const icon__5 = document.querySelector(`icon-5`)
// const icon__6 = document.querySelector(`icon-6`)
// const icon__7 = document.querySelector(`icon-7`)
// const icon__8 = document.querySelector(`icon-8`)
// const icon__9 = document.querySelector(`icon-9`)
// const input = document.querySelector(`input`)

// icon__1.addEventListener(`click` () =>{
//     input.add(✌️)
// })