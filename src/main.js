import Socket from './socket';
import * as NoSleep from 'nosleep.js/src';

const socket = new Socket();

document.addEventListener('DOMContentLoaded', () => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    prev.addEventListener('click', e => {
        socket.send('prev');
    });

    next.addEventListener('click', e => {
        socket.send('next');
    });

    const noSleepBtn = document.getElementById('noSleep');
    const noSleep = new NoSleep();

    function enableNoSleep() {
        noSleep.enable();
        noSleepBtn.removeEventListener('click', enableNoSleep, false);
    }

    noSleepBtn.addEventListener('click', enableNoSleep, false);

    noSleep.disable();
});