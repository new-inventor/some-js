var queryParameters = function () {
    var query = window.location.search.substring(1);
    if (query === '') {
        return {};
    }
    var query_string = {};
    var vars = query.split("&");
    vars.forEach(function (item) {
        var pair = item.split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        if (typeof query_string[key] === "undefined") {
            query_string[key] = value;
        } else if (typeof query_string[key] === "string") {
            query_string[key] = [query_string[key], value];
        } else {
            query_string[key].push(value);
        }
    });
    return query_string;
}();