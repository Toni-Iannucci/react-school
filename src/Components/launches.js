function getLaunches (){

    let url =`https://api.spacexdata.com/v4/launches`;
    fetch(url).then((response) =>
        response.json().then((data) => {
            console.log(data);
            let showFirstTable = '<table class="table table-bordered table-striped"> <tr><th>Flight number</th><th>Mission name</th><th>Upcoming</th><th>Launch Year</th><th>Launch date utc</th>';
            
            for (let capsule of data) {
    
                showFirstTable += `<tr><td>${capsule.flight_number}</td>`;
                showFirstTable += `<td>${capsule.mission_name}</td>`;
                showFirstTable += `<td>${capsule.upcoming}</td>`;
                showFirstTable += `<td>${capsule.launch_year}</td>`;
                showFirstTable += `<td>${capsule.launch_date_utc}</td></tr>`;           
            }
            document.querySelector("#launches").innerHTML = showFirstTable;
        })
    );  
}
getLaunches();