import axios from 'axios'

// const productList = [
//     {
//         id: '123',
//         title: "Blue Drum Set",
//         description: 'Blue drums description',
//         brand: 'Yamaha',
//         price: 89999,
//         image: 'https://www.yamaha.com/yamahavgn/PIM/Images/19027_12073_1_1200x1200_80813f268e73483818697e99937dbd59.jpg',
//     },
//     {
//         id: '234',
//         title: "Red Drum Set",
//         description: 'Red drums description',
//         brand: 'Yamaha',
//         price: 99999,
//         image: 'https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg',
//     },
// ]

const sampleUserData = {
    id: '007',
    firstName: 'Aaron',
    lastName: 'Russell',
    email: 'adrusselljr@mail.com',
}

export const fetchProductData = () => axios.get('http://localhost:8000/get-products')

export const logInUserRequest = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({ data: sampleUserData })
    }, 1000)
})

export const logOutUserRequest = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Sign out successful')
    }, 1000)
})