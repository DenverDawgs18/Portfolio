let lore = document.querySelector('.lore');
let hide = document.querySelector('.hidden')
function check(){
    console.log(m)
    if(m.matches && n.matches){
        
        hide.textContent = 'quaerat nulla inventore pariature quidbusdam';
        lore.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor, itaque qui eligendi fugit ipsam animi earum reprehenderit illum explicabo odit quidem doloremque mollitia beatae'
    
    }
    else{
        lore.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor, 
        itaque qui eligendi fugit ipsam animi earum quaerat nulla inventore
        reprehenderit illum explicabo odit quidem doloremque pariatur quibusdam 
        mollitia beatae`;
    }
}

let m = window.matchMedia('(max-width: 900px)');
let n = window.matchMedia('(min-width: 600px)')
check(m,n)
window.addEventListener('resize', check, false);