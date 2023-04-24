/*
const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {

      // Check for Web Share api support
      if (navigator.share) {
            // Browser supports native share api
            navigator.share({
                  text: 'Please read this great article: ',
                  url: 'https://www.google.com/'
            }).then(() => {
                  console.log('Thanks for sharing!');
            })
                  .catch((err) => console.error(err));
      } else {
            // Fallback
            alert("The current browser does not support the share function. Please, manually share the link")
      }
});
*/
//post link
const link = encodeURI('https://google.com');
//sending msg
const msg = encodeURIComponent('Encontré este artículo interesante!');
const title = encodeURIComponent('Article or Post Title Here');
const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;
const twitter = document.querySelector('.twitter');
//mind hashtags
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=alimentos,bioquímica,ciencia`;
const linkedIn = document.querySelector('.linkedin');
linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;
const reddit = document.querySelector('.reddit');
reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;
const whatsapp = document.querySelector('.whatsapp');
whatsapp.href = `https://api.whatsapp.com/send?text=${msg}: ${link}`;
const telegram = document.querySelector('.telegram');
telegram.href = `https://telegram.me/share/url?url=${link}&text=${msg}`;

