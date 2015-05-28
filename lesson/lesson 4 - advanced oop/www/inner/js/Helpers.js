var Helpers = {
    getPrototypeChain: function(obj) {
        var objTemp = [];
        var temp = "";
        do {
            obj = Object.getPrototypeOf(obj);
            if (obj != null) {
                temp = obj;
                objTemp.push(temp.constructor);
            } else {
                objTemp.push("null");
            }



        }
        while (obj != null);
        console.log(objTemp);

    },

    //sorting by the power of engine

    sortingByWatt: function(carA, carB) {
        if (carA.engine.performance > carB.engine.performance)
            return -1;
        if (carA.engine.performance < carB.engine.performance)
            return 1;
        return 0;

    }

}