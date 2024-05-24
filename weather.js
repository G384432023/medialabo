let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

console.log('世界の天気');
console.log('検索結果');
console.log('緯度: ' + data["coord"]["lat"]); 
console.log('経度: ' + data["coord"]["lon"]);
console.log('天気: ' + data["weather"][0]["description"]); 
console.log('最低気温: ' + data["main"]["temp_min"]); 
console.log('最高気温: ' + data["main"]["temp_max"]); 
console.log('湿度: ' + data["main"]["humidity"]); 
console.log('風速: ' + data["wind"]["speed"]); 
console.log('風向: ' + data["wind"]["deg"]); 
console.log('都市名: ' + data["name"]); 

// 課題4-2
let result1u = document.createElement('ul'); 
let result2u = document.querySelector('div#result'); 
result2u.insertAdjacentElement('beforeend', result1u); 

let weather1 = document.createElement('li'); 
weather1.textContent = '緯度: ' + data["coord"]["lat"]; 
let result1 = document.querySelector('div#result > ul'); 
result1.insertAdjacentElement('beforeend', weather1); 

let weather2 = document.createElement('li'); 
weather2.textContent = '経度: ' + data["coord"]["lon"]; 
let result2 = document.querySelector('div#result > ul'); 
result2.insertAdjacentElement('beforeend', weather2); 

let weather3 = document.createElement('li'); 
weather3.textContent = '天気: ' + data["weather"][0]["description"]; 
let result3 = document.querySelector('div#result > ul'); 
result3.insertAdjacentElement('beforeend', weather3); 

let weather4 = document.createElement('li'); 
weather4.textContent = '最低気温: ' + data["main"]["temp_min"]; 
let result4 = document.querySelector('div#result > ul'); 
result4.insertAdjacentElement('beforeend', weather4); 

let weather5 = document.createElement('li'); 
weather5.textContent = '最高気温: ' + data["main"]["temp_max"]; 
let result5 = document.querySelector('div#result > ul'); 
result5.insertAdjacentElement('beforeend', weather5); 

let weather6 = document.createElement('li'); 
weather6.textContent = '湿度: ' + data["main"]["humidity"]; 
let result6 = document.querySelector('div#result > ul'); 
result6.insertAdjacentElement('beforeend', weather6); 

let weather7 = document.createElement('li'); 
weather7.textContent = '風速: ' + data["wind"]["speed"]; 
let result7 = document.querySelector('div#result > ul'); 
result7.insertAdjacentElement('beforeend', weather7); 

let weather8 = document.createElement('li'); 
weather8.textContent = '風向: ' + data["wind"]["deg"]; 
let result8 = document.querySelector('div#result > ul'); 
result8.insertAdjacentElement('beforeend', weather8); 

let weather9 = document.createElement('li'); 
weather9.textContent = '都市名: ' + data["name"]; 
let result9 = document.querySelector('div#result > ul'); 
result8.insertAdjacentElement('beforeend', weather9); 