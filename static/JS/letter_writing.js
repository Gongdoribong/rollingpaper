(function(button_prev, button_next){


    button_prev.addEventListener('click', () => history.back());
    button_next.addEventListener('click', async e => {
        let fEname = document.querySelector('input[name=fEname]').value;
        let nickname = document.querySelector('textarea[name=nickname]').value;
        let letter_context = document.querySelector('textarea[name=letter_context]').value;
        console.log({fEname, nickname, letter_context});

        let res = await fetch('/api/writing', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fEname, nickname, letter_context})
        })
        if(res.ok){
            window.location.href = '/api/success';
        }
        else{
            alert((await res.json()).message);
        }
    });
})(
    document.querySelector('button.prev'),
    document.querySelector('button.next')
);