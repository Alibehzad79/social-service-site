function yearNow() {
    yearElem = document.querySelector('#yearnow');
    date = new Date()
    yearElem.textContent = date.getFullYear();
}
yearNow();

function commnetToast() {
    const toastTrigger = document.querySelector('#sendCommentBtn')
    const commnetToastSection = document.querySelector('#sendCommnetToast')
    const timeRange = document.querySelector('#commnetTimeRange')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            commnetToastSection.classList.add('show')
            commnetToastSection.style = 'z-index: 100'
            for (let index = 0; index < 6; index++) {
                setTimeout(() => {
                    timeRange.innerHTML = 5 - index;
                    if (index == 5) {
                        commnetToastSection.classList.remove('show');
                    }
                }, index * 1000)

            }
        })
    }
}

commnetToast();

function OrderToast() {
    const toastTrigger = document.querySelector('#addToOrderBtn')
    const addToOrderToast = document.querySelector('#addToOrderToast')
    const timeRange = document.querySelector('#orderTimeRange')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            addToOrderToast.classList.add('show')
            addToOrderToast.style = 'z-index: 100'
            for (let index = 0; index < 6; index++) {
                setTimeout(() => {
                    timeRange.innerHTML = 5 - index;
                    if (index == 5) {
                        addToOrderToast.classList.remove('show');
                    }
                }, index * 1000)

            }
        })
    }
}

OrderToast();