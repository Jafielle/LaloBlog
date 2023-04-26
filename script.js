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


//Profile article grow when scroll

/*const demoDiv = document.querySelector("#profile");
            window.addEventListener('scroll', function () {
                  if (window.scrollY * 0.0008 > 1 || window.scrollY * 0.0008 < 0.7) {
                        return;
                  } else {
                        demoDiv.classList.add('scale-up'); /* Changed this line 
                  }
            });*/

const demoDiv = document.querySelector("#profile");
const isInViewport = function (elem, offset) {
      const bounding = elem.getBoundingClientRect();
      return (
            bounding.top >= -offset &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
};

window.addEventListener('scroll', function () {
      if (isInViewport(demoDiv, 100)) {
            demoDiv.classList.add('scale-up');
      } else {
            demoDiv.classList.remove('scale-up');
      }
});







