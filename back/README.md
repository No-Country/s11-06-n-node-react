# GlobalMates - Backend
## Getting Started
### Prerequisites
* [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [npm](https://www.npmjs.com/) - Package manager for JavaScript.
* [MongoDB](https://www.mongodb.com/) - NoSQL database.
* [Postman](https://www.getpostman.com/) - API development environment.
* [Visual Studio Code](https://code.visualstudio.com/) - Code editor.
* [Git](https://git-scm.com/) - Version control system.
### Installing
1. Clone the repository:
```bash
git clone https://github.com/No-Country/s11-06-n-node-react.git
```
2. Install dependencies:
```bash
cd s11-06-n-node-react/back
npm install
```
3. Create a `.env` file in the root directory of the project and add the following:
```bash
MONGO_URL=mongodb+srv://user:pass@ip/?retryWrites=true&w=majority
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=AB123DFG456
```
4. Run the server:
```bash
npm run dev
```
5. Open Postman and import the collection `GlobalMates.postman_collection.json` located in the root directory of the project.
6. Start making requests.
