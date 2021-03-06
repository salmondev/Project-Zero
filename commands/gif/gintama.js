const fs = require('fs');
const { Command } = require('discord.js-commando');

module.exports = class GintamaCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'gintama',
      group: 'gif',
      memberName: 'gintama',
      description: 'Replies with a gintama gif!',
      throttling: {
        usages: 2,
        duration: 8
      }
    });
  }

  run(message) {
    try {
      const linkArray = fs
        .readFileSync('resources/gifs/gintamalinks.txt', 'utf8')
        .split('\n');
      const link = linkArray[Math.floor(Math.random() * linkArray.length)];
      return message.say(link);

      /*
       fetch(
        `https://api.tenor.com/v1/random?key=${tenorAPI}&q=gintama&limit=1`
      )
        .then(res => res.json())
        .then(json => message.say(json.results[0].url))
        .catch(e => {
          message.say('Failed to fetch a gintama gif :slight_frown:');
          return console.error(e);
        })
      */
    } catch (e) {
      message.say('Failed to fetch a gintama gif :slight_frown:');
      return console.error(e);
    }
  }
};