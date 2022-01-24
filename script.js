var obj = [
    {
        id : 1,
        image : "https://images.pexels.com/photos/6078746/pexels-photo-6078746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        pname : "hadd hai",
        post : "https://images.pexels.com/photos/6078762/pexels-photo-6078762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        likes : 2530,
        duration : "1 week ago"
    },
    {
        id : 2,
        image : "",
        pname : "Jokes",
        post : "",
        likes : 4030,
        duration : "2 week ago"   
    }
];
function createPost(item){

var body = document.body;
var main = document.createElement('section');
main.className = 'main';
var heading = document.createElement('div');
heading.className = 'heading';
var span = document.createElement('span');
var image = document.createElement('img');
image.className = "profile-icon";
image.src = item.image;
var span2 = document.createElement('span');
span2.innerText = item.pname;
var post_img = document.createElement('img');
post_img.className = 'post-img';
post_img.src = item.post;

main.appendChild(heading.appendChild(span.appendChild(image)));
heading.appendChild(span2);
main.appendChild(post_img);
body.appendChild(main);

}
let i = obj[0];
function createPost(i);