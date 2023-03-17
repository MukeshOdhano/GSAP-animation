const timeLine = gsap.timeline({ 
   defaults: { duration: .75, ease: 'power3.easeOut' } 
})

timeLine.fromTo(
   '.image, .background',
   {
      scale: 1.3
   }, 
   {
      scale: 1,
      borderRadius: `${30}px`,
      delay: .3,
      duration: 2.5,
      ease: `elastic.out(${1, 5, 1})`
   }
)

// timeLine.fromTo(
//    'h1',
//    {
//       scale: 0
//    }, {
//       scale: 1,
//       delay: .3,
//       duration: 2.5
//    },
//    '<'
// )

timeLine.fromTo('.spn1',{x: `${-100}%`, opacity: 0}, {x: 0, opacity: 1}, '<40%')
timeLine.fromTo('.spn2',{x: `${100}%`, opacity: 0}, {x: 0, opacity: 1}, '<')
timeLine.fromTo('.spn3',{x: `${-100}%`, opacity: 0, rotate: `${-90}deg`}, {x: 0, opacity: 1, rotate: `${0}deg`, ease: `elastic.out(${1, 5, 1})`}, '<100%')

timeLine.fromTo('.spn4',{y: `${100}%`, opacity: 0}, {y: 0, opacity: 1}, '<')
timeLine.fromTo('.spn5',{y: `${100}%`, opacity: 0}, {y: 0, opacity: 1}, '<')
timeLine.fromTo('.spn6',{y: `${100}%`, opacity: 0}, {y: 0, opacity: 1, ease: `Bounce.easeOut`}, '<100%')

timeLine.fromTo('button',{opacity: 0}, {opacity: 1}, "<0%")

// for fun button animation
// const btn = document.querySelector('button');
// const letters = btn.textContent.split("");

// btn.textContent = ""
// letters.forEach(letter=>{
//    btn.innerHTML += `<span class="letter">${letter}</span>`
// })

// gsap.set('.letter', {display: 'inline-block'})
// timeLine.fromTo(
//    '.letter',
//    {
//       y: `${100}%`
//    } ,{
//       y: 0,
//       stagger: 0.05,
//       delay: 1,
//       ease: 'back.out(3)'
//    }
// )

// console.log(letters)