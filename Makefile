# Makefile
install: # установить зависимости
	npm ci 

brain-games:	
	node bin/brain-even.js,
	node bin/brain-games.js

publish:
	npm publish --dry-run

setup: 
	install publish
