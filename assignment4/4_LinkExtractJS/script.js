// A SIMPLE JS SCRIPT TO EXTRACT ALL THE LINKS FROM A WEBPAGE
var links = document.querySelectorAll('a'); // Selects All the attributes having 'a' tag
//i.e <a href=".."... ></a> and store them in a array list

links.forEach((element) => {
  console.log(element.href);
}); // iterate over each element of the list and display its 'href' property .. which is supposed to be a link
