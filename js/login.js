$(function(){
    //点击去注册按钮 显示注册页面
    $('#login_btn').on('click',function(){
        console.log(111);
        $('.reg-box').show()
        $('.login-box').hide()
    })

    //点击登录按钮 显示登录页面
    $('#reg_btn').on('click',function(){
        console.log(111);
        $('.reg-box').hide()
        $('.login-box').show()
    })
})