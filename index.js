window.onload = () => {
    let p = document.querySelector("#excuse")
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let excuseRandom1 = Math.floor(Math.random() * who.length)
    let excuseRandom2 = Math.floor(Math.random() * action.length)
    let excuseRandom3 = Math.floor(Math.random() * what.length)
    let excuseRnadom4 = Math.floor(Math.random() * when.length)
    p.innerHTML = `${who[excuseRandom1]}` + ` ` + `${action[excuseRandom2]}` + ` ` + `${what[excuseRandom3]}` + ` ` + `${when[excuseRnadom4]}`
    console.log(p.innerHTML)
}

