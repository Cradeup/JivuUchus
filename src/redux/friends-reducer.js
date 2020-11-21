let initialState = {
    friends: [
        { src: 'https://storage.vsemayki.ru/images/0/1/1222/1222117/previews/people_20_face_mask_front_black_250.jpg', name: 'Вартан' },
        { src: 'https://storage.vsemayki.ru/images/0/1/1222/1222117/previews/people_101_ski_cape_front_white_250.jpg', name: 'Игорь' },
        { src: 'https://storage.vsemayki.ru/images/0/1/1222/1222117/previews/people_2_tie_fullprint_front_white_250.jpg', name: 'Женя' },
    ]
}

const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;