document.addEventListener('DOMContentLoaded', function() {
    
    var menuList = document.getElementById('menu-list');
    var menuItems = [
      { name: '', description: '', price: '' },
      { name: '', description: '', price: '' },
      { name: '', description: '', price: '' }
    ];
  
    menuItems.forEach(function(item) {
      var li = document.createElement('li');
      var name = document.createElement('span');
      name.textContent = item.name;
      var description = document.createElement('span');
      description.textContent = item.description;
      var price = document.createElement('span');
      price.textContent = item.price;
      li.appendChild(name);
      li.appendChild(description);
      li.appendChild(price);
      menuList.appendChild(li);
    });
  
    
    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var nameInput = document.getElementById('name');
      var emailInput = document.getElementById('email');
      var messageInput = document.getElementById('message');
  
      
      console.log('Nombre:', nameInput.value);
      console.log('Email:', emailInput.value);
      console.log('Mensaje:', messageInput.value);
  
     
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    });
  });