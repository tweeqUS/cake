"use srtict";

document.addEventListener('DOMContentLoaded', () => {
    
    class MenuCard {
        constructor(imgSrc, alt, textOne, textTwo, textHidden , parentSelector) {
            this.imgSrc = imgSrc;
            this.alt = alt;
            this.textOne = textOne;
            this.textHidden = textHidden;
            this.textTwo = textTwo;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const card = document.createElement('div');
            card.className = 'card';
      const cardInfo = document.createElement('div');
            cardInfo.className = 'card-info';
            card.append(cardInfo);  
      const cardImgBlock = document.createElement('div');
            cardImgBlock.className = 'card-img-block ';
            cardInfo.append(cardImgBlock);
      const cardImg = document.createElement('img');
            cardImg.className = 'card-img';
            cardImg.src = this.imgSrc;
            cardImg.alt = this.alt;
            cardImgBlock.append(cardImg);   
      const cardTextBlock = document.createElement('div');
            cardTextBlock.className = 'card-text-block';
            cardInfo.append(cardTextBlock);
      const cardTextHeader = document.createElement('div');
            cardTextHeader.className = 'card-text-header';
            cardTextBlock.append(cardTextHeader);
      const cardTextOne = document.createElement('p');
            cardTextOne.className = 'card-text-one';
            cardTextOne.textContent = this.textOne;
            cardTextHeader.append(cardTextOne);
      const cardTextDescr = document.createElement('div');
            cardTextDescr.className = 'card-text-descr';
            cardTextBlock.append(cardTextDescr);
      const cardTextTwo = document.createElement('p');
            cardTextTwo.className = 'card-text-two';
            cardTextTwo.textContent = this.textTwo;
            cardTextDescr.append(cardTextTwo);
      const cardTextHiden = document.createElement('p');
            cardTextHiden.className = 'card-text-hidden';
            cardTextHiden.textContent = this.textHidden;
            cardTextDescr.append(cardTextHiden);
      const cardButton = document.createElement('button');
            cardButton.dataset.modal = '';
            cardButton.className = 'card-button';
            cardButton.textContent = 'Заказать';
            cardTextDescr.append(cardButton);

            this.parent.append(card);
        }
    }

    new MenuCard(
        "img/card-1-active.png",
        "one card",
        "bakery",
        'bread',
        'Булочка лиловая, cпелая - садовоя. Булочка лиловая, cпелая - садовоя.',
        '.card-content'
    ).render();

    new MenuCard(
        "img/card-1-active.png",
        "one card",
        "bakery",
        'bread',
        'Булочка лиловая, cпелая - садовоя. Булочка лиловая, cпелая - садовоя.',
        '.card-content'
    ).render();

    new MenuCard(
        "img/card-1-active.png",
        "one card",
        "bakery",
        'bread',
        'Булочка лиловая, cпелая - садовоя. Булочка лиловая, cпелая - садовоя.',
        '.card-content'
    ).render();

    new MenuCard(
        "img/card-1-active.png",
        "one card",
        "bakery",
        'bread',
        'Булочка лиловая, cпелая - садовоя. Булочка лиловая, cпелая - садовоя.',
        '.card-content'
    ).render();

    new MenuCard(
        "img/card-1-active.png",
        "one card",
        "bakery",
        'bread',
        'Булочка лиловая, cпелая - садовоя. Булочка лиловая, cпелая - садовоя.',
        '.card-content'
    ).render();

    new MenuCard(
        "img/card-1-active.png",
        "one card",
        "bakery",
        'bread',
        'Булочка лиловая, cпелая - садовоя. Булочка лиловая, cпелая - садовоя.',
        '.card-content'
    ).render();

    new MenuCard(
        "img/card-1-active.png",
        "one card",
        "bakery",
        'bread',
        'Булочка лиловая, cпелая - садовоя. Булочка лиловая, cпелая - садовоя.',
        '.card-content'
    ).render();

    new MenuCard(
        "img/card-1-active.png",
        "one card",
        "bakery",
        'bread',
        'Булочка лиловая, cпелая - садовоя. Булочка лиловая, cпелая - садовоя.',
        '.card-content'
    ).render();

    
    //Функционал работы карточек

    const cards = document.querySelectorAll('.card');
    const cardImgBlockActive = document.querySelectorAll('.card-img-block');
    const cardImgActive = document.querySelectorAll('.card-img');
    const textBlockActive = document.querySelectorAll('.card-text-block');
    const cardTextOneActive = document.querySelectorAll('.card-text-one');
    const cardTextDescrActive = document.querySelectorAll('.card-text-descr');
    const cardTextTwoActive = document.querySelectorAll('.card-text-two');
    const cardTextHidenActive = document.querySelectorAll('.card-text-hidden');
    const cardButtonActive = document.querySelectorAll('.card-button');
    
    function cardHidden () {
            
            cards.classList.remove('card-active');
            cardImgBlockActive.classList.remove('card-img-block-active');
            cardImgActive.classList.remove('card-img-active');
            textBlockActive.classList.remove('text-block-active');
            cardTextOneActive.classList.remove('text-one-active');
            cardTextDescrActive.classList.remove('text-descr-active');
            cardTextTwoActive.classList.remove('text-two-active');
            cardTextHidenActive.classList.remove('card-text-hidden-active');
            cardButtonActive.classList.remove('card-button-active');
              
    }

    function cardActive (i) {
        cards[i].classList.toggle('card-active');
        cardImgBlockActive[i].classList.toggle('card-img-block-active');
        cardImgActive[i].classList.toggle('card-img-active');
        textBlockActive[i].classList.toggle('text-block-active');
        cardTextOneActive[i].classList.toggle('text-one-active');
        cardTextDescrActive[i].classList.toggle('text-descr-active');
        cardTextTwoActive[i].classList.toggle('text-two-active');
        cardTextHidenActive[i].classList.toggle('card-text-hidden-active');
        cardButtonActive[i].classList.toggle('card-button-active');

    }

    cardActive(i = 0);



   cards.forEach((card, i) => {
        card.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('card-img')) {
                // cardHidden();
                cardActive(i); 
            }      
            
            
        });     
   });
  
    

