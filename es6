命名方式
	camel case【驼峰】
		userName
	snake case 【蛇式】
		user_name
	kebab case 【串式】
		user-name
导入导出
	导入
		require【node/赋值过程/运行是调用、可以在运行代码任意地方】
		import【ES6/解构过程/编译时调用，必须在文件开头】
	导出
		export【ES6】
		module.exports【node】
声明文件依赖
	模块依赖【types】
	路径依赖【path】
ES7
	Array.prototype.includes()
	指数运算符
ES8
	async/await
	Object.values()
	Object.entries()
	String padStart() & padEnd()
ES9
	await in loop
	promise.finally()
ES10
	jSON.stringify
	Array.prototype.flat() / Array.prototype.flatMap()
	String.prototype.trimStart() & String.prototype.trimEnd()
	Object.fromEntries()【把键值对列表转换为一个对象】
	BigInt
ES11
	?. 可选链运算符
	?? 空值合并运算符
ES12
	Promise.any()
	??=逻辑空
TypeScript 编译工具
	使用了了Babel 安装babel/preset-typescript（可配合tsc做类型检查）
document 
	load
		是在结构和样式，外部js 以及图片加载完才能执行js
	ready
		dom树创建完成就执行的方法
CSS
	BFC
	script
	dom树渲染过程
	url 输入到页面加载过程分析
