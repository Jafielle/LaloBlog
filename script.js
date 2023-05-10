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

            div.classList.remove('hide-transition');/**/
            setTimeout(() => {
                  div.classList.remove('hide');
            }, 250); // Remove hide-transition class 5 seconds (5000ms) after the hide class
            //div.classList.add('expand');

            //Get data from data attributes
            //...post type data
            const imgType = parseInt(div.dataset.post);
            //...button type data
            const btnType = parseInt(e.target.dataset.btn);

            //If post type different than clicked post-filter button type

            if (imgType !== btnType) {
                  //Hide the image
                  div.classList.add('hide-transition');
                  setTimeout(() => {
                        div.classList.add('hide');
                  }, 250);
                  setTimeout(() => {
                        div.classList.remove('hide-transition');
                  }, 250); // Remove hide-transition class 5 seconds (5000ms) after the hide class
                  //div.classList.add('expand');
                  
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

/*
const postBox = document.querySelector('.post-box');

// Add the hide class to the post box
postBox.classList.add('hide');

// Wait for the next frame to ensure the hide class is applied
requestAnimationFrame(() => {
      // Add the hide-transition class to the post box
      postBox.classList.add('hide-transition');
});

// Remove the hide class from the post box after a delay
setTimeout(() => {
      postBox.classList.remove('hide');
}, 1000);


// Remove the hide class from the post box
postBox.classList.remove('hide');

// Wait for the transition to complete
setTimeout(() => {
  // Remove the hide-transition class from the post box
  postBox.classList.remove('hide-transition');
}, 300);

 */








//Nav Change on Scroll
let nav = document.querySelector('nav')


window.addEventListener('scroll', () => {

      nav.classList.toggle('shadow', window.scrollY > 0);
})








