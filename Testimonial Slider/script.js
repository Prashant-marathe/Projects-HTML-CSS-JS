const testimonials = [
    {
        name:"David G.",
        photoUrl:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text:"I have been using Apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
    }, 
    {
        name:"Jordi Espinosa",
        photoUrl:"https://images.unsplash.com/photo-1678286742832-26543bb49959?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        text:"Apple is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!"
    }, 
    {
        name:"Pavel Kosov",
        photoUrl:"https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        text:"Apple has really helped our business. Definitely worth the investment. Thank you!"
    }, 
    {
        name:"charlesdeluvio",
        photoUrl:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
        text:"Apple makes me more productive and gets the job done in a fraction of the time. I'm glad I found Apple."
    }, 
    {
        name:"Kirill Balobanov",
        photoUrl:"https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
        text:"Everyone’s on the same page. Many of our people are not very organized naturally, so Apple is a godsend!"
    }, 
];
const userImageEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');
let index = 0;
updateTestimonial();
function updateTestimonial() {
    const {name,photoUrl,text} = testimonials[index];
    userImageEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    index++;
    if(index === testimonials.length) {
        index = 0;
    }
    setTimeout(()=>{
        updateTestimonial();
    }, 8000);

}