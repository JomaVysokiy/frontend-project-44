# Makefile
install: # установить зависимости
	npm ci 

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

setup: 
	install publish
