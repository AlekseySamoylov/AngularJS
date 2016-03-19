/**
 * Created by alekseysamoylov on 3/13/16.
 */
(function() {
    var app = angular.module('store', []);

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }
    });



    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems2 = [
        { name: 'Azurite', price: 2.95 },
        { name: 'Bloodstone', price: 5.95 },
        { name: 'Zircon', price: 3.95 }
    ];

    var gems = [
        {
        name: 'Dodecahedron',
        price: 2,
        description: 'Simple thing',
        canPurchase: false,
        soldOut: false,
        images: [
            {
                full: 'img/1full.jpg',
                thumb: 'img/1.jpg'
            },
            {
                full: 'img/4.jpg',
                thumb: 'img/4.jpg'
            }
        ],
    },
        {
            name: 'Maria',
            price: 22.95,
            description: 'Good girl',
            canPurchase: false,
            soldOut: true,
            images: [
                {
                    full: 'img/2full.jpg',
                    thumb: 'img/2.jpg'
                },
                {
                    full: 'img/4.jpg',
                    thumb: 'img/4.jpg'
                }
            ],
        },
        {
            name: 'Katya',
            price: 21.95,
            description: 'Bad girl',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'img/3full.jpg',
                    thumb: 'img/3.jpg'
                },
                {
                    full: 'img/4.jpg',
                    thumb: 'img/4.jpg'
                }
            ],
        }
    ];
})();