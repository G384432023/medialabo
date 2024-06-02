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

// console.log('世界の天気');
// console.log('検索結果');
// console.log('緯度: ' + data["coord"]["lat"]); 
// console.log('経度: ' + data["coord"]["lon"]);
// console.log('天気: ' + data["weather"][0]["description"]); 
// console.log('最低気温: ' + data["main"]["temp_min"]); 
// console.log('最高気温: ' + data["main"]["temp_max"]); 
// console.log('湿度: ' + data["main"]["humidity"]); 
// console.log('風速: ' + data["wind"]["speed"]); 
// console.log('風向: ' + data["wind"]["deg"]); 
// console.log('都市名: ' + data["name"]); 

// 課題4-2
let result1u = document.createElement('ul'); 
let result2u = document.querySelector('div#result'); 
result2u.insertAdjacentElement('beforeend', result1u); 

// let weather1 = document.createElement('li'); 
// weather1.textContent = '緯度: ' + data["coord"]["lat"]; 
// let result1 = document.querySelector('div#result > ul'); 
// result1.insertAdjacentElement('beforeend', weather1); 

// let weather2 = document.createElement('li'); 
// weather2.textContent = '経度: ' + data["coord"]["lon"]; 
// let result2 = document.querySelector('div#result > ul'); 
// result2.insertAdjacentElement('beforeend', weather2); 

// let weather3 = document.createElement('li'); 
// weather3.textContent = '天気: ' + data["weather"][0]["description"]; 
// let result3 = document.querySelector('div#result > ul'); 
// result3.insertAdjacentElement('beforeend', weather3); 

// let weather4 = document.createElement('li'); 
// weather4.textContent = '最低気温: ' + data["main"]["temp_min"]; 
// let result4 = document.querySelector('div#result > ul'); 
// result4.insertAdjacentElement('beforeend', weather4); 

// let weather5 = document.createElement('li'); 
// weather5.textContent = '最高気温: ' + data["main"]["temp_max"]; 
// let result5 = document.querySelector('div#result > ul'); 
// result5.insertAdjacentElement('beforeend', weather5); 

// let weather6 = document.createElement('li'); 
// weather6.textContent = '湿度: ' + data["main"]["humidity"]; 
// let result6 = document.querySelector('div#result > ul'); 
// result6.insertAdjacentElement('beforeend', weather6); 

// let weather7 = document.createElement('li'); 
// weather7.textContent = '風速: ' + data["wind"]["speed"]; 
// let result7 = document.querySelector('div#result > ul'); 
// result7.insertAdjacentElement('beforeend', weather7); 

// let weather8 = document.createElement('li'); 
// weather8.textContent = '風向: ' + data["wind"]["deg"]; 
// let result8 = document.querySelector('div#result > ul'); 
// result8.insertAdjacentElement('beforeend', weather8); 

// let weather9 = document.createElement('li'); 
// weather9.textContent = '都市名: ' + data["name"]; 
// let result9 = document.querySelector('div#result > ul'); 
// result8.insertAdjacentElement('beforeend', weather9); 



//表示
let weather9 = document.createElement('li'); 
weather9.textContent = '都市名: '; 
let result9 = document.querySelector('div#result > ul'); 
result9.insertAdjacentElement('beforeend', weather9); 

let weather1 = document.createElement('li'); 
weather1.textContent = '緯度: '; 
let result1 = document.querySelector('div#result > ul'); 
result1.insertAdjacentElement('beforeend', weather1); 

let weather2 = document.createElement('li'); 
weather2.textContent = '経度: '; 
let result2 = document.querySelector('div#result > ul'); 
result2.insertAdjacentElement('beforeend', weather2); 

let weather3 = document.createElement('li'); 
weather3.textContent = '天気: '; 
let result3 = document.querySelector('div#result > ul'); 
result3.insertAdjacentElement('beforeend', weather3); 

let weather4 = document.createElement('li'); 
weather4.textContent = '最低気温: '; 
let result4 = document.querySelector('div#result > ul'); 
result4.insertAdjacentElement('beforeend', weather4);

let weather5 = document.createElement('li'); 
weather5.textContent = '最高気温: '; 
let result5 = document.querySelector('div#result > ul'); 
result5.insertAdjacentElement('beforeend', weather5); 

let weather6 = document.createElement('li'); 
weather6.textContent = '湿度: '; 
let result6 = document.querySelector('div#result > ul'); 
result6.insertAdjacentElement('beforeend', weather6); 

let weather7 = document.createElement('li'); 
weather7.textContent = '風速: '; 
let result7 = document.querySelector('div#result > ul'); 
result7.insertAdjacentElement('beforeend', weather7); 

