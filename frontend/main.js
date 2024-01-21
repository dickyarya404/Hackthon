// navbar
const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
    // console.log(window.scrollY);
    if (window.scrollY > 1) {
        navbar.classList.replace("bg-transparent", "nav-color");
} else if (window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "bg-transparent");
}
});
// demo notification
$(() => {
    $('#tombol').click(function (){
        $('#alertku').removeClass('hidden');
        $('#alertku').addClass('show');
        
    })
    $('.close').click(function() {
        $('#alertku').removeClass('show')
    })
})

// go to top
const goToTop = () => {
    return location.href="#home"
}

//animation scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('muncul');
        }else {
            entry.target.classList.remove('muncul');
        }
    })
})

const hilangElements = document.querySelectorAll('.hilangy');
hilangElements.forEach((el) => observer.observe(el));
const hilangsElements = document.querySelectorAll('.hilangx');
hilangsElements.forEach((el) => observer.observe(el));


//comment baru