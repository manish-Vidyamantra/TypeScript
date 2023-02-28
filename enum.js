var dir;
(function (dir) {
    dir[dir["North"] = 0] = "North";
    dir[dir["East"] = 1] = "East";
    dir[dir["South"] = 2] = "South";
    dir[dir["West"] = 3] = "West";
})(dir || (dir = {}));
;
var val = 'East';
console.log(dir[val]);
function getSomeValue(val) {
    return val + 1;
}
