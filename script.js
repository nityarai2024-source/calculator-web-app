const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {

        if (item.id === 'clear') {
            display.value = '';
        }

        else if (item.id === 'backspace') {
            display.value = display.value.substring(0, display.value.length - 1);
        }

        else if (item.id === 'equal') {

            if (display.value !== '') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value = 'Enter Value';
                setTimeout(() => {
                    display.value = '';
                }, 2000);
            }
        }

        else {
            display.value += item.id;
            display.focus();
            display.setselectionRange(display.value.length, display.value.length);
        }
    };
});