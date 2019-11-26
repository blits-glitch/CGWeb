function header() {
    var html = "";
    html += "";
    html += "<header>";
    
    html += "<nav class=\"col-12 navbar navbar-expand-lg navbar-dark bg-dark\">";
    html += "<a class=\"navbar-brand\" href=\"#\">";
    html += "<img src=\"img/siege_logo.png\" width=\"128\" height=\"67\" class=\"d-inline-block align-top\" alt=\"\">";
    html += "</a>";
    html += "<button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"ナビゲーションの切替\">";
    html += "<span class=\"navbar-toggler-icon\"></span>";
    html += "</button>";
    html += "<div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">";
    html += "<div class=\"navbar-nav\">";
    html += "<a class=\"nav-item nav-link active\" href=\"index.html\">ホーム <span class=\"sr-only\">(現位置)</span></a>";
    html += "<a class=\"nav-item nav-link\" href=\"respawnkill-top.html\">リスキル</a>";
    html += "<a class=\"nav-item nav-link\" href=\"#\">突き上げ・突き下げ</a>";
    html += "</div>";
    html += "</div>";
    html += "</nav>";

    html += "</header>";

    var pathname = location.pathname;
    var url = location.href;
    // ファイル名取得
    var file = window.location.href.split('/').pop();
    html += "<h4>";
    html += file;
    
    html += "</h4>";

    document.write(html);
}

function footer() {
    var html = "";
    html += '<footer>';
    html += '<p><small>copyright © All Rights Reserved.</small></p>';
    html += '</footer>';
    document.write(html);
}