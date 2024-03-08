// Name: Pixel Utilities
// ID: lbgpixelutilities
// Description: Random Utility Blocks by LittleBlueGamer
// By: LittleBlueGamer

// Version V.1.1.0

(function(Scratch) {
  "use strict";

  class GarbageUtilities {
    getInfo() {
      return {
        id: "lbgpixelutilities",
        name: "Pixel Utilities",
        color1: "#0085ff",
        color2: "#0069cb",
        color3: "#004d94",
        blocks: [
          {
            blockType: Scratch.BlockType.HAT,
            opcode: "whenConditionGoesYes",
            text: "when [CONDITION1] goes Y E S",
            isEdgeActivated: true,
            arguments: {
              CONDITION1: {
                type: Scratch.BlockType.BOOLEAN
              }
            }
          },
          {
            blockType: Scratch.BlockType.BOOLEAN,
            opcode: "trueOrFalseBoolean",
            text: "[trueorfalse]",
            arguments: {
              trueorfalse: {
                type: Scratch.ArgumentType.STRING,
                menu: "trueorfalsemenu"
              }
            }
          },
          {
            blockType: Scratch.BlockType.BOOLEAN,
            opcode: "isGamePackaged",
            text: "is this game packaged"
          },
          {
            opcode: "percentChance",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[percent] chance of returning true",
            arguments: {
              percent: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50
              }
            },
          },
          {
            opcode: "percentOfNumber",
            blockType: Scratch.BlockType.REPORTER,
            text: "[percent]% of [number]",
            arguments: {
              percent: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50
              },
              number: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              }
            },
          },
          {
            opcode: "reverseString",
            blockType: Scratch.BlockType.REPORTER,
            text: "reverse [text]",
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "roltycore 2"
              }
            },
          },
          {
            opcode: "getPercentageOfSteps",
            blockType: Scratch.BlockType.REPORTER,
            text: "from [stepOrigin], get [percentageInput]% of the steps to [stepLocation]",
            arguments: {
              stepOrigin: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              percentageInput: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50
              },
              stepLocation: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              }
            },
          },
        ],
        menus: {
          trueorfalsemenu: {
            acceptReporters: true,
            items: ["true", "false"],
          }
        },
      };
    }
    whenConditionGoesYes(args) {
      return Scratch.Cast.toBoolean(args.CONDITION1 ?? false);
    }

    trueOrFalseBoolean(args) {
      return Scratch.Cast.toBoolean(args.trueorfalse);
    }

    isGamePackaged() {
      return Scratch.vm.runtime.isPackaged;
    }

    percentChance(args) {
      return Math.random() < args.percent / 100;
    }

    percentOfNumber(args) {
      return (args.percent / 100) * args.number;
    }

    reverseString(args) {
      return args.text.split("").reverse().join("");
    }

    getPercentageOfSteps(args) {
      const origin = args.stepOrigin;
      const percentage = args.percentageInput / 100;
      const distance = args.stepLocation - origin;
      return distance * percentage;
    }
  }

  Scratch.extensions.register(new GarbageUtilities());
})(Scratch);
