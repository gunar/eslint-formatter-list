'use strict';

module.exports = files => {
	const output = files
		.filter(file => file.errorCount > 0)
		.map(file => file.filePath)
	  .join('\n')
	console.log(output)
};
