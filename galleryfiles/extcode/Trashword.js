// Name: Trash Word
// ID: lbgtrashword
// Description: Filter out bad words, detect if text contains any of them, and count them in a text..
// By: LittleBlueGamer <https://scratch.mit.edu/users/LittleBlueGamer/>   

class TrashWord {
    getInfo() {
        return {
            id: 'lbgtrashword',
            name: 'Trash Word',
            color1: "#0085ff",
            color2: "#0069cb",
            color3: "#004d94",
            blocks: [
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: 'no documentation needed for this',
                },
                {
                    opcode: 'replaceBadWords',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'replace bad words in [TEXT] with [REPLACEMENT]',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ''
                        },
                        REPLACEMENT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '{censored}'
                        }
                    }
                },
                {
                    opcode: 'containsBadWord',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[TEXT] contains bad word?',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ''
                        }
                    }
                },
                {
                    opcode: 'countBadWords',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'count bad words in [TEXT]',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ''
                        }
                    }
                }
            ]
        };
    }

    replaceBadWords(args) {
        const text = args.TEXT;
        const badWords = ['fuck', 'shit', 'ass', 'bitch', 'nigger', 'kys', 'retard', 'piss', 'sex', 'dick', 'balllicker', 'ballsack', 'biatch', 'boob', 'bra', 'cock', 'nigga', 'cum', 'fuk', 'mothafuck', 'niggar', 'kill yourself', 'delete yourself', 'dong', 'faggot', 'bong', 'penis'];
        const replacement = args.REPLACEMENT;

        let filteredText = text;
        badWords.forEach((badWord) => {
            const regex = new RegExp(badWord, 'gi');
            filteredText = filteredText.replace(regex, (match) => {
                
                return match === match.toLowerCase() ? replacement.toLowerCase() : replacement;
            });
        });

        return filteredText;
    }

    containsBadWord(args) {
        const text = args.TEXT.toLowerCase();
        const badWords = ['fuck', 'shit', 'ass', 'bitch', 'nigger', 'kys', 'retard', 'piss', 'sex', 'dick', 'balllicker', 'ballsack', 'biatch', 'boob', 'bra', 'cock', 'nigga', 'cum', 'fuk', 'mothafuck', 'niggar', 'kill yourself', 'delete yourself', 'dong', 'faggot', 'bong', 'penis'];

        return badWords.some((badWord) => text.includes(badWord));
    }

    countBadWords(args) {
        const text = args.TEXT.toLowerCase();
        const badWords = ['fuck', 'shit', 'ass', 'bitch', 'nigger', 'kys', 'retard', 'piss', 'sex', 'dick', 'balllicker', 'ballsack', 'biatch', 'boob', 'bra', 'cock', 'nigga', 'cum', 'fuk', 'mothafuck', 'niggar', 'kill yourself', 'delete yourself', 'dong', 'faggot', 'bong', 'penis'];

        let count = 0;
        badWords.forEach((badWord) => {
            const regex = new RegExp(badWord, 'gi');
            count += (text.match(regex) || []).length;
        });

        return count;
    }
}

Scratch.extensions.register(new TrashWord());
