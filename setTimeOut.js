

const setInnerText = (id, text) => { document.getElementById(id).innerText = text }

let sec = 00;

let min = 00;

let hour = 00;

const clearZero = (id) => {
    document.getElementById('reset').addEventListener('click', function () {
        clearInterval(id)
        min = 0;
        sec = 0;
        hour = 0;
        setInnerText('second', '00')
        setInnerText('minutes', '00')
        setInnerText('hour', '00')
    })
}

const clearInt = (id) => {
    document.getElementById('pause').addEventListener('click', function () {
        clearInterval(id)
        // document.getElementById('pause').innerText = "Continue"
        clearZero()
    })

}



document.getElementById('start').addEventListener('click', function () {

    const myInt = setInterval(() => {
        sec++;
        setInnerText('second', ('0' + sec))
        if (sec >= 10) {
            setInnerText('second', sec)
        }

        // minutes part
        if (sec % 60 === 0) {
            setInnerText('second', "00")
            sec = 00
            min++
            setInnerText('minutes', ('0' + min))
            if (min >= 10) {
                setInnerText('minutes', min)
            }

            if (min % 60 === 0) {
                setInnerText('minutes', "00")
                min = 0
                hour++
                setInnerText('hour', hour)
            }
        }

    }, 100);

    clearInt(myInt)
    clearZero()
})




