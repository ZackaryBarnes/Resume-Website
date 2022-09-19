filter("all")

var select = document.getElementById('filter-choice').addEventListener('change', function() {
    filter(this.value);
  });

function filter(type) {
    x = document.getElementsByClassName("card");
    for(i = 0; i < x.length; i++) {
        hide(x[i]);
        if(type == "all" || x[i].getAttribute("card-type") == type) {
            show(x[i]);
        }
    }
}

function show(element) {
    element.className += " show";
}

function hide(element) {
    element.className = "card";
}