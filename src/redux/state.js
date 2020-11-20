let store = {
    _state: {

        profilePage: {
            postsdata: [
                { message: 'Beautiful weather today, isnt it?', likes: '17 ', name: 'Вартан', src: 'https://sun9-26.userapi.com/impf/jxVxBhSAPXneGHZ-Bs3UV8ks3c5lbwdR2QXbQg/FmjMAYNGPtw.jpg?size=1210x643&quality=96&proxy=1&sign=68bb0b26a3f5711c7b4f154320e0deac', contentsrc: 'https://behealthymagazine.ca/wp-content/uploads/IMG_0249-e1552330790161.jpg' },
                { message: 'Created my new profile', likes: '3 ', name: 'Луи', src: 'https://sun9-41.userapi.com/OhUQDZTn2PcEAUvtJAFM2YOWk-kqRtg9ZKY8QA/IqOX0bEq5uQ.jpg', contentsrc: '' },
            ],
            newPostText: 'Hello'
        },


        messagesPage: {
            dialogsdata: [
                { count: 1, dialogname: 'кореш' },
                { count: 2, dialogname: 'Jeka' },
                { count: 3, dialogname: 'Koresh' },
                { count: 4, dialogname: 'Vrotan' },
            ],

            messagedata: [
                { message: 'кореш пососи я учу реакт' },
                { message: 'Oh, hi!' },
                { message: 'How are you' },
                { message: 'I\'m fine, u?' },
            ],
        },

        frinedsList: {
            friends: [
                { src: 'https://storage.vsemayki.ru/images/0/1/1222/1222117/previews/people_20_face_mask_front_black_250.jpg', name: 'Вартан' },
                { src: 'https://storage.vsemayki.ru/images/0/1/1222/1222117/previews/people_101_ski_cape_front_white_250.jpg', name: 'Игорь' },
                { src: 'https://storage.vsemayki.ru/images/0/1/1222/1222117/previews/people_2_tie_fullprint_front_white_250.jpg', name: 'Женя' },
            ]
        }

    },
    getState() {
        return this._state;
    },
    _renderEntireTree() {
    },
    Subscribe(observer) {
        this._renderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                message: this._state.profilePage.newPostText,
                likes: 0,
                name: 'Unknown',
                src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQERMTEhAPERMVEhASEhASEA8XEBIYFRUWFhUVFRMYHiggGBolGxUTITEhJS0rLi4uGB8zODMsNygtLisBCgoKDg0OEA8NECsZFRkrNysrKys3KystNysrKy0rKzctKysrLSs3LTcrKzc3Kys3LTcrKys3KysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADsQAAIBAQUFBAcGBwEBAAAAAAABAgMEBREhMQYSQVFxIjJhgRNSkaGxwdEjM0JykvBTYoKDstLhY0P/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APuIAAAAAAAAB5JpZt4Lm9APQRdrvunHKPbfh3faRFpvarP8W6uUcvfqXBZ6taMe9KMerSOKpfNFcXLomVdvEFxNWCW0EeEJe1GmW0D4U15yf0IUDDU0toJfw1+p/Q2x2gjxpy8miAAw1Z6d90Xq5R6rI7aNphPuyi+jWPsKWBhq8gqVnvOrDSba5SzX1Jay37CWU1uPnrEmKlwYwmpLFNNc1oZEAAAAAAAAAAAAAAAAABsgr0vjWFJ+Dn/r9QO+33nCll3peqvm+BXbZbp1X2nlwiu6vqczYNSIAAqAAAAAAAAAAAAADfZbXOk8Yyw5r8L6osFgveFTKXYly4PoysAYq8gr12Xw44RqZx4S4rrzRYIyTWKeKejMYr0AAAAAAAAAAAwQV+XjrTg/ztf4gab3vRzbhB4R4v1v+ESAbQAAQAAAAAAAAAAAAAAAAAAAkbqvN0nuyzg/bHxRHAKvEZJpNPFPRnpXLkvHce5J9l6P1X9CxmbFAAQAAAAPJSSWLySzbA4b3tvooZd6WUfDmyqtnTeFqdWo5cNIrklocxqRAAFQAAAAADmtdthSXaefCK7zOa9by9H2Y5z/AMf+lcnNybbbberYVJ2i+5vupRXtZxVLZUlrOXtfyNAA2KvP15/qZvo3nVj+NvweaOQEE9ZL8i8qi3f5lmvNEvCaaxTTT0a0KUddgt8qTyzjxjw8uTKLWDXQrRnFSi8U/wB4M2BAAAAAALLcdu347kn2o6eKK0bbNXdOaktU/bzQqroDCjVU4qS0axRmYUAAAi9oLTuw3VrL4LUlCqXzX36suUeyvLX34lg4QAaZAAAAAA5rwtSpQcuOkVzZ0ldv+vvVN3hFe9/tBUZObk228W3i2eAEAAAAAAAAEhc9t9HPBvsyyfg+DLMUktd11/SUot6rsvqv2ijrAAQAAAAAT2zlpxTpvh2o9OJNlNsNf0dSMuCefR5MuRmrAAEVqtNXchKXJN/QpeJaL/qYUWubS+ZVzUSgAKgAAAAAFOtc96pN85S+ORcUUuqu0+r+IViACAAAAAAAAATuzc8prxTIImtm1nPoiicAAQAAAAAC3XXV36UHxwwflkVEsOzdTGEo8pY+1f8ACVYmAAZVC7Sy7MF4t+4gCa2mfah0l8UQpqJQAFQAAAAACp3nS3as1zk5LzzLYQu0NmxSqLhlL5MKgwAQAAAAAAAACw7PU8Kbl60vh+2QFODk0lm28EXCzUVCEYrgkuvNlGwABAAAAAAJnZqXbmv5V8SGJPZ5/a/0v5CqswAMKgNpu9DpL4ohSe2mjlB+LRAmolAAVAAAAAAMakFJNNYprBoyAFSvCxulLB5p92XNfU5i42mzxqR3ZLFe9eKK5b7snSzS3o+suHVBXCACAAAAMqcHJ4JNvklmTt23Ru4SqYN8I8F15lC5LBu/aSWbXZXJcyXAAAAIAAAAABJ7PL7b+mXyIwmNmo9ub/lXxFVYQAYVGbQU8aWPKSfyKyXK20t+nKPOLw68PeU01EoACoAAAAAAPJySWLaS5t4I4a170Y/icvyr5gd4Iad/rhTfm0anf8v4cfawqStF2Up5uOD5xyOGpcC/DUfnH6HTdd5elbTSjJZpLiiRAglcD/iL9L+pvpXFBd6UpeGiJY8lJJNvJLNsDXQs8ILCMUumvtNpBVL+eL3YJrHLFvE9jf74015MCcBE079pvWMl7Gd1C3U592ax5PJ+xgdAACAAAAAAWDZqn2Zy5tJeRXy2XPS3aMPFbz89PdgSrHaADKhUb0oejqyXBveXR5/VeRbiH2is2MVNaxyfRlgrwANMgAAEReF8qOMaeDfrcF05mm+7w1pxeX4muPgQwVsrVpTeMpOT8flyNYBAAAGdGq4SUlk08UWyx2lVYKS81yfIqB13dbnRljrF96Pz6lFrIG/LfvfZxeS7z5vkZ22+044U003+J8OniQgAAEAAAdtjvOpTyx3o+q/k+BYLFbYVVjHXjF6oqRnRrShJSi8Gii5g5rBa1VhvLXSS5M6QgAANtlo+knGPNpeXH3YlzSwILZyzZyqPh2Y/MnjNWAAIoY1IKSaejWDMgBTLXZ3Tm4vg8nzXBmks1+WH0kd6K7UfeuKKybiBzXhaPR05S46Lq9DpIXaSplCPi5PyyXxYEG2ACAAAAAAAAAAAAAAAAAAAO+5bTuVEuEuy/k/3zLOUqLwePLMuVGe9FPmkyjMzpU3KSis22kjAn7gsOC9JJZvKPguYolbLQVOCiuC9vNm0AwoAAAAAFcvu7tx78V2XqvVf0LGYzimmmsU8miyikEBtH34fl+bLfet3Ok8VnB6Pl4Mqe0kfu3+ZfD6mkQoAIAAAAAAAAAAAAAAAAAAAFuu/7qH5UVEvty3dKqorSKUd6XlovEo6bou/0ssX3Fr4+CLQlgY0aShFRisEtDMzaoACAAAAAAAADGcFJNNYp6plH21uWUYKdNOUFJuSWbgmtX4aZl6DRdHxAH0LaDY2FXGdDCnPVwf3cv8AVlEtljqUZOFSEoSXBrXxT0a8UVGgAAAAAAAAAAAAAAAAGyz0J1JKMIynJ6Rim2XfZ/YtRwnacG9VRTyX5nx6ICC2c2aqWpqUk4UU85vWXhBceuh9NoUYwioxWCSwSM4xSSSSSWSS0R6ZUAAAAAAAAAAAAAAAAOe22GnXju1IRmvFZro+B0ACj3rsJq7PU/t1PlJFUvC669nf2tKcF62GMH0ksj7GeSimsGk1xT0Lo+Ig+rW3ZiyVdaMYvnT7PuWXuIa07A0393WnHkpJNe0uooQLZV2Drru1aUuqkjnlsTa//F/3H9BorYLHHYm18qS/uP6HRS2EtD71SlH9TGiqAvdm2Bj/APSvJ+EYpe9kxY9k7JTz9FvvnUbl7tBo+aWKwVa7wpU51Hx3VkustF5lquvYWbwdeaivUhnLzloi906aikopRS0SSSXRIyJquO7bso2eO7Sgo83+J9Zas7ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k='
            };
            this._state.profilePage.postsdata.push(newPost);
            this._state.profilePage.newPostText = '';
            this._renderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newPostText = action.postText
            this._renderEntireTree(this._state);
        }
    }
}




export default store;
window.store = store;