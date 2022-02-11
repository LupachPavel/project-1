const btns = document.querySelectorAll('.where__btns-item')
const tabs = document.querySelectorAll('.where__tab')

btns.forEach(item => {
    item.addEventListener('click', () => {
        let currentBtn = item
        let tabId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)


        btns.forEach(item => {
            item.classList.remove('active')
        })

        tabs.forEach(item => {
            item.classList.remove('active')
        })

        currentBtn.classList.add('active')
        currentTab.classList.add('active')
    })
})