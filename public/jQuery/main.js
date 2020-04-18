$(function () {
    'use strict';

    var $inputs=$('[data-rule]');
    var $form=$('#signup');
    var inputs=[];
    $inputs.each(function (index,node) {
        var tmp=new Input(node);
        inputs.push(tmp);

        // console.log(inputs);

    })

    $form.on('submit',function (e) {
        e.preventDefault();
        $inputs.trigger('blur');
        for (var i=0;i<inputs.length;i++){
            var item =inputs[i];
            var r=item.validator.is_valid();
            if (!r){
                alert('invalid');
                return;
            }
        }
        alert('注册成功');
    })
    
    function singup() {

    }

    // var test=new Input('#test');
    // var valid=test.validator.is_valid();
    // console.log('valid:',valid);
    //等文档加载完毕再执行所有操作



    // var validator = new Validator('10',{
    //     max:100,
    //     min:18,
    // });

    // var validator = new Validator('abcdef',{
    //     maxLength:5,
    //     minLength:2,
    // });

    // var validator = new Validator('****',{
    //     pattern:'^[a-zA-Z0-9]*$'
    // });

    // var result =validator.validate_max();
    // var result =validator.validate_min();
    // var result =validator.validate_maxlength();
    // var result=validator.validate_numeric();
    // var result=validator.validate_required();
    // var result=validator.validate_pattern();
    // console.log('result:',result);
})
//1. 选中页面中有datarule属性的input
//2. 解析每一个input的规则
//3. 进行验证


