beard_x = "";
beard_y = "";

hat_x = "";
hat_y = "";

glasses_x = "";
glasses_y = "";
function preload(){
beard = loadImage("https://i.postimg.cc/qRjjXS7X/beard3-removebg-preview.png");
hat = loadImage("https://i.postimg.cc/KYjc4kf6/painter-hat-removebg-preview-1.png");
glasses = loadImage("https://i.postimg.cc/wBRcKkZM/glasses-removebg-preview-1.png");        
}

function setup(){
canvas = createCanvas(300,300);
canvas.position(490,150);
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)

}

function modelLoaded() {
 console.log('PoseNet is ready and watching');   
}

function draw(){
image(video , 0,0,300,300);

image(beard , beard_x,beard_y ,75,75);
image(hat , hat_x, hat_y, 85, 100);
image(glasses , glasses_x , glasses_y, 100,100)
}

function take_snappy(){
    save('my_pic.png') 
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
hat_x = results[0].pose.nose.x-40;
hat_y = results[0].pose.nose.y-110;

beard_x = results[0].pose.nose.x-40;
beard_y = results[0].pose.nose.y+5;

glasses_x = results[0].pose.nose.x-50;
glasses_y = results[0].pose.nose.y-70;

console.log("nose x =" + results[0].pose.nose.x);
console.log("nose y =" + results[0].pose.nose.y);
}    
} 
