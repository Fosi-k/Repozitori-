alert("welcome to Pirate telegram");

const form = document.getElementById('form');
const input = document.getElementById('input');
const messageList = document.getElementById('message');
const toggleTheme = document.getElementById('toggleTheme');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const text = input.value.trim();
    if (text !== '') {
        const li = document.createElement('li');
        li.textContent = text;
        messageList.appendChild(li);
        input.value = '';
        messageList.scrollTop = messageList.scrollHeight;
    }
});

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});
