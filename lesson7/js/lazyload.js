const image = document.querySelectorAll("[data-src]");


function preloadImage(img){
    const src = img.getAttribure("data-src");
    if(!src){
        return;
    }

    img.src = src;
}


const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver)=> {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});







/*//get all imgs with data src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold:0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

//first check to see if Intersection Observer is supported
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer)) => {
        items.forEach((item) = {...
        });
    }, imgOptions);

    //Loop-through each img and check staus and Load if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}
else {//just load ALL images if not supported..
}*/