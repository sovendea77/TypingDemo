const a = document.querySelector('.typing-demo')
const text  = a.innerText
a.style.width = text.length + 'em'

function replaceword()
{
    a.innerText = "恭喜发财"
    a.style.width = a.innerText.length + 'em'
    a.classList.remove('type-demo')
    a.classList.add('test-transform')
}
setTimeout(replaceword, 5000); 