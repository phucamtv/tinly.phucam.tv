build:
	npm run build

index:
	 docker run -it --env-file=.env -e "CONFIG=$(cat /Users/devpro/github.com/phucam/tinly/algolia.config.json | jq -r tostring)" algolia/docsearch-scraper
