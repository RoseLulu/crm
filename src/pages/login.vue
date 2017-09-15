<template>
    <div class="login-wrap">
        <div class="ms-title">HCRM系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入手机号码"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="userLogin(ruleForm.username,ruleForm.password)"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="userLogin(ruleForm.username,ruleForm.password)">登录</el-button>
                </div>
            </el-form>
        </div>
        <div v-if="errorMask" class="mask">
            <el-alert class="error-wrap" title="请输入您在院方注册的手机号码" type="error" v-if="errorName" @close="close(errorName)" show-icon></el-alert> 
            <el-alert class="error-wrap" title="密码错误" type="error" v-if="errorPwd" @close="close(errorPwd)" show-icon></el-alert>           
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import qs from 'qs'
    export default {
        data() {
            return {
                errorName: false,
                errorPwd: false,
                errorMask: false,
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入手机号码', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            close(type) {
                this.type = false;
                this.errorMask = false;
                console.log('errorName:'+this.errorName);
            },
            userLogin(name,pwd) {
                axios.post(userMsgUrl,qs.stringify({username:name,password:$.md5(pwd)}))
                     .then(res => {
                        if (res.data.data.ret===false&&res.data.data.msg!='密码错误') {
                            this.errorName = true;this.errorMask = true
                        }else if (res.data.data.ret===false&&res.data.data.msg==='密码错误') {
                            this.errorPwd = true;this.errorMask = true
                        }else {
                            localStorage.setItem('userLevel',res.data.data.msg.level);
                            localStorage.setItem('userNo',res.data.data.msg.USER_NO);
                            localStorage.setItem('userID',res.data.data.msg.id);
                            localStorage.setItem('userName',res.data.data.msg.FULL_NAME);
                            localStorage.setItem('userTel',res.data.data.msg.Tel);
                            this.$router.push('/main')
                        }
                     })
            }
            // submitForm(formName) {
            //     const self = this;
            //     self.$refs[formName].validate((valid) => {
            //         if (valid) {
            //             localStorage.setItem('ms_username',self.ruleForm.username);
            //             self.$router.push('/main');
            //         } else {
            //             console.log('error submit!!');
            //             return false;
            //         }
            //     });
            // }
        }
    }
</script>

<style scoped>
    .mask {
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(0,0,0,.4);
        transition-duration: .4s;
    }
    .mask .error-wrap {
        position: absolute;
        z-index: 13500;
        width: 380px;
        height: 80px;
        top: 50%;
        left: 50%;
        margin-left: -190px;
        margin-top: -70px;
        opacity: 1;
    }
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
