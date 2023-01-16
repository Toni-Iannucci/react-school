

function getCapsules (){

    let url =`https://api.spacexdata.com/v4/capsules`;
    fetch(url).then((response) =>
        response.json().then((data) => {
            console.log(data);
            let affichageFirstTableau = '<table class="table table-bordered table-striped"> <tr><th>Capsule Serial</th><th>Capsule ID</th><th>Status</th><th>Original launch</th><th>Original Launch Unix</th>';
           
            for (let capsule of data) {
    
                affichageFirstTableau += `<tr><td>${capsule.capsule_serial}</td>`;
                affichageFirstTableau += `<td>${capsule.capsule_id}</td>`;
                affichageFirstTableau += `<td>${capsule.status}</td>`;
                affichageFirstTableau += `<td>${capsule.original_launch}</td>`;
                affichageFirstTableau += `<td>${capsule.original_launch_unix}</td></tr>`;           
            }
            document.querySelector("#capsules").innerHTML = affichageFirstTableau;
        })
    );  
}
getCapsules();