//     function cardHide () {
//         cards.forEach((item) => {
//             item.classList.add('card-hide');
//             item.classList.remove('card-active');
//         });

//         cardImgBlockActive.forEach((item) => {
//             item.classList.add('card-img-block-hide');
//             item.classList.remove('card-img-block-active');
//         })

//         cardImgActive.forEach((item) => {
//             item.classList.add('card-img-hide');
//             item.classList.remove('card-img-active');
//         });

//         cardTextOneActive.forEach((item) => {
//             item.classList.add('card-text-one-hide');
//             item.classList.remove('text-one-active');
//         });
        
        

//     }

// //  cardHide();


//     function cardActive (i) {
//             cards[i].classList.remove('card-hide');
//             cards[i].classList.add('card-active');

//             cardImgBlockActive[i].remove('card-img-block_hide');
//             cardImgBlockActive[i].add('card-img-block-active');

//             cardImgActive[i].classList.remove('card-img-hide');
//             cardImgActive[i].classList.add('card-img-active');


//             cardTextOneActive[i].classList.remove('card-text-one-hide');
//             cardTextOneActive[i].classList.add('text-one-active');
            
//             // cardImgBlockActive[i].classList.add('card-img-block-active');
//             // cardImgActive[i].classList.add('card-img-active');
//             // textBlockActive[i].classList.add('text-block-active');
//             // cardTextOneActive[i].classList.add('text-one-active');
//             // cardTextDescrActive[i].classList.add('text-descr-active');
//             // cardTextTwoActive[i].classList.add('text-two-active');
//             // cardTextHidenActive[i].classList.add('card-text-hidden-active');
//             // cardButtonActive[i].classList.add('card-button-active');
//         }
    
//         // cardActive(i = 0);

//         cardHide();


//         cards.forEach((card, i) => {
//           card.addEventListener('click', (event) => {
//           const target = event.target;
//           if (target && target.classList.contains('card-img')) {
//               cardHide();
//               cardActive(i); 
//           }      
//           });     
//         });




});

