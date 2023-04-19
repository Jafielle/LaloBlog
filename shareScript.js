/*
https://api.whatsapp.com/send?text=[post-title] [post-url]

      https://www.facebook.com/sharer.php?u=[post-url]

      https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

https://plus.google.com/share?url=[post-url]


      https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

      $email = 'mailto:?subject=' . $[post-title] . '&body=Check out this site: '. $[post-url] .'" title="Share by Email';


https://www.youtube.com/watch?v=OfLvQ8KtW2g
*/

const fbkShareBtn = document.querySelector('.facebook-share-btn');
const twitterShareBtn = document.querySelector('.facebook-share-btn');
const linkedinShareBtn = document.querySelector('.linkedin-share-btn');
const gmailShareBtn = document.querySelector('.gmail-share-btn');

const whatsappShareBtn = document.querySelector('.whatsapp-share-btn');

function init() {
      const headerImg = document.querySelector('.header-img');


      let postUrl = encodeURI(document.location.href);
      let postShareTitle  = encodeURI('Hola, quiero compartir este articulo');
      let postImg = encodeURI(headerImg.src)

      //fbkShareBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postUrl}`);

      fbkShareBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=[postUrl]`);

      

      twitterShareBtn.setAttribute("href", `https://twitter.com/share?url=${post-url}&text=${postShareTitle}`);

      linkedinShareBtn.setAttribute("href", `https://www.linkedin.com/shareArticle?url=${post-url}&text=${postShareTitle}`);

      
      whatsappShareBtn.setAttribute("href", `hhttps://api.whatsapp.com/send?text=${postShareTitle} ${post-url}`);
      
      /*linkedinShareBtn.setAttribute("href", ` $email = 'mailto:?subject=' . $[post-title] . '&body=Check out this site: '. $[post-url] .'" title="Share by Email';);
      */


}

init();
