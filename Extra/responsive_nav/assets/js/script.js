$("#nav-icon-open").on("click", () => {
    $("#nav-icon-open").css("display", "none");
    $("#nav-icon-close").css("display", "block");
    $("#mob-nav").css("display", "block");
});

$("#nav-icon-close").on("click", () => {
    $("#nav-icon-open").css("display", "block");
    $("#nav-icon-close").css("display", "none");
    $("#mob-nav").css("display", "none");
});