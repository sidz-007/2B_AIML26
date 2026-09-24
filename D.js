const EventEmitter = require('events');
// const ud=new EventEmitter();
// ud.on('greet', (name) => {
//     console.log(`Hello, ${name}!`);
// });
// ud.on('exit', (name) => {
//     console.log(`Thank you, ${name} for visiting our website!`);
// });
// ud.emit('greet','Gustavo');
// ud.emit('exit', 'Sheeraz');
class Button extends EventEmitter{
    click(){
        this.emit('click');
    }
}
const button = new Button();
button.on('click', ()=>{
    console.log("This button has been clicked");
});
button.click();