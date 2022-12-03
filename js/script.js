$(document ).ready(function() {
    let openMenu  = document.getElementById('openMenu');
    let closeMenu  = document.getElementById('closeMenu');
    let menubar  = document.getElementById('menubar')

    openMenu.addEventListener('click', function (){
        menubar.style.height = '100%';
        openMenu.style.display = 'none';
        closeMenu.style.display = 'flex';
    })
    closeMenu.addEventListener('click', function (){
        menubar.style.height = '0px';
        openMenu.style.display = 'flex';
        closeMenu.style.display = 'none';
    })
    $(window).scroll(function (event) {
        let menuTop = document.getElementById('menubar')
        let closeMenu = document.getElementById('closeMenu')
        let openMenu = document.getElementById('openMenu')

        let scroll = $(window).scrollTop();
        if(scroll > 0){
            menuTop.style.top = '0px';
        }else{
            menuTop.style.top = '214px'
        }

        if(menuTop.style.display === 'flex'){
            closeMenu.style.display = 'flex';
            openMenu.style.opacity = '0'
        }
        
    });
});
