//Function for hamburger icon
function myfunc(){
    let bur=document.getElementById('hamb');
     
    if(bur.style.display=='none'){
        bur.style.display='flex';
        document.getElementById('hamburger').innerHTML='x';
    }
    else{
        bur.style.display='none';
        document.getElementById('hamburger').innerHTML='&equiv;';
    }
}

// For showing image
// to show img1
function showimg1(){
    moreimg1.style.display='block';
    moreimg2.style.display='none';
    moreimg3.style.display='none';
    moreimg4.style.display='none';
    moreimg5.style.display='none';
}
// to show img2
function showimg2(){
    moreimg1.style.display='none';
    moreimg2.style.display='block';
    moreimg3.style.display='none';
    moreimg4.style.display='none';
    moreimg5.style.display='none';
}
// to show img3
function showimg3(){
    moreimg1.style.display='none';
    moreimg2.style.display='none';
    moreimg3.style.display='block';
    moreimg4.style.display='none';
    moreimg5.style.display='none';
}
// to show img4
function showimg4(){
    moreimg1.style.display='none';
    moreimg2.style.display='none';
    moreimg3.style.display='none';
    moreimg4.style.display='block';
    moreimg5.style.display='none';
}
// to show img5
function showimg5(){
    moreimg1.style.display='none';
    moreimg2.style.display='none';
    moreimg3.style.display='none';
    moreimg4.style.display='none';
    moreimg5.style.display='block';
}
//show some/more
function Showless1(){
    if(pa1.style.display=='block'){
        pa1.style.display='none';
        document.getElementById('Show1').innerText='Show More';
    }
    else {
        pa1.style.display='block';
        document.getElementById('Show1').innerText='Show Less';
    }
}

function Showless2(){
    if(pa2.style.display=='block'){
        pa2.style.display='none';
        document.getElementById('Show2').innerText='Show More';
    }
    else {
        pa2.style.display='block';
        document.getElementById('Show2').innerText='Show Less';
    }
}

function Showless3(){
    if(pa3.style.display=='block'){
        pa3.style.display='none';
        document.getElementById('Show3').innerText='Show More';
    }
    else {
        pa3.style.display='block';
        document.getElementById('Show3').innerText='Show Less';
    }
}


//show graph
graphs.style.display='none';
function showGraphs(){
    if(graphs.style.display=='none'){
        graphs.style.display='block';
        document.getElementById('showG').innerText='<<Hide Stats';
    }
    else{
        graphs.style.display='none';
        document.getElementById('showG').innerText='Show Stats>>';
    }
}
