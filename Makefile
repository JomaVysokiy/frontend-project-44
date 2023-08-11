# Makefile
install: # установить зависимости
	npm ci 

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

inde.js:
	node src/index.js

publish:
	npm publish --dry-run

setup: 
	install publish
