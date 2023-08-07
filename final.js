var a= gsap.timeline()
a.from("#page1 svg",
{
    y:-100,
    delay:0.5,
    duration:1,
})
a.to("#page1 svg",
{
    scale:0.9,
    scrollTrigger:
    {
        trigger:"#page1 svg",
        scroller:"body",
        delay:0.5,
        scrub:3,
        markers:true,
        start:"top -13%",
        end:"top 10%"
    }
})
a.from("#mainimg",
{
    scale:0.5,delay:0.5,duration:1,borderRadius:22,scrub:9,
})
a.from("#nav",
    {
        y:-100,
        delay:0.2,
        duration:1
})

var h2Text = document.querySelectorAll("#page2 h2")
h2Text.forEach(function(elem)
{

var storedtext = elem.textContent;
var splitText = storedtext.split("");
var clutter = "";
splitText.forEach(function(e)
{
    clutter += `<span>${e}</span>`;
});
elem.innerHTML = clutter;

});
var h3Text = document.querySelectorAll("#page2 h3")
h3Text.forEach(function(elem)
{

var storedtext = elem.textContent;
var splitText = storedtext.split("");
var clutter = "";
splitText.forEach(function(e)
{
    clutter += `<span>${e}</span>`;
});
elem.innerHTML = clutter;

});

gsap.to("#page2 h2 span",
{
    color:"#e3e3c4",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2 h2 span",
        scroller:"body",
        start:"top 55%",
        scrub:3
    
    }
})
gsap.to("#page2 h3 span",
{
    color:"#5B6647",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2 h3 span",
        scroller:"body",
        start:"top 85%",
        end:"top 66%",
        scrub:3,
        markers:true
    
    }
})
 gsap.to("#page2 #svg1, #page2 #svg2",
 {
    left:'-100vw',
    scrollTrigger:{
        trigger:"#page2 #svg1",
        scroller:"body",
        start:"top 16%",
        scrub:2
    }
 })
 gsap.to("#dibba-1",
 {
    
 })