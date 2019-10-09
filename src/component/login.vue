<template id="login">
	<main>
		<div class="logo">
			<img src="../assets/images/login.png" alt="">
		</div>
		<form action="">
			<div class="one">
				<label for="user"></label>
				<input type="text" placeholder="手机/邮箱/会员名" id="user">
			</div>
			<div class="two">
				<label for="pass"></label>
				<input type="password" placeholder="请输入密码" id="pass">
			</div>
			<div class="txt">
				<span>短信验证码登录</span>
				<span>免费注册</span>
			</div>
			<div class="submit">
				<input type="submit" value="登录" >
			</div>
			
		</form>
	</main>
</template>

<script>
	export default{
		name:'login',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.logo{
		width: 20%;
		margin: 50px auto;
	}
	.logo img{
		width: 100%;
	}
	.one,.two{
		width: 90%;
		margin: 0 auto;
		border-bottom: 2px solid #ffb999;
	}
	.one{
		margin-bottom: 50px;
	}
	.two{
		margin-bottom: 20px;
	}
	.one input,.two input{
		border: none;
		font-size: 1rem;
		padding: 5px;
	}
	.txt{
		color: #666666;
	}
	.txt{
		width: 90%;
		margin: 0 auto 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: nowrap;
	}
	.submit{
		margin: 0 auto;
		width: 90%;
	}
	input[type='submit']{
		border: none;
		outline: none;
		background: linear-gradient(to right, #ff8d00 , #ff5200); 
		width: 100%;
		color: #fff;
		line-height: 50px;
		font-size: 1rem;
		border-radius: 50px;
	}
	
</style>
