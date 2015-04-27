var rl = require('readline');
var interface = rl.createInterface(process.stdin, process.stdout, null);
interface.question('What\'s your question?', function(answer)
{
  console.log('hello, ' + answer + '!');
  interface.close();
  process.stdin.destroy();
});
