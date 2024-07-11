(async function(Scratch) {
    const variables = {};
    const blocks = [];
    const menus = [];

    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!");
        return;
    }

    class Extension {
        getInfo() {
            return {
                id: "save",
                name: "save codes",
                color1: "#0088ff",
                color2: "#0063ba",
                blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiB2aWV3Qm94PSIwLDAsMzEwLDMxMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg1LC0yNSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48Zz48cGF0aCBkPSJNODUsMzIzLjMwMTg5YzAsLTUxLjkwNjc3IDAsLTI2MC4wNjQxIDAsLTI4Ny43MDA0N2MwLC01Ljk0ODMgNC4wMzc3NCwtMTAuNjAxNDIgOS4zMjE5MywtMTAuNjAxNDJjMjEuMzEzNzcsMCAyNDYuMzkxNTEsMCAyNDYuMzkxNTEsMGw1NC4yODY1Niw1NS4yMDA0N2MwLDAgMCwyMTMuMjM2NDUgMCwyNDIuNzM1ODVjMCw2LjU3NjM2IC00LjgwMzQ4LDEyLjA2MzY4IC0xMC43ODQyLDEyLjA2MzY4Yy00Ny44MTIyNywwIC0yNjIuODU0MTUsMCAtMjg5LjUyODMsMGMtNS4yODQyLDAgLTkuNjg3NSwtNC4yMzMyNiAtOS42ODc1LC0xMS42OTgxMXoiIGZpbGw9IiMxODg5ZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSJOYU4iIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTE0MS4xMTQzOSwxMjUuNTMwNjZjMCwtMTcuNDM1MTYgMCwtMTAwLjUzMDY2IDAsLTEwMC41MzA2NmgxOTguNTAyMzZjMCwwIDAsODIuMDc1MjggMCw5OS43OTk1M2MwLDYuNDM2MzIgLTQuNzY2ODQsMTMuMTYwMzggLTEyLjc5NDgxLDEzLjE2MDM4Yy0zOS4xMzY5NiwwIC0xNTUuNzc5MTYsMCAtMTc1LjQ3MTcsMGMtNS41MzM2MiwwIC0xMC4yMzU4NSwtNi4yOTg3IC0xMC4yMzU4NSwtMTIuNDI5MjV6IiBmaWxsPSIjNzM3MzczIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjY4LjMzMTM3LDExNy40ODgyMXYtNzQuNTc1NDdoNTEuOTEwMzh2NzQuNTc1NDd6IiBmaWxsPSIjNjE2MTYxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMTUxLjM1MDI0LDE4NS4xMTc5MmMxOS42OTI1NCwwIDEzNi4zMzQ3NCwwIDE3NS40NzE3LDBjOC4wMjc5OCwwIDEyLjc5NDgxLDYuNzI0MDUgMTIuNzk0ODEsMTMuMTYwMzhjMCwxNy43MjQyNSAwLDEzNi43MjE3IDAsMTM2LjcyMTdoLTE5OC41MDIzNmMwLDAgMCwtMTIwLjAxNzY3IDAsLTEzNy40NTI4M2MwLC02LjEzMDU0IDQuNzAyMjMsLTEyLjQyOTI1IDEwLjIzNTg1LC0xMi40MjkyNXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjNzM3MzczIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMTc3LjEyMjY0LDIyMC41Nzc4M2gxMjUuNzU0NzIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzYxNjE2MSIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTc3LjEyMjY0LDI1Ny44NjU1N2gxMjUuNzU0NzIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzYxNjE2MSIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTc3LjEyMjY0LDI5Ni4yNWgxMjUuNzU0NzIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzYxNjE2MSIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9nPjwvZz48L3N2Zz4=",
                docsURI: "https://lbgs-extensions.vercel.app/?doc=fernandosavecodes.txt", // Documentation URL
                blocks: blocks
            };
        }
    }

    blocks.push({
        opcode: "reset",
        blockType: Scratch.BlockType.COMMAND,
        text: "reset savecode",
        isEdgeActivated: false,
        arguments: {},
        disableMonitor: true
    });

    Extension.prototype["reset"] = (args, util) => {
        variables["savecode"] = "";
        variables["readIndex"] = 0;
        variables["readParts"] = [];
    };

    blocks.push({
        opcode: "setsave",
        blockType: Scratch.BlockType.COMMAND,
        text: "set SaveCode to [set]",
        isEdgeActivated: false,
        arguments: {
            set: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "chicken|butt|"
            }
        },
        disableMonitor: true
    });

    Extension.prototype["setsave"] = (args, util) => {
        variables["savecode"] = args["set"];
        variables["readIndex"] = 0;
        variables["readParts"] = splitSaveCode(variables["savecode"]);
    };

    blocks.push({
        opcode: "write",
        blockType: Scratch.BlockType.COMMAND,
        text: "write value [text]",
        isEdgeActivated: false,
        arguments: {
            text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "chicken"
            }
        },
        disableMonitor: true
    });

    Extension.prototype["write"] = (args, util) => {
        let text = Scratch.Cast.toString(args.text);
        text = text.replace(/([|\\])/g, "\\$1"); // Escape | and \ characters
        if (!variables["savecode"]) {
            variables["savecode"] = "";
        }
        variables["savecode"] += text + "|";
        variables["readParts"] = splitSaveCode(variables["savecode"]);
    };

    blocks.push({
        opcode: "getsave",
        blockType: Scratch.BlockType.REPORTER,
        text: "Get SaveCode",
        isEdgeActivated: false,
        arguments: {},
    });

    Extension.prototype["getsave"] = (args, util) => {
        return variables["savecode"] || "";
    };

    blocks.push({
        opcode: "pre",
        blockType: Scratch.BlockType.COMMAND,
        text: "prepare to read",
        isEdgeActivated: false,
        arguments: {},
        disableMonitor: true
    });

    Extension.prototype["pre"] = (args, util) => {
        variables["readIndex"] = 0;
        variables["readParts"] = variables["savecode"] ? splitSaveCode(variables["savecode"]) : [];
    };

    blocks.push({
        opcode: "return",
        blockType: Scratch.BlockType.REPORTER,
        text: "read value",
        isEdgeActivated: false,
        arguments: {},
        disableMonitor: false
    });

    Extension.prototype["return"] = (args, util) => {
        const index = variables["readIndex"] || 0;
        const parts = variables["readParts"] || [];
        if (index >= parts.length) {
            return "";
        }
        const value = parts[index];
        variables["readIndex"] = index + 1;
        return value;
    };

    function splitSaveCode(savecode) {
        const parts = [];
        let part = "";
        let escaping = false;
        for (let i = 0; i < savecode.length; i++) {
            const char = savecode[i];
            if (escaping) {
                part += char;
                escaping = false;
            } else if (char === "\\") {
                escaping = true;
            } else if (char === "|") {
                parts.push(part);
                part = "";
            } else {
                part += char;
            }
        }
        return parts;
    }

    Scratch.extensions.register(new Extension());
})(Scratch);
