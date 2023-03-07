//alert('Conected')

//filterObjects("all")
function filterObjects(filter) {
      let i;
      let postBox = document.getElementsByClassName("post-box");
      if (filter == "");
      for (i = 0; i < postBox.length; i++) {
            removeClass(postBox[i], "show");
            if (postBox[i].className.indexOf(filter) > -1) addClass(postBox[i], "show")
      }

}

function addClass(element, name) {
      let i;
      let arr1 = element.className.split(" ");
      let arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                  element.className += " " + arr2[i]
            }
      }

}


function removeClass(element, name) {
      let i;
      let arr1 = element.className.split(" ");
      let arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                  arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
      }
      element.className = arr1.join(" ")
}



// active btn
$(".filter-item").click(function () {
      $(this).addClass("active-filter").siblings().removeClass("active-filter");
})