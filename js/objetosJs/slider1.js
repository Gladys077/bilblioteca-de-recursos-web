



export class CrearSlider {
    constructor(padre) {
        this.agregarAlFront(padre);
        
    }
    agregarAlFront(padre = 'iframe') {
        const papa = document.querySelector(padre);
        papa.appendChild(this.armarSlider());
    }
     armarSlider() {
        const divcontent = document.querySelector("#iframe")
        divcontent.srcdoc = `
        
        <head>
    
    <script src="https://kit.fontawesome.com/2d9fe71672.js" crossorigin="anonymous"></script>   
    <style>
       

.body{
    background: #565656;
}

.slider-wrap{
    display: flex;
    max-width: 700px;
    align-items: center;
    justify-content: center;
    margin: 10% auto;
    
    #backBtn{
        left: 22px;
    }
    
    #nextBtn{
        right: 22px;
    }

    #backBtn, #nextBtn {
        width: 50px;
        height: 50px;
        background: lightblue;
        text-align: center;
        line-height: 50px;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
    
        font-size: 1.25rem;
        transform: translateY(-50%);
        box-shadow: 0 3px 6px rgba(0,0,0,0.23);
        transition: transform 0.1s linear;
        z-index: 10;

        &:active {
            transform: translateY(-50%) scale(0.85);
        }   
    }

    
    .slider{
        display: flex; 
        max-width: 600px;
        /*flex: none;*/
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scrollbar-width: none;
        position: relative; 
        /*width: 100%;*/

        &::-webkit-scrollbar{/*no compatible con firefox*/
            display: none;
        }

        div{
            display: grid;
            width: 100%;
            grid-auto-flow: column;
            grid-auto-columns: calc((100% / 3) - 12px);
            grid-gap: 20px;
            padding: 10px;
            flex: auto;
            
            img {
                width: 200px;
                filter: grayscale(100%);
                transition: transform 0.5s;
                
                object-fit: cover;
                scroll-snap-align: center;
                
                &:hover{
                    filter: grayscale(0);
                    cursor: pointer;
                    transform: scale(1.1);
                }
            }
        }
    
    }/*fin .slider*/

    
}/*fin .slider-wrap */






@media screen and (max-width: 800px){
    .slider-wrap{
        .slider {
            div { grid-auto-columns: calc((100% / 2) - 9px); }
        }
    }
}

@media screen and (max-width: 600px){
    .slider-wrap{
        margin: 5% auto;
        
        #backBtn{
            left: 10px;
        }
        
        #nextBtn{
            right: 10px;
        }
        #backBtn, #nextBtn {
            width: 30px;
            height: 30px;
            line-height: 30px;
        }
        .slider {
            div { grid-auto-columns: calc(100%); }
        }    
    }    

    
}

    </style>
</head>

<section class="body">
    <div class="slider-wrap">
        <i class="fa-solid fa-angle-left" id="backBtn"> </i>
        
        <section class="slider" id="contenedor">
            
            <div>
                <span><img src="./img/objetos/imgSliders/img01.jpeg" alt="Img de Abadango Cluster Princess" /></span>
                <span><img src="./img/objetos/imgSliders/img02.jpeg" alt="img de Abradolf Lincler.jpeg" /></span>
                <span><img src="./img/objetos/imgSliders/img03.jpeg" alt="img de Adjudicator Rick" /></span>  
            </div>    
            <div>    
                <span><img src="./img/objetos/imgSliders/img04.jpeg" alt="img de Agency Director" /></span>
                <span><img src="./img/objetos/imgSliders/img05.jpeg" alt="img de Aqua Morty" /></span>
                <span><img src="./img/objetos/imgSliders/img06.jpeg" alt="img de Alan Rails" /></span>
            </div>
            <div>    
                <span><img src="./img/objetos/imgSliders/img07.jpeg" alt="img de Beth Smith" /></span>
                <span><img src="./img/objetos/imgSliders/img08.png" alt="img de Jerry Smith" /></span>
                <span><img src="./img/objetos/imgSliders/img09.png" alt="img de Morty Smith" /></span>
            </div>
                
        </section>
        
        <i class="fa-solid fa-angle-right" id="nextBtn"> </i>        
    </div>

<script>

        
    //Funcionalidades scroll
    let scrollContainer = document.querySelector(".slider");
    let backbtn = document.querySelector("#backBtn");
    let nextbtn = document.querySelector("#nextBtn");


    scrollContainer.addEventListener("wheel", (evt)=>{
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior ="auto";
    })

    nextbtn.addEventListener("click",() => {
        scrollContainer.style.scrollBehavior ="smooth";
        scrollContainer.scrollLeft += 900;
    })
    backbtn.addEventListener("click",() => {
        scrollContainer.style.scrollBehavior ="smooth";
        scrollContainer.scrollLeft -= 900;
    })
</script>

</section>

        
        `
        return divcontent;
     
        }/*Fin armarLoader*/

        
    }