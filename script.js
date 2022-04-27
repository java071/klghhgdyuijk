function print_contact() {
      var sk = "skype:@helper"
      var tg = "telegram:helper" 
      var tel = "tel:896449398680"
      alert(sk+'\h'+tg+'\h'+tel)
}

function show_modal(){
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
}

function back_modal(){
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
}

// function star(k){



//       var ids = ["star_f_1" ,
//       "star_f_2" ,
//       "star_f_3" ,
//       "star_f_4" ,
//       "star_f_5" ];

//       for (let i=0 ; ids.length ; i++)
//       {
//             b = ids[i]
//             a = document.getElementById(b)
//             a.src="star_1.png";

//       }
//}

// function show_star(k) {

// k=k-1
// var ids = ["star_f_1" , "star_f_2" , "star_f_3" , "star_f_4" , "star_f_5"];

// b = ids[k]
// a = document.getElementById(b);

// if (a.src.indexOf("star_2.png")>-1)
// {
//       for (let i=0 ; i<=k ; i++)
//       {
//             b = ids[i]
//             a = document.getElementById(b);
//             a.src="star_1.png";

//       }


// }

function star(k) {
      var ids = ["star_f_1" ,
      "star_f_2" ,
      "star_f_3" ,
      "star_f_4" ,
      "star_f_5" ,];

      for   (let i=0 ; ids.length ; i++)
      {
            b = ids[i]
            a = document.getElementById(b);
            a.src="star_1.png";
      }
}



// else
// {
//       for   (let i=0 ; i<ids.length ; i++)
//       {
//             if(i>k)
//             {
//                   b = ids[i]
//                   a = document.getElementById(b);
//                   a.src="star_2.png";     
//             }


//       }

// }

