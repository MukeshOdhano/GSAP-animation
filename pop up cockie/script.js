const btn =  document.querySelector('button')
const timeLine = gsap.timeline({
   defaults: {
      duration: .75,
      ease: Power1.easeOut,
   }
})

timeLine.fromTo('.cockie-container', 
   {
      scale: 0
   }, 
   {
      scale: 1,
      ease: "elastic.out(1.2, 0.4)"
   },
   "<"
)

timeLine.fromTo('.whole-cockie',
   {
      opacity: 0,
      x: -50,
      rotate: `${-50}deg`
   },
   {
      opacity: 1,
      x: 0,
      rotate: `${0}deg`,
      ease: Elastic.easeOut.config(1, 0.5)
   }
)

timeLine.fromTo('.text', {
   opacity: 0,
   x: 50
},{
   opacity: 1,
   x: 0
},"<0%")


timeLine.fromTo('button', {
   opacity: 0,
   y: 100
},{
   opacity: 1,
   y: 50
}, "<0%<100%")

// Crumbs
timeLine.fromTo('.whole-cockie', {y: 0, rotate: `${0}deg`}, {y: -20, rotate: `${-20}deg`, yoyo: true, repeat: -1})
timeLine.fromTo('#crumbs', {y: 0}, {y: -20, yoyo: true, repeat: -1}, '<')

btn.addEventListener('click', ()=>{
   timeLine.to('.cockie-container',{opacity: 0, y: 100})
})