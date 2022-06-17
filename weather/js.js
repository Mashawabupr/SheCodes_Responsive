//CURRENT DATE
function cuurentDate(){
    let nowDate=new Date()
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Satuday"
      ];
      
      let day=nowDate.getDay()
        let hours=nowDate.getHours()
        let minutes=nowDate.getMinutes()
        if (minutes<10){
            minutes=`0${minutes}`
            }
        if (hours<10){
                hours=`0${hours}`
            
        }
        return `${days[day]} ${hours}:${minutes}`

} document.querySelector("#currentDate").innerHTML=cuurentDate()

//SEARCHING CITY

function showWhatCity(input){
    let apiKey="0a438755c0214c93834115811221606"
    let apiURL=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}`
    axios.get(apiURL).then(showApi)
}
showWhatCity("Paris")
function showApi(response){
    //CITY
    
    document.querySelector("#gradus").innerHTML=Math.round(response.data.current.temp_c)
    
        document.querySelector("#showCity").innerHTML=response.data.location.name

        function cels(){
            document.querySelector("#gradus").innerHTML=Math.round(response.data.current.temp_c)
        }document.querySelector("#cels").addEventListener("click",cels)

        function faren(){
            document.querySelector("#gradus").innerHTML=Math.round(response.data.current.temp_f)
        }
        document.querySelector("#faren").addEventListener("click",faren)
    document.querySelector("#description").innerHTML=response.data.current.condition.text
}

function showCity(event){
    event.preventDefault()
    let input=document.querySelector("#searchingCity").value
    showWhatCity(input)
    
    
}document.querySelector("#submitInput").addEventListener("click",showCity)




//current weather

function showMyPosition(){
    navigator.geolocation.getCurrentPosition(position)
        function position(position){
            let lon = position.coords.longitude
            let lat = position.coords.latitude
            let apiKey="0a438755c0214c93834115811221606"
            let apiURL=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`
     
            axios.get(apiURL).then(showApi) 
        }
        

}document.querySelector("#getCurentPosition").addEventListener("click",showMyPosition)


