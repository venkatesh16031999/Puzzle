var drop=new Vue({
    el:'#drop',
    data:{
        page:"welcomepage",
        score:0,
        clickcount:0,
        data:[
            {
            id:"1",
            tech:"html",
            img:"./images/html.png"
            },
            {
                id:"2",
                tech:"css",
                img:"./images/css.png"
            },
            {   
                id:"3",
                tech:"react",
                img:"./images/react.png"
            },
            {   
                id:"4",
                tech:"bootstrap",
                img:"./images/bootstrap.png"
            },
            {   
                id:"5",
                tech:"redux",
                img:"./images/redux.png"
            },
            {   
                id:"6",
                tech:"postgresql",
                img:"./images/postgresql.png"
            },
            {   
                id:"7",
                tech:"bootstrap",
                img:"./images/bootstrap.png"
            },
            {   
                id:"8",
                tech:"html",
                img:"./images/html.png"
                },
                {   
                    id:"9",
                    tech:"css",
                    img:"./images/css.png"
                },
                {   
                    id:"10",
                    tech:"react",
                    img:"./images/react.png"
                },
                {   
                    id:"11",
                    tech:"bootstrap",
                    img:"./images/bootstrap.png"
                },
                {   
                    id:"12",
                    tech:"redux",
                    img:"./images/redux.png"
                },
                {   
                    id:"13",
                    tech:"postgresql",
                    img:"./images/postgresql.png"
                },
                {   
                    id:"14",
                    tech:"bootstrap",
                    img:"./images/bootstrap.png"
                },
               
               
        ],
        found:[]
    },

    methods:{
        game(cards,index){
            
            if(this.found.length>=2){
                this.found=[];
            }
            
            this.found.push(cards)

            if(this.found.length>=2){
                console.log(this.found);
               setTimeout(()=>{
                for(let index=0;index<this.data.length;index++){
                    document.getElementById(this.data[index].tech+this.data[index].id).style.transform="rotateY(0deg)";
                }
                for(let card of this.found){
                    if(this.found[0].tech==this.found[1].tech && this.found[0].id!=this.found[1].id){
                        document.getElementById(card.tech+card.id).style.display="none";
                        flag=1;
                        this.score++;
                    }
                }
               },1000)
 
            }
                document.getElementById(cards.tech+index).style.transform="rotateY(180deg)";

        },

        shuffle(){
            this.score=0;
            for(let index=0;index<this.data.length;index++){
                document.getElementById(this.data[index].tech+this.data[index].id).style.display="block";
                document.getElementById(this.data[index].tech+this.data[index].id).style.transform="rotateY(0deg)";
            }
            this.data.sort(()=>{
               return Math.random()-0.5;
            });
          this.found=[];
          

        }
    }


});