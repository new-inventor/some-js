String.prototype.ucfirst = function() {
    var str = this;
    if(str.length) {
        str = str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str;
};