requirejs.config({
    baseUrl: 'libs',
    paths: {     //配置目录的方式
        "cores": 'cores',
        "utils": 'utils',
        "services": 'services'
    }
});

require(["cores/core1","cores/core2","utils/util1","utils/util2","services/service1","services/service2"], function() {

    var core1 = require("cores/core1");
    var core2 = require("cores/core2");
    var util1 = require("utils/util1");
    var util2 = require("utils/util2");
    var service1 = require("services/service1");
    var service2 = require("services/service2");

});