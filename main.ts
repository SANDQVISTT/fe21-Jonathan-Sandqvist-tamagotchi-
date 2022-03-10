

class TamaGucci {
    public hunger: number = 5;
    public happiness: number = 5;
    public firstTimer: number
    public secondTimer: number
    private btn: HTMLButtonElement;


    constructor(
        public readonly name: string,
        public readonly animalType: string) {
        this.firstTimer = setInterval(this.minHunger.bind(this), 2000);
        this.secondTimer = setInterval(this.minhappiness.bind(this), 2500);


        this.btn = document.querySelector('#PLAY');
        this.btn.addEventListener('click', () => {
            this.buttonPlay();
        })

        
    }

    showInfo() {
         document.querySelector(".ShowHunger").innerHTML = `${this.hunger}.` 
         document.querySelector(".ShowHappy").innerHTML = `${this.happiness}.` 
         
        
       /*  if (this.hunger>=0) 
    else throw new Error("no support");*/}

    

    buttonFeed() {
        this.hunger--;
        console.log(this.hunger);
       
        
        
    }
    buttonPlay() {
        this.happiness++;
        console.log(this.happiness);
        
    }



    minHunger() {
        this.hunger++;
        console.log(this.hunger)
        if (this.hunger >= 10)
        tama.showInfo();

            return clearInterval(this.firstTimer)
           


    }
    minhappiness() {
        this.happiness--;
        console.log(this.happiness)
        if (this.happiness <= 0)
            return clearInterval(this.secondTimer)
            tama.showInfo();
           

    }
   

}

const tama = new TamaGucci('jonte', 'dragon');

tama.showInfo();

const feedButton = document.querySelector('#FEED');
feedButton.addEventListener("click", function () {
    tama.buttonFeed();
});

const happyButton = document.querySelector('#PLAY');
