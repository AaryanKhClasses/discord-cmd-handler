# Command Handler with custom prefixes!
---
### Installation
##### 1. Clone the repository by clicking on the `🔻 Code` Button!
##### 2. Click on either of the two options and open the folder in your IDE!
##### 3. Open your NodeJS command prompt in the directory you have your project in and type the following:
#
```sh
$npm install
```
---
### Setup

#### MongoDB
##### 1. Go to [MongoDB] and create a new account (or log in to your existing account!)
##### 2. Now create a new [Organization] (an existing organization can also work)
##### 3. In the orgainzation you selected, create a new Project (again, an existing project can also work)
##### 4. Now in the project you selected, create a new cluster
##### 5. Cluster creation might take some time
##### 6. In the meanwhile, click on `Database Access`on the Left hand side Panel
##### 7. Click on `+ Add new database user`
##### 8. Select `Password` option, and create credentials in the `Password Authentication` Section and click on `Add User`
##### 9. Meanwhile, your cluster should br created (if not, wait for some more time.)! Click on `Clusters` in the left hand side panel!
##### 10. Click on `Connect` and then on `Connect your application`!
##### 11. Select Driver as `Node.JS` and latest Version!
##### 12. Copy the line under the `Add your connection string into your application code` section!
#
---
#### Config.JSON
##### - After you had cloned the repository and opened your IDE, open the file named `config.json` and fill the following fields: 
##### 1. `Token:` The bot token you got from creating the bot in [Discord Developer Portal]!
##### 2. `Prefix:` A global prefix for the bot!
##### 3. `MongoPass:` The connection string you got from the [setting mongodb]!
#
---
#### How to add More Commands to the bot!
##### In the directory system, you can see a folder named `commands` and another folder named `commands`, add all your commands (NOTE: These **commands** can be inside of other sub-folders too!) in the second `commands` folder!
#
##### After making a command file (for ex., `help.js`), you have to add some pre-written code in every command file you make. The code is as following:
#
```js
module.exports = {
    commands: 'help' // this can also be like `commands: ['help', 'helps'] which can make the command trigger even if you say helps
    cooldown: 10 // number of seconds of cooldown
    callback: (client, message, args) => {
        // your code here
    }
}
```
#
#### - Message Events
##### For setting up message events go to `events/events` folder and add a file (for eg., `guildMemberAdd.js`), you have to add some pre-written code for every event file you add. The code:
#
```js
module.exports = (client) => {
    client.on('the event name here', (event params here) => {
        //event code here
    })
}
```
##### - To see what events are included in `discord.js`, go check [Client.events]
#
---
#### Heroku (Optional)
##### This isn't a tutorial of how to setup heroku!
##### But if you want to setup heroku, the `Procfile` file in the root directory makes so the bot runs 24/7!
#
---
#### NOTE: This is NOT a tutorial on how to setup VSC, NodeJS and Discord Bot!
#### Also see:
##### 1. [Creator and Owner of this repository]
##### 2. [Bacc, a multipurpose bot]
##### 3. [Support Server]

### Thanks for seeing this repository and please `Star` if this helped you 😀
---
[setting mongodb]: <https://github.com/AaryanKhClasses/a#mongodb>
[MongoDB]: <https://www.mongodb.com/>
[Organization]: <https://cloud.mongodb.com/v2#/preferences/organizations/create>
[Discord Developer Portal]: <https://discord.com/developers/applications/>
[Creator and Owner of this repository]: <https://github.com/AaryanKhClasses>
[Bacc, a multipurpose bot]: <https://github.com/AaryanKhClasses/Bacc>
[Support Server]: <https://dsc.gg/bacc>
[Client.events]: <https://discord.js.org/#/docs/main/stable/class/Client>