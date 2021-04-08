const {Book, Page} = require('../book')

var Page1 = new Page([
    "Welcome to the SoupStoreGames Text Adventure (by Greyson)",
    "This is a typical text adventure so the standard format should be familiar",
    "Each time you take an action, one game 'tick' passes (with some excpetions on page 2).",
    "Every action is met with a brief description of what the action caused.",
    "For example: when you move to a new area you might read something like \"You enter a dark cave.  There is an exit to the South and a dark tunnel to the North.  The floor is covered with stones and gravel.",
    "Here you might want to go south so you would type \"go south\" or \"s\" for short",
    "Type 'next' or 'n' to read page 2",
    "Type 'close' or 'c' to close this book"
])
var Page2 = new Page([
    "You can list your available actions at any time by typing \"Actions\" or \"a\"",
    "You can check your inventory by typing \"stuff\" or \"i\"",
    "These actions are always available as well as some common actions, including:",
    "look: Repeats the rooms introduction",
    "wait: Lets 1 game 'tick' pass without action",
    "quit: Ends your journey",
    "[wip]save [name]: creates a local save file.  You can load a save by typing the name after the program e.g >Game [name]",
    "None of these actions, excluding wait, cost a game 'tick'",
    "Type 'Next' or 'n' to read page 3",
    "Type 'Previous' or 'p' to read page 1",
    "Type 'close' or 'c' to close this book"
])

var intro = new Book("Intro", [Page1, Page2],"Greyson" )

module.exports = intro