var testimonialIndex = 1;
showTestimonial(testimonialIndex);

function currentTestimonial(n) {
    
    showTestimonial(testimonialIndex = n);
}

function showTestimonial(n) {
    var i;
    var testimonials = document.getElementsByClassName("testimonial");
    var dots = document.getElementsByClassName("t-dot");
    if (n > testimonials.length) {testimonialIndex = 1} 
    if (n < 1) {testimonialIndex = testimonials.length}
    for (i = 0; i < testimonials.length; i++) {
      testimonials[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    testimonials[testimonialIndex-1].style.display = "block"; 
    dots[testimonialIndex-1].className += " active";
}