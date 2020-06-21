let lines=document.getElementById('lines');
let img_exit=document.getElementById('img-close');
let vsp_menu=document.getElementById('vspliv-menu');
let header=document.getElementById('header123');
let body=document.getElementById('body');
let l_arr=document.getElementsByClassName('arrow-l')[0];
let r_arr=document.getElementsByClassName('arrow-r')[0];
let new_card=document.getElementsByClassName('news-card');
lines.onclick=function(){
  lines.style.display="none";
  img_exit.style.display="block";
  vsp_menu.style.display="flex";
  header.style.position="fixed";
  header.style.top="0";
  header.style.left="0";
  header.style.background="#FFF";
  header.style.width="100%";
  body.style.overflow="hidden";
}
img_exit.onclick=function(){
  img_exit.style.display="none";
  lines.style.display="block";
  vsp_menu.style.display="none";
    header.style.position="relative";
    body.style.overflow="visible";
}
r_arr.onclick=function(){

  for (var i = 0; i < new_card.length; i++) {
    let buf=getComputedStyle(new_card[i]);

    if (buf.display=='block')
      {
        if (i==3)
        {
          new_card[i].style.display='none';
          new_card[0].style.display='block';
          break;
        }
        else
        {
        new_card[i].style.display='none';
        new_card[i+1].style.display='block';
        break;
        }
      }
  }
}

l_arr.onclick=function(){
  for (var i = 0; i < new_card.length; i++) {
    let buf2=getComputedStyle(new_card[i]);

    if (buf2.display=='block')
      {
        if (i==0)
        {
          new_card[i].style.display='none';
          new_card[3].style.display='block';
          break;
        }
        else
        {
        new_card[i].style.display='none';
        new_card[i-1].style.display='block';
        break;
        }
      }
  }
}
