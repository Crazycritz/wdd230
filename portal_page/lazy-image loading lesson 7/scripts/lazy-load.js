//get all ims with data-src attribute - square brackets means look for attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");



//optional parameters being set for the observer
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px"
};


//Change the place holder src with the data src to swap the image once loaded
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

/////////Check to see if intersection observers is supported and working/////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
// Guide From MDN - https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

  //The imagesToLoad variable contains references to all the images, while the loadImages function moves the path from data-src to src. When each image is actually loaded, we remove its data-src attribute as it's not needed anymore. Then we loop through each image and load it: