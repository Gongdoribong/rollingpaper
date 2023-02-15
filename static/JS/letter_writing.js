(function(button_prev, button_next){
    button_prev.addEventListener('click', history.back);
    button_next.addEventListener('click', async e => {
        let res = await fetch('/api/writing/')
    });
})(
    document.querySelector('button.prev'),
    document.querySelector('button.next')
);