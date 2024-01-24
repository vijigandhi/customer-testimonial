"use strict"
let container=document.getElementById("container")

let div=document.createElement("div")
div.setAttribute("class","innercontainer2")

let left_arrow=document.createElement("button");
left_arrow.innerText="<"
left_arrow.id="left_btn"

let Right_arrow=document.createElement("button");
Right_arrow.innerText=">"
Right_arrow.id="right_btn"

let innercontainer=document.querySelector(".innercontainer");
// let h3=document.getElementById("h3");

let custname=document.getElementsByTagName("h3");
let designation=document.getElementById("designation");

let image=document.getElementById("image");

let p_content=document.getElementsByTagName("p");

container.append(div);
div.append(left_arrow,Right_arrow);

let card_Obj=[

    {
        src:"viji.jpeg",
        Name:"Vijayalakshmi",
        Degin:"Backend Develepor",
        About:"The trial was riveting, the discourse after was however"+
        "somewhat tedious and long winded. Overall a very good book," +
        "easy to read with several good plot twists."+
        "Very unrealistic, poorly researched"
    },
    
    {
        src:"guna.jpg",
        Name:"Gunasri",
        Degin:"Web Developer",
        About:"Lorem ipsum, or lipsum as it is sometimes known, is dummy "+
        "text used in laying out print, graphic or web designs."
    
    },
    {
        src:"theetshi.jpg",
        Name:"Theetshitha",
        Degin:"Designer",
        About:"It is a long established fact that a reader will be" +
        "distracted by the readable content of a page when looking at "+
        "its layout."
    }
]

Right_arrow.addEventListener("click",function(){
    rightArrow(this)
});

left_arrow.addEventListener("click",function(){
    rightArrow(this)
});

let valid=1;

function rightArrow(x)
    {
    if(x.innerHTML==Right_arrow.innerHTML)
    {
        if(valid==3)
        {
            valid=0
        }
        else
        {
            image.src=card_Obj[valid].src;
            custname[0].innerText=card_Obj[valid].Name;
            designation.innerHTML=card_Obj[valid].Degin;
            p_content[0].innerHTML=card_Obj[valid].About;
            valid++;
        }

    }
    else 
    {
        if(valid==1)
        {
            valid=4
        }
        else
        {
            valid=valid-2
            if(valid>=0)
            {
                image.src=card_Obj[valid].src;
                custname[0].innerText=card_Obj[valid].Name;
                designation.innerHTML=card_Obj[valid].Degin;
                p_content[0].innerHTML=card_Obj[valid].About;
                valid++
            }
            else
            {
                valid=1;

            }   
        }

    }
}