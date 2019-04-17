// import { resolve } from 'dns';

const fakeDatabase = {
  list: [
    {
      id: 1,
      category: 'restaurant',
      title: '훌라훌라',
      address: '서울 마포구 희우정로10길 4 (우)04017',
      latitude: 37.552617,
      longitude: 126.904614,
      url: 'https://place.map.kakao.com/1384758884',
    },
    {
      id: 2,
      category: 'cafe',
      title: '카페청사진',
      address: '서울 마포구 포은로 89 2층 (우)04009',
      latitude: 37.554978,
      longitude: 126.905006,
      url: 'https://place.map.kakao.com/145391616',
    },
    {
      id: 3,
      category: 'pub',
      title: '망원그곳',
      address: '서울 마포구 월드컵로13길 19-19 (우)04013',
      latitude: 37.5551,
      longitude: 126.909318,
      url: 'https://place.map.kakao.com/917742418',
    },
  ],
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchList = async category => {
  return await delay(1000).then(() => {
    // if (Math.random() > 0.5) {
    //   throw new Error('Boom!');
    // }
    switch (category) {
      case 'all':
        return fakeDatabase.list;
      case 'restaurant':
        return fakeDatabase.filter(item => item.category === 'restaurant');
      case 'cafe':
        return fakeDatabase.filter(item => item.category === 'cafe');
      case 'pub':
        return fakeDatabase.filter(item => item.category === 'pub');
      default:
        throw new Error(`Unknown category: ${category}`);
    }
  });
};
