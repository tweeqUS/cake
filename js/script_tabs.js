"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const tabsItem = document.querySelectorAll('.tabs-item');
    const tabsImg = document.querySelectorAll('.tabs');
    const tabsItemControl = document.querySelector('.tabs-items');
    const contentTabs = document.querySelector('.cake_item_img');
    const tabsDiscription = document.querySelectorAll('.tabs-content-discription');
    const contenetTabsBlock = document.querySelector('.content-tabs');
    
    

    function tabsHideContent () {
        tabsImg.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })

       tabsItem.forEach((item) => {
        item.classList.remove('tabheader__item_active');

       });

    }

    function showTabContent(i = 0) {
        tabsImg[i].classList.add('show', 'fade');
        tabsImg[i].classList.remove('hide');
        tabsItem[i].classList.add('tabheader__item_active');
    }

    tabsHideContent();
    showTabContent();

    tabsItemControl.addEventListener('click', (event) => {
        const target = event.target;
        
        if(target && target.classList.contains('tabs-item')) {
            tabsItem.forEach((item, i) => {
                if (target == item) {
                    tabsHideContent();
                    showTabContent(i);
                }
            })
        }

    })
    
    
        tabsImg.forEach(item => {
            item.addEventListener('mouseover', (event) => {
                const target = event.target;
                // console.log(target);
                
    
                if(target && target.classList.contains('cake_item_img')) {
                    console.log('картинка');   
                    tabsDiscription.forEach(item => {
                        item.classList.add('tabs-opacity');
                    }) 
                    };
                }
            );

            item.addEventListener('mouseout', (event) => {
                const target = event.target;
                // console.log(target);
    
                if(target && target.classList.contains('cake_item_img')) {
                    // console.log('картинка');   
                    tabsDiscription.forEach(item => {
                        item.classList.remove('tabs-opacity');
                    })
                    
                }
                
            })
        });
    
    

});
