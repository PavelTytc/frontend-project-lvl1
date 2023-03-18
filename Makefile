install:
	npm	ci
publish:
	npm	publish	--dry-run
test-coverage:
	npm test -- --coverage --coverageProvider=v8
lint:
	npx eslint .
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
    node src/games/calc-game.js
