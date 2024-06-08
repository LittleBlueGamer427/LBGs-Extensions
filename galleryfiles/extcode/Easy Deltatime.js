// Name: Easy Deltatime
// ID: lbgezdelta
// Description: LBG's Remaster of Pixel Utilities' compatwithcurrentlimit block. Mainly designed for those who dont know the correct math to use deltatime.
// By: LittleBlueGamer
// Inspired By: Delta Time

// Version V.1.2.0

(function (Scratch) {
    "use strict";

    if (!Scratch.extensions.unsandboxed) {
        throw new Error("easy deltatime needs to be ran unsandboxed");
    }

    const vm = Scratch.vm;

    let ezDeltaTime = 0;
    let ezPreviousTime = 0;
    let ezGlobalOgLimit = 30;

    vm.runtime.on("BEFORE_EXECUTE", () => {
        const ezNow = performance.now();
        ezDeltaTime = ezPreviousTime === 0 ? 0 : (ezNow - ezPreviousTime) / 1000;
        ezPreviousTime = ezNow;
    });

    class EasyDeltatime {
        getInfo() {
            return {
                id: "lbgezdelta",
                name: "Easy Deltatime",
                color1: "#0085ff",
                color2: "#0069cb",
                color3: "#004d94",
                blocks: [
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: "currentDtLimit",
                        text: "current limit to adjust from"
                    },
                    {
                        blockType: Scratch.BlockType.COMMAND,
                        opcode: "setDtLimit",
                        text: "set global og limit to [LIMIT]",
                        arguments: {
                            LIMIT: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "30"
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'newdtAdjust',
                        text: "adjust [value], mode [speed]",
                        arguments: {
                            value: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            speed: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "newSpeedMenu"
                            }
                        }
                    }
,
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: "warning the block below me is old"
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'dtAdjust',
                        text: "og [ogfps], adjust [value], mode [speed]",
                        arguments: {
                            ogfps: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            value: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            speed: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "speedMenu"
                            }
                        }
                    }
,
                ],
                menus: {
                    newSpeedMenu: {
                        acceptReporters: true,
                        items: ["speed", 'loops']
                    }
,
                    speedMenu: {
                        acceptReporters: false,
                        items: ["speed", 'loops']
                    }
                },
            };
        }
        newdtAdjust(args) {
            const multiplication1 = ezDeltaTime * ezGlobalOgLimit;
            const value = args.value;
            if (args.speed === "speed") {
                return value * multiplication1;
            } else {
                return value / multiplication1;
            }
        }
        dtAdjust(args) {
            const oglimit = args.ogfps;
            const multiplication1 = ezDeltaTime * oglimit;
            const value = args.value;
            if (args.speed === "speed") {
                return value * multiplication1;
            } else {
                return value / multiplication1;
            }
        }
        currentDtLimit() {
            const result = ezGlobalOgLimit;
            return result;
        }
        setDtLimit(args) {
            ezGlobalOgLimit = args.LIMIT;
        }
    }

    Scratch.extensions.register(new EasyDeltatime());
})(Scratch);
