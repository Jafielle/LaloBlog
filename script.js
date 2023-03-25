//alert('Conected')

//Getting Elements from DOM
const FilterBtns = document.querySelectorAll('.post-filter button');

const post = document.querySelectorAll('.posts div');

//Adding a click event to all buttons
for (let i = 1; i < FilterBtns.length; i++) {
      FilterBtns[i].addEventListener('click', filterPost);
}

//Setting active button on click
function setActiveBtn(e) {
      //Removing active class from all post-filter buttons
      FilterBtns.forEach(btn => {
            btn.classList.remove('active-filter');
      });

      //Addding active class to clicked button
      e.target.classList.add('active-filter');
}

//Filtering posts
function filterPost(e) {
      //Running the active button function
      setActiveBtn(e);

      //Looping through all posts
      post.forEach(div => {

            div.classList.remove('hide');
            //div.classList.add('expand');

            //Get data from data attributes
            //...post type data
            const imgType = parseInt(div.dataset.post);
            //...button type data
            const btnType = parseInt(e.target.dataset.btn);

            //If post type different than clicked post-filter button type

            if (imgType !== btnType) {
                  //Hide the image
              //    div.classList.remove('expand');
                  div.classList.add('hide');
            }
      })
}

//Setting click event for 'All' post-filter button
FilterBtns[0].addEventListener('click', (e) => {
      //Running the active button function
      setActiveBtn(e);
      //Looping through all posts
      post.forEach(div => {
            //Expandig all posts
            div.classList.remove('hide');
    //        div.classList.add('expand');
      })
})


//Nav Change on Scroll
let nav = document.querySelector('nav')


window.addEventListener('scroll', () => {
      
      nav.classList.toggle('shadow', window.scrollY > 0);
})