const ListMenu = document.querySelector(".list");
const AddMenu = document.querySelector(".add");
const ContactMenu = document.querySelector(".contactmenu");

ListMenu.addEventListener('click', () => {

    document.querySelector('.booksdata').style.display = 'block';
    document.querySelector('.addbooks').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
  
  })
  AddMenu.addEventListener('click', () => {
  
    document.querySelector('.booksdata').style.display = 'none';
    document.querySelector('.addbooks').style.display = 'block';
    document.querySelector('.contact').style.display = 'none';
  
  })
  
  ContactMenu.addEventListener('click', () => {
  
    document.querySelector('.booksdata').style.display = 'none';
    document.querySelector('.addbooks').style.display = 'none';
    document.querySelector('.contact').style.display = 'block';
  
  })
  
  
  