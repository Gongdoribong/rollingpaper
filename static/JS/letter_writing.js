(function(form, button_prev, button_next){
    String.prototype.isEmpty = function(){
        return this === null || this.match(/^ *$/) !== null;
    }


    button_prev.addEventListener('click', () => window.location.href = '/food_select');
    button_next.addEventListener('click', async e => {
        // FormData 임시저장
        const formData = new FormData(form);
        localStorage.setItem('nickname', formData.get('nickname').toString());
        localStorage.setItem('letter_context', formData.get('letter_context').toString());
        
        // 데이터 확인
        let fEname = document.querySelector('input[name=fEname]').value;
        let nickname = document.querySelector('textarea[name=nickname]').value;
        let letter_context = document.querySelector('textarea[name=letter_context]').value;

        console.log({fEname, nickname, letter_context});

        if(nickname.isEmpty() || letter_context.isEmpty()){
            alert("닉네임과 편지는 비워둘 수 없습니다.");
            return;
        }

        let res = await fetch('/api/writing', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fEname, nickname, letter_context})
        })
        if(res.ok){
            localStorage.clear();
            window.location.href = '/success';
        }
        else{
            alert((await res.json()).message);
        }
    });

    // 임시저장 데이터 불러오기
    document.querySelector('#nickname').value = localStorage.getItem('nickname') ?? '';
    document.querySelector('#letter_context').value = localStorage.getItem('letterContext') ?? '';
})(
    document.querySelector('form'),
    document.querySelector('button.prev'),
    document.querySelector('button.next')
);