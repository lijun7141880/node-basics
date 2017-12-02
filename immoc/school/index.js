/**
 * Created by ponovo on 2017/11/25.
 */
var kless = require('./kless');

exports.add = function (klesses) {
    klesses.forEach(function (item, index) {
        var _kless = item;
        var teacherName = item.teacherName;
        var students = item.students;

        kless.add(teacherName,students);
    });

}

