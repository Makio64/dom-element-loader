module.exports = function(content) {
	this.cacheable && this.cacheable();
	this.value = content;
	content = JSON.stringify(content)
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');
	return `export default (function(){
		const domParser = document.createElement('div')
		domParser.innerHTML = ${content} 
		return domParser.firstChild
	})()`;
}
