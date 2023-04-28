
//Profile article grow when scroll

/*const demoDiv = document.querySelector("#profile");
            window.addEventListener('scroll', function () {
                  if (window.scrollY * 0.0008 > 1 || window.scrollY * 0.0008 < 0.7) {
                        return;
                  } else {
                        demoDiv.classList.add('scale-up'); /* Changed this line 
                  }
            });*/

            const profileArticle = document.querySelector("#profile");
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
                  if (isInViewport(profileArticle, 60)) {
                        profileArticle.classList.add('scale-up');
                  } else {
                        profileArticle.classList.remove('scale-up');
                  }
            });
            