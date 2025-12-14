# francisfuzz.com

`francisfuzz.com` is Francis' personal portfolio, built with **Jekyll** and hosted on **GitHub Pages**.

## Deployment

This site is configured to automatically deploy to GitHub Pages when you push to the `main` branch. GitHub Pages handles the Jekyll build process automatically.

### Setting up GitHub Pages

1. Go to your repository settings
2. Navigate to Pages (under "Code and automation")
3. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
4. Click Save

GitHub will automatically build and deploy your site whenever you push changes.

## Local Development

### Using Docker (Recommended)

The easiest way to run this site locally is using Docker:

```shell
# Build the Docker image:
docker build -t francisfuzz-site .

# Run the container:
docker run -d --rm --name francisfuzz-site -p 4000:4000 -p 35729:35729 francisfuzz-site

# View logs:
docker logs -f francisfuzz-site

# Stop the container:
docker stop francisfuzz-site
```

Then open your browser to http://localhost:4000

### Traditional local setup

If you prefer to run Jekyll natively:

```shell
# Clone this repository:
git clone https://github.com/francisfuzz/dotcom.git

# Change directory into this repository:
cd dotcom

# Install Ruby dependencies:
bundle install

# Run the Jekyll server:
bundle exec jekyll serve

# Open your browser to http://localhost:4000
```

**Note:** There may be compilation issues with the `eventmachine` gem on certain macOS versions. If you encounter errors, use the Docker approach above.

## License

* Content: [Creative Commons, BY](http://creativecommons.org/licenses/by/3.0/)
* Code: [MIT](http://opensource.org/licenses/mit-license.php)
