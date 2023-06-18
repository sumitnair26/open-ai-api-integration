# open-ai-api-integration

**Chat GPT Integration with Node and Express**

**This Project will Create YouTube Description, YouTube Tags for SEO and YouTube Thumbnail Images**

This Git repository contains code that demonstrates how to integrate the Chat GPT API with a Node.js and Express application. By following the instructions below, you will be able to set up a server that interacts with the Chat GPT API and provides a chat interface for users.

Prerequisites
Before you begin, ensure that you have the following prerequisites installed on your system:

Node.js (version 14 or later)
NPM (Node Package Manager)
Getting Started
Clone the repository to your local machine using the following command:

shell
Copy code
git clone https://github.com/sumitnair26/open-ai-api-integration.git
Navigate to the project's directory:

shell
Copy code
cd your-repo
Install the required dependencies:

shell
Copy code
npm install
Create a .env file in the root directory and add the following environment variables:

plaintext
Copy code
OPEN_AI_KEY=<your_gpt_api_key>
Replace <OPEN_AI_KEY> with your actual API key for the Chat GPT API. If you don't have an API key, sign up at the OpenAI website and obtain one.

Start the server:

shell
Copy code
npm start
This command will launch the Node.js server, and you should see a message indicating that the server is running on a specific port (e.g., Server listening on port 3000).

Open your web browser and navigate to http://localhost:4001 (replace 4001 with the port number shown in the previous step).

You should now see a interface to Add Title and ADD Image Tittle where you can then get YouTube Video Description and Tags, also you can get Thumbnail image for Youtube Video.

Contributing
Contributions to this repository are welcome. If you encounter any issues or have improvements to suggest, please create a new issue or submit a pull request.

License
This project is licensed under the MIT License.

Acknowledgments
This project was inspired by the Chat GPT API provided by OpenAI. For more information about the API and its capabilities, refer to the OpenAI API documentation.

Disclaimer
Please note that the use of the Chat GPT API is subject to OpenAI's terms and conditions. Ensure that you comply with the usage policies and guidelines provided by OpenAI.




