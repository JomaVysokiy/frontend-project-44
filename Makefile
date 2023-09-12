install:
	npm ci 
brain-prime:
	node bin/brain-prime.js

brain-progression:
	node bin/brain-progression.js

brain-gcd:
	node bin/brain-gcd.js

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

index.js:
	node src/index.js

publish:
	npm publish --dry-run

setup: 
	install publish
