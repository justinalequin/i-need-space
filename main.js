// fetch('https://satellites.fly.dev/passes/25544?lat=-34.9112212&lon=-57.9372988&limit=1')

//     .then(function (rawData) {return rawData.json();})
//     .then(function (data) {console.log(data[0].rise.utc_timestamp)})



let coordinatesArray = [];
let norad = ''

  const address = document.querySelector('#address')
  const search = document.querySelector('#search')
  const noradInput = document.querySelector('#norad')

  search.addEventListener('click', function(){
      //console.log(address.value)
      norad = noradInput.value;
      
      const main = async () => {
        const fetch1 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address.value}.json?access_token=${input.value}`;
        const rawData1 = await fetch(fetch1);
        const data1 = await rawData1.json();
        
       let lon =  data1.features[0].center[0]
       let lat = data1.features[0].center[1]
       
       const fetch2 = `https://satellites.fly.dev//passes/${norad}?lat=${lat}&lon=${lon}&limit=1`;
       const rawData2 = await fetch(fetch2);
       const data2 = await rawData2.json();

       let riseTime = document.querySelector('.rise');
       let culmTime = document.querySelector('.culmination');
       let setTime = document.querySelector('.set');

       riseTime.innerText = timeConverter(data2[0].rise.utc_timestamp);
       culmTime.innerText = timeConverter(data2[0].culmination.utc_timestamp);
       setTime.innerText = timeConverter(data2[0].set.utc_timestamp);

     };
     main();

  })

function timeConverter(timestamp){
  const a = new Date(timestamp * 1000);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

//Questions:
//How does the user know the norad position?
//
