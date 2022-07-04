const tds = document.querySelectorAll('td');
const ths = document.querySelectorAll('th');
const impair = ["lundi", "mercredi", "vendredi", "dimanche"];
const pair = ["mardi", "jeudi", "samedi"];
ths.forEach(el=>{
    if (el.hasAttribute('id')){
        const ids = el.getAttribute('id');
        if (impair.some(el=>ids.includes(el))){
            el.style.backgroundColor = "red"
        }
        if (pair.some(el=>ids.includes(el))){
            el.style.backgroundColor = "blue"
        }
    }
})

tds.forEach(el => {
    const headers = el.getAttribute('headers');
    if (impair.some(el=>headers.includes(el))){
        el.style.backgroundColor = "red"
    }
    if (pair.some(el=>headers.includes(el))){
        el.style.backgroundColor = "blue"
    }
})
