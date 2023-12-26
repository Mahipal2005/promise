let yes = document.querySelector('#yes')
let no = document.querySelector('#no')
let body = document.querySelector('body')
let main = document.querySelector('#main')
// let res_rej = document.createElement('img')
let image = document.createElement('img')
let btn;
function process() {
    main.innerHTML = ''
    let div = document.createElement('div')
    // let image = document.createElement('img')
    image.src = "https://i.gifer.com/origin/a1/a1d81f564eeb1468aefbcfd54d1571b8_w200.gif"
    image.id = "processing"
    div.append(main, image)
    body.appendChild(image)
}
function reso(){
        let promi= new Promise((resolve, reject) => {
            if(btn==true){
                resolve()
            }
            else{
                reject()
            }
})
promi
.then((result) => {
    image.src="https://cdn.uxhack.co/static/Hacks/images/success-tick.gif"
    body.style.background="rgb(18,192,106)"
    body.append(image)
}).catch((err) => {
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8vfSBikEPxOhPL7Kr9aN2AE-UZul2VN0V3_QU1IS1pGwwXdxtnD0Tr0RIRjtpeZWUXiI&usqp=CAU"
    body.style.background="rgb(18,192,106)"
    body.append(image)
});
}
yes.addEventListener('click', function (event) {
    btn=true;
    setTimeout(() => {
        reso()
    }, 2000);
    process()

})
no.addEventListener('click', function (event) {
    btn=false;
    setTimeout(() => {
        reso()
    }, 2000);
    let pro=setTimeout(() => {
        process()
    }, 10);


})