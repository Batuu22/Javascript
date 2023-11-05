// Dark Mode
let darkModu = () => {
    window.document.body.classList.toggle("dark_mode");
}

// JQUERY
// input search
$(document).ready(function () {
    const searchApi = ["İzmir", "Ankara", "Balikesir", "İstanbul", "Gaziantep", "Malatya", "Elazığ", "Antalya"];
    $("#tags").autocomplete({
        source: searchApi,
    })
}); // end

//Footer
let newDate = () => {
    //DOM
    // let date = document.querySelector("#date_id");
    let date = document.getElementById("date_id");
    date.innerHTML = new Date().getFullYear();

    // Jquery DOM
    // $("#date_id").html(new Date().getFullYear());
}
newDate();