let weather8 = document.createElement('li'); 
weather8.textContent = '風向: '; 
let result8 = document.querySelector('div#result > ul'); 
result8.insertAdjacentElement('beforeend', weather8); 
//
//ボタン押し
let b = document.querySelector('button#btn');
b.addEventListener('click', weather);
//
//通信まで
function weather() {
  let resultr = document.querySelector('div#result > ul');
  resultr.remove();

  let result1u = document.createElement('ul'); 
  let result2u = document.querySelector('div#result'); 
  result2u.insertAdjacentElement('beforeend', result1u); 

  let c = document.querySelector('select#city');
  let cn = c.selectedIndex;
  let co = c.querySelectorAll('option');
  let cid = co.item(cn);
  console.log(cid.textContent + 'の検索キー: ' + cid.getAttribute('value'));
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + cid.getAttribute('value') + '.json'
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
//
//通信OK
let kaisu = 0;
function showResult(resp) {
  let data = resp.data;
  if(typeof data === 'string') {
      data = JSON.parse(data);
  }
  console.log(data["name"]);
  let weather9 = document.createElement('li'); 
  weather9.textContent = '都市名: ' + data["name"]; 
  let result9 = document.querySelector('div#result > ul'); 
  result9.insertAdjacentElement('beforeend', weather9); 
  let cs = document.querySelectorAll('input[name="weatherdata"]');
    for (let c of cs) {
        if (c.checked) {
          weatherdata();
        }
        kaisu += 1;
    }
    kaisu = 0;
} 
function weatherdata() {
  if(kaisu === 0) {
    console.log(data["coord"]["lat"]);
  let weather1 = document.createElement('li'); 
  weather1.textContent = '緯度: ' + data["coord"]["lat"]; 
  let result1 = document.querySelector('div#result > ul'); 
  result1.insertAdjacentElement('beforeend', weather1); 
  } else if(kaisu === 1) {
    console.log(data["coord"]["lon"]);
  let weather2 = document.createElement('li'); 
  weather2.textContent = '経度: ' + data["coord"]["lon"]; 
  let result2 = document.querySelector('div#result > ul'); 
  result2.insertAdjacentElement('beforeend', weather2); 
  } else if(kaisu === 2) {
    console.log(data["weather"][0]["description"]);
  let weather3 = document.createElement('li'); 
  weather3.textContent = '天気: ' + data["weather"][0]["description"]; 
  let result3 = document.querySelector('div#result > ul'); 
  result3.insertAdjacentElement('beforeend', weather3); 
  } else if(kaisu === 3) {
    console.log(data["main"]["temp_min"]);
  let weather4 = document.createElement('li'); 
  weather4.textContent = '最低気温: ' + data["main"]["temp_min"]; 
  let result4 = document.querySelector('div#result > ul'); 
  result4.insertAdjacentElement('beforeend', weather4);
  } else if(kaisu === 4) {
    console.log(data["main"]["temp_max"]);
  let weather5 = document.createElement('li'); 
  weather5.textContent = '最高気温: ' + data["main"]["temp_max"]; 
  let result5 = document.querySelector('div#result > ul'); 
  result5.insertAdjacentElement('beforeend', weather5); 
  } else if(kaisu === 5) {
    console.log(data["main"]["humidity"]);
  let weather6 = document.createElement('li'); 
  weather6.textContent = '湿度: ' + data["main"]["humidity"]; 
  let result6 = document.querySelector('div#result > ul'); 
  result6.insertAdjacentElement('beforeend', weather6); 
  } else if(kaisu === 6) {
    console.log(data["wind"]["speed"]);
  let weather7 = document.createElement('li'); 
  weather7.textContent = '風速: ' + data["wind"]["speed"]; 
  let result7 = document.querySelector('div#result > ul'); 
  result7.insertAdjacentElement('beforeend', weather7); 
  }else if(kaisu === 7) {
    console.log(data["wind"]["deg"]);
  let weather8 = document.createElement('li'); 
  weather8.textContent = '風向: ' + data["wind"]["deg"]; 
  let result8 = document.querySelector('div#result > ul'); 
  result8.insertAdjacentElement('beforeend', weather8); 
  }
    
}
//
//通信NG
function showError(err) {
  console.log(err);
} 
//
//終わり
function finish() {
  console.log('Ajax 通信が終わりました');
} 
//
//ダークモード
let dark = document.querySelector('button#dark');
dark.addEventListener('click', mode);
let modechange = 0;
function mode() {
  if(modechange % 2 === 0) {
    let bd = document.querySelector('body'); 
    bd.style.backgroundColor = 'rgb(10, 10, 30)';
    bd.style.color = 'white'; 
    let h2 = document.querySelector('h2');
    h2.style.color = 'white'; 
    let ax = document.querySelector('button#dark > a');
    ax.textContent = 'OFF'; 
  } else {
    let bd = document.querySelector('body'); 
    bd.style.backgroundColor = 'white';
    bd.style.color = 'black'; 
    let h2 = document.querySelector('h2');
    h2.style.color = 'black'; 
    let ax = document.querySelector('button#dark > a');
    ax.textContent = 'ON'; 
  }
  modechange += 1;
}
//
//確認用