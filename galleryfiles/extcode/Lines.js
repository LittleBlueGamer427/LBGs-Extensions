(function (Scratch) {
    "use strict";

    class Lines {
        getInfo() {
            return {
                id: "lbglines",
                name: "Lines",
                color1: "#0085ff",
                color2: "#0069cb",
                color3: "#004d94",
                blocks: [
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: "getLine",
                        text: "line [line] of [text]",
                        arguments: {
                            line: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            text: {
                                type: Scratch.ArgumentType.STRING
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        opcode: "lineExists",
                        text: "does line [line] of [text] exist",
                        arguments: {
                            line: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            text: {
                                type: Scratch.ArgumentType.STRING
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: "nextline",
                        text: "nextline"
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: "replaceLine",
                        text: "replace line [line] of [text] with [replacement]",
                        arguments: {
                            line: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            text: {
                                type: Scratch.ArgumentType.STRING
                            },
                            replacement: {
                                type: Scratch.ArgumentType.STRING
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: "countLine",
                        text: "count lines in [text]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING
                            },
                        }
                    },
                ],
            };
        }
        getLine(args, util) {
            var text = Scratch.Cast.toString(args.text);

            var lines = text.split("\n");

            var lineNumber = Scratch.Cast.toNumber(args.line) - 1;
            var specificLine = lines[lineNumber];
            if (specificLine != null) {
                return specificLine;
            } else {
                return ""
            }
        }
        lineExists(args, util) {
            var text = Scratch.Cast.toString(args.text);

            var lines = text.split("\n");

            var lineNumber = Scratch.Cast.toNumber(args.line) - 1;
            var specificLine = lines[lineNumber];
            if (specificLine != null) {
                return true;
            } else {
                return false;
            }
        }
        nextline(args, util) {
            return "\n";
        }
        replaceLine(args, util) {
            var text = Scratch.Cast.toString(args.text);

            let lines = text.split("\n");

            var lineNumber = Scratch.Cast.toNumber(args.line) - 1;

            var specificLine = lines[lineNumber];
            if (specificLine != null) {
                lines[lineNumber] = args.replacement;
            } else {
                return "";
            }

            return lines.join("\n");
        }
        countLine(args, util) {
            var text = Scratch.Cast.toString(args.text);

            var lines = text.split("\n");

            return lines.length;
        }
    }

    Scratch.extensions.register(new Lines());
})(Scratch);
