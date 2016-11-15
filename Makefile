web:
	tsc --outDir public/js --module amd src/*

clean:
	rm -rf public/js/*

