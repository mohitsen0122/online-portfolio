console.log('hello javascript');
function toggleCardsPageTheme() {
    document.querySelector('.places').classList.toggle('invert-color-section');
    if(document.querySelector('label').classList.contains('btn-bg-color-dark') === true){
        document.querySelector('.button').classList.remove('btn-bg-color-dark');
        document.querySelector('.button').classList.toggle('btn-bg-color-white');
        
        console.log(true);
    } else {
        document.querySelector('.button').classList.remove('btn-bg-color-white');
        document.querySelector('.button').classList.toggle('btn-bg-color-dark'); 
        console.log(false);
    }
    document.querySelector('.bg-img').classList.toggle('bg-img-body');

    //tx-dec inv-txt-clr
    //bg-gradient
}
function toggleIndexPageTheme() {
    toggleCardsPageTheme();
    document.querySelector('.tx-dec').classList.toggle('inv-txt-clr');
}

function addCustomizedCard() {
    let cardCountRow = 2;
    let cardCountColumn = 0;
    
    if(cardCountRow <= 0){

        let cardNewRow = document.querySelector('.bg-img');
        cardNewRow = myCard.innerHTML + `<div class=""> 
        <div class="row 'card-count'+${cardCountRow} mt-5">
        
            </div>
        </div>`;
        cardCountColumn++;
    }
    let myCard = document.querySelector('.card-count'+`${cardCountColumn}`);
    myCard.innerHTML = myCard.innerHTML + `<div class="col-md-3">
    <div class="card card-gap place-img">
        <img class="card-img-top card-img" src="./images/portfolio3.png" alt="online-portfolio">
        <div class="card-body">
            <div class="">
                <h4 class="card-title"></h4>
                <p class="card-text"></p>
                <a href="./index.html" class="btn btn-primary">Portfolio</a>
            </div>
        </div>
    </div>
</div>`;
}