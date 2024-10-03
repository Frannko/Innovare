document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(){

        document.querySelectorAll('nav a').forEach(item => {
            item.classList.remove('nav-active');
         });

        this.classList.add('nav-active');
    });
});