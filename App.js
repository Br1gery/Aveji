const test = document.getElementById('testia')

test.addEventListener('click',()=>{
    test.style.display = 'none'
    gsap.to('body',{
        y:200,
        duration: 0.4,
    })
    gsap.to('.testikers',{
        y:-65,
        duration: 0.1,
    })
    gsap.to('.testikers1',{
        y:-115,
        duration: 0.2,
    })
    gsap.to('.testikers2',{
        y:-165,
        duration: 0.3,
    })
    gsap.to('.testikers3',{
        y:-215,
        duration: 0.4,
    })
})

const test3 = document.getElementById('testik2')

test3.addEventListener('click',()=>{
    test.style.display = ''
    gsap.to('body',{
        y:0,
        duration: 0.4,
    })
    gsap.to('.testikers',{
        y:0,
        duration: 0.1,
    })
    gsap.to('.testikers1',{
        y:0,
        duration: 0.2,
    })
    gsap.to('.testikers2',{
        y:0,
        duration: 0.3,
    })
    gsap.to('.testikers3',{
        y:0,
        duration: 0.4,
    })
})