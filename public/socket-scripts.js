(function(){
    const main = document.querySelector(`main`)
    const socket = io()

    let uname;

    main.querySelector(`join-screen #join-user`).addEventListener(`click`, function(){
        let username= main.querySelector(`join-screeen #username`).value;
        if(username.length == 0){
            return;
        }
        socket.emit(`newuser`, username);
        uname - username;
        main.querySelectorAll(`.join-screen`).classlist.remove(`active`)
        main.querySelectorAll(`.chat-screen`).classlist.add(`active`)
    })
    main.querySelector(`.chat-screen #send-message`).addEventListener(`click`, function(){
        let message = main.querySelector(`.chat-screen #message-input`).value;
        if(message.length == 0){
            return;
        }
        renderMessage(`my`,{
            username:uname,
            text:message
        })
        renderMessage(`chat`,{
            username:uname,
            text:message
        })
        main.querySelector(`.chat-screen #message-input`).value = ``;
    });

    main.querySelector(`chat-screen exit-chat`).addEventListener(`click`), function (){
        socket.emit(`exituser`, uname);
        window.location.href = window.location.href;
    }

    socket.on(`update`, function(update){
        renderMessage(`update`,update);
    })

    socket.on(`update`, function(update){
        renderMessage(`other`,message);
    })

    function renderMessage(type,message){
        let messageContainer = main.querySelector(`.chet-screen .messages`);
        if(type == `my`){
            let el = document.createElement (`div`);
            el.setAttribute(`class`,`message my-message`)
            el.innerHTML = `
                <div>
                    <div class="name">you</div>
                    <div class="text">${message.text}</div>
                </div>
            `;
            messageContainer.appendChild(el);
        } else if(type == `other`){
            let el = document.createElement (`div`);
            el.setAttribute(`class`,`message other-message`)
            el.innerHTML = `
                <div>
                    <div class="name">${message.username}</div>
                    <div class="text">${message.text}</div>
                </div>
            `;
            messageContainer.appendChild(el);
        }else if(type == `update`){
            let el = document.createElement (`div`);
            el.setAttribute(`class`,`update`)
            el.innerText = message;
            messageContainer.appendChild(el);
        }
        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    }
})