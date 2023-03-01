(function (form) {
    const formData = new FormData(form);

    form.addEventListener('submit', e => {
        e.preventDefault();
        localStorage.setItem('option', new FormData(form).get('option').toString())
        e.submit();
    })

    // 임시저장 데이터 불러오기
    if(localStorage.option)
    formData.set('option', localStorage.getItem('option'))


})(document.getElementById('foodlist'));