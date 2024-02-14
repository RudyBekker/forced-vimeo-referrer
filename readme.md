# Forced Vimeo Referrer

This project provides a serverless function deployed via Vercel that redirects to a specified Vimeo video URL. It's designed to be invoked with a URL parameter to dynamically redirect users to different Vimeo videos.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node.js and npm installed on your local machine
- Vercel CLI installed globally (`npm install -g vercel`)

### Installing

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/RudyBekker/forced-vimeo-referrer.git
   cd forced-vimeo-referrer
   ```

2. Install dependencies (if any):
   ```bash
   npm install
   ```

3. Test the project locally (optional):
   - Since this project is meant to be deployed on Vercel, testing locally mainly involves checking for syntax errors or other issues. Vercel CLI can help emulate the deployment environment.

### Deployment

Deploy the project using Vercel CLI:

1. Log in to Vercel through the CLI (if you haven't already):
   ```bash
   vercel login
   ```

2. Deploy the project:
   ```bash
   vercel
   ```
   Follow the prompts to set up your project on Vercel.

## Usage

Once deployed, the serverless function can be invoked with a query parameter to specify the Vimeo video URL you wish to redirect to.

Example usage:
```
https://your-vercel-deployment-url.vercel.app/api/redirect?video=https://player.vimeo.com/video/VIDEO_ID
```

Replace `your-vercel-deployment-url.vercel.app` with your actual Vercel deployment URL and `VIDEO_ID` with the Vimeo video ID you intend to redirect to.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/RudyBekker/forced-vimeo-referrer/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/RudyBekker/forced-vimeo-referrer/tags).

## Authors

- **Rudy Bekker** - *Initial work* - [RudyBekker](https://github.com/RudyBekker)

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc