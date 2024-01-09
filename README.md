<!-- PROJECT LOGO -->
<div id="readme-top"></div>
<br />
<div align="center">
  <a href="https://quest-forge-app.netlify.app/">
    <img src="/public/images/quest-forge-logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Quest Forge</h3>
<p align="center">
  <a href="https://app.netlify.com/sites/quest-forge-app/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/2c1f8b6d-5b8b-47c7-bd0f-673e3c455602/deploy-status" alt="Netlify Status" />
  </a>
</p>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      <li><a href="#note">Note</a>
      </li>
      </ul>
    </li>
    <li>
      <a href="#demo">Demo</a>
    </li>
    <li>
      <a href="#features">Features</a>
    </li>
    <li>
      <a href="#technologies">Technologies</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
            <ul>
      <li><a href="#prerequisites">Prerequisites</a>
      </li>
            <li><a href="#cloning">Cloning the Repository</a>
      </li>
      <li><a href="#uml">UML Diagram</a>
      </li>
            <li><a href="#configure">Configure</a>
      </li>
      <li><a href="#start">Start</a>
      </li>
      </ul>
    </li>
        <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Embark on a captivating text-based adventure where you shape the destiny of your hero. This immersive web application allows users to create and customize their heroic characters, making critical decisions that will ultimately determine their fate. Engage in an epic journey filled with rich storytelling, challenging choices, and unexpected twists. Craft your hero's legend in Quest Forge and discover where your decisions lead in this interactive narrative experience.

### Note

This project is based on a team project that was developed with 2 other teammates. I was the main contributor for this project. I have refactored the code to be more efficient, added useContext to remove prop drilling, improved the user interface, and added mobile responsiveness. See below for the old version of the application.

- [Old Quest Forge Repo](https://github.com/orgs/GUI-Goblins/repositories)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEMO -->

## Demo

Here's the live link: [Quest Forge](https://quest-forge-app.netlify.app/)

<div align="center">
    <img src="/public/images/hero.png"  alt="Hero"/>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->

## Features

- **Character Creation:** Allow users to create and customize characters by selecting their name, age, gender, race, and class.
- **Interactive Quests:** Provide a dynamic storytelling experience with interactive quests, choices, and outcomes.
- **AI-Powered Storytelling:** Utilize AI to generate engaging narratives, scenes, and character interactions.
- **AWS Integration:** Utilize AWS API Gateway, DynamoDB, and Lambda for backend management, data storage, and serverless computing.
- **Responsive Design:** Enjoy a seamless experience on various devices.
- **UI/UX Improvements:** Enhance the user interface and user experience to make the application more appealing and intuitive.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TECHNOLOGIES -->

## Technologies

- **Frontend:** React.js for a dynamic and interactive user interface.
- **Backend:** Node.js and Express.js for server-side logic.
- **AWS Integration:** AWS API Gateway, DynamoDB, and Lambda for backend management, data storage, and serverless computing
- **OpenAI Integration:** Chat Completions API for quest scene and quest options generation.
- **Additional Libraries and Frameworks:** Material UI, MUI icons.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- INSTALLATION -->

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (preferably the latest stable version)
- npm (usually comes with Node.js)
- Git for cloning the repository
- A text editor or IDE of your choice (e.g., VSCode, Sublime Text)

### Cloning

This is for the frontend portion of this application.
See the following readme file for backend portion: [Quest Forge API](https://github.com/cleecoloma/quest-forge-api/blob/main/README.md)

1. git clone https://github.com/cleecoloma/quest-forge.git
2. cd quest-forge
3. npm install
4. create the following Amazon Web Services (AWS) - API Gateway, DynamoDB, and Lambda. See <a href="#uml">UML Diagram</a> below for proper integration.

### Configure

```text
VITE_SERVER_URL={http://localhost:3001 or backend/API URL}
```

Amazon Web Services
```text
for lambda-openai-prompt
OPENAI_API_KEY={OpenAI API Key}
OPEN_AI_URL={OpenAI Chat Completions URL}
```

### UML

![UML diagram](/public/images/uml-diagram.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Start

1. npm run dev (development mode)
2. npm run build (production mode)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## Contact

If you have any questions or comments, don't hesitate to reach out to me at [chesterleecoloma.com](https://chesterleecoloma.com/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>