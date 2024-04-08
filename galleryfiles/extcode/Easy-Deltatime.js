// Name: Easy Deltatime
// ID: lbgezdelta
// Description: LBG's Remaster of Pixel Utilities' compatwithcurrentlimit block. Mainly designed for those who dont know the correct math to use deltatime.
// By: LittleBlueGamer
// Inspired By: Delta Time

// Version V.1.0.0

(function (Scratch) {
    "use strict";

    if (!Scratch.extensions.unsandboxed) {
        throw new Error("easy deltatime needs to be ran unsandboxed");
    }

    const vm = Scratch.vm;

    let ezDeltaTime = 0;
    let ezPreviousTime = 0;

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
                        opcode: 'dtAdjust',
                        text: "from [ogfps], adjust [value] based on dt, for things like [speed]",
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
                ],
                menus: {
                    speedMenu: {
                        acceptReporters: false,
                        items: ["speed", 'loops']
                    }
                },
            };
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
    }

    Scratch.extensions.register(new EasyDeltatime());
})(Scratch);
