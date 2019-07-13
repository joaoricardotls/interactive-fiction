const createNewMenuItem = (header, body) => {
    return {
        header: header,
        body: body
    };
};

export const trash = (entry) => {

    let newContext = {
        logsHistory: [],
        timePlayed: "11:23:45",
        status: []
    };

    let output = "This is a text output."

    newContext.status.push(createNewMenuItem("Current Game", "Take the Trash"));
    newContext.status.push(createNewMenuItem("Author", "João Ricardo"));
    newContext.status.push(createNewMenuItem("Time Played", "12:33:25"));

    return [newContext, output];
};

export class GameObject {
    
    hello = "world";

    goodbye = "so long";

    getBlue = () => "color blue";

    getRed = () => "color red";

}