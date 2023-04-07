const slidesData = [
    {
        slideTitle: 'Краски',
        slideDesc: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!'
    },
    {
        slideTitle: 'Краски 1',
        slideDesc: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!'
    },
    {
        slideTitle: 'Краски 2',
        slideDesc: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!'
    },
]



const productsList = [
    {
        id: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        data: '2023-03-11',
        inStock: 0,
        isExclusive: true,
        sale: false,  
        isContract: false,
        rating: 4.7,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo.jpg"
    },
    {
        id: 2,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 3400,
        data: '2023-01-11',
        inStock: 50,
        isExclusive:false,
        sale: true,  
        isContract: true,
        rating: 4.1,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo9.png"
    },
    {
        id: 3,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        data: '2023-01-01',
        inStock: 50,
        isExclusive:false,
        rating: 4.5,
        sale: true,  
        isContract:false,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo8.png"
    },
    {
        id: 4,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        data: '2023-04-04',
        inStock: 50,
        isExclusive: true,
        rating: 5,
        sale:false,  
        isContract: true,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo7.png"
    },
    {
        id: 5,
        title: "Краска Wallquest, Brownsone MS90102",
        price: "2400",
        data: '2023-01-04',
        inStock: 50,
        isExclusive:false,
        sale:false,  
        rating: 3,
        isContract: true,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo5.png"
    },
    {
        id: 6,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        data: '2023-03-27',
        inStock: 50,
        isExclusive: true,
        sale:false,  
        rating: 4.3,
        isContract: true,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo4.png"
    },
    {
        id: 7,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        data: '2023-03-31',
        inStock: 50,
        isExclusive: true,
        sale:false,  
        isContract:false,
        rating: 4.9,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo3.png"
    },
    {
        id: 8,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4000,
        data: '2023-02-04',
        inStock: 50,
        isExclusive:false,
        sale:false,  
        isContract: true,
        rating: 4.8,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo2.png"
    },
    {
        id: 9,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 3400,
        data: '2023-02-18',
        inStock: 50,
        isExclusive:false,
        sale: true,  
        isContract: true,
        rating: 4.7,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo3.png"
    },
    {
        id: 10,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        data: '2022-12-22',
        inStock: 50,
        isExclusive: true,
        sale:false,  
        isContract: true,
        rating: 3,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo.jpg"
    },
    {
        id: 11,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        data: '2023-01-01',
        inStock: 50,
        isExclusive: true,
        sale:false,  
        isContract: true,
        rating: 4,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo9.png"
    },
    {
        id: 12,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        data: '2023-02-28',
        inStock: 50,
        isExclusive:false,
        sale:false,  
        isContract:false,
        rating: 3.9,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo6.png"
    },
    {
        id: 13,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 3400,
        data: '2023-01-04',
        inStock: 50,
        isExclusive:false,
        sale:false,  
        isContract: true,
        rating: 4.2,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo7.png"
    },
    {
        id: 14,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        data: '2023-03-18',
        inStock: 50,
        isExclusive: true,
        sale:false,  
        isContract: true,
        rating: 4.0,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo2.png"
    },
    {
        id: 15,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4000,
        data: '2023-03-28',
        inStock: 50,
        isExclusive:false,
        sale:false,  
        isContract: true,
        rating: 4.9,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo9.png"
    },
    {
        id: 16,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        data: '2023-04-03',
        inStock: 50,
        isExclusive:false,
        sale: true,  
        isContract: true,
        rating: 4.5,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo5.png"
    },
    {
        id: 17,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        data: '2023-04-01',
        inStock:false,
        isExclusive:false,
        sale: true,  
        isContract: true,
        rating: 3,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo2.png"
    },
    {
        id: 18,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        data: '2023-01-29',
        inStock: 50,
        isExclusive:false,
        sale:false,  
        isContract: true,
        rating: 0,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo7.png"
    },
    {
        id: 19,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        data: '2023-03-23',
        inStock: 50,
        isExclusive: true,
        sale: true,  
        isContract:false,
        rating: 2,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo5.png"
    },
    {
        id: 20,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        data: '2023-02-23',
        inStock:false,
        isExclusive:false,
        sale:false,  
        isContract: true,
        rating: 0,
        src: "https://ltdfoto.ru/images/2023/04/02/Photo8.png"
    }
]

const sortOptions= [
        {
            title: 'Сначала дорогие',
            val: 'fromExpensive'
        },
        {
            title: 'Сначала недорогие',
            val: 'fromCheap'
        },
        {
            title: 'Сначала популярные',
            val: 'fromPopular'
        },
        {
            title: 'Сначала новые',
            val: 'fromNew'
        }
    ];


const filters= [
    {
        title: 'Новинки',
        val: 'new'
    },
    {
        title: 'Есть в наличии',
        val: 'inStock'
    },
    {
        title: 'Контрактные',
        val: 'isContract'
    },
    {
        title: 'Эксклюзивные',
        val: 'isExclusive'
    },
    {
        title: 'Распродажа',
        val: 'sale'
    }
];

export {
    slidesData,
    filters,
    sortOptions,
    productsList
};