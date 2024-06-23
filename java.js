function switch_theme() {
    page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style == "style1.css") {
        localStorage.setItem("page_stylesheet_name", "style2.css");
    } else {
        localStorage.setItem("page_stylesheet_name", "style1.css");
    }
    load_style();
}

function load_style() {
    page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style == null) {
        page_style = "style1.css";
    }
    document.getElementById("page_style").setAttribute("href", page_style);
}

load_style();
