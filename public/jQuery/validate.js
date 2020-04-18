$(function () {
    'use strict';

    window.Validator=function (val,rule) {

        this.is_valid=function (new_val) {
            var key;
            if (new_val !== undefined){
                val=new_val
            }
            if (!rule.required && !val)
                return true;

            for (key in rule){
                if (key==='required')
                    continue;

                var r=this['validate_'+key]();
                if (!r)return false;
            }

            return true;
        }

        // 用于this.validate_max或this,validate_min
        function pre_max_min() {
            val=parseFloat(val);
        }

        // 用于this.validate_max或this,validate_min
        function pre_max_minlength() {
            val=val.toString();
        }

        this.validate_max=function () {
            pre_max_min();
            return val <= rule.max;
        }

        this.validate_min=function () {
            pre_max_min();
            return val >= rule.min;
        }

        this.validate_maxlength=function () {
            pre_max_minlength();
            return val.length <= rule.maxLength;
        }

        this.validate_minlength=function () {
            pre_max_minlength();
            return val.length >= rule.minLength;
        }


        this.validate_numeric=function () {
            return $.isNumeric(val);
        }

        this.validate_required=function () {
            var real =$.trim(val);
            if (!val && val !=0) {
                return false;
            }
            return false;

        }

        this.validate_pattern=function () {
            var reg=new RegExp(rule.pattern);
            return reg.test(val);
        }
    }

})