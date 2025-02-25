// Config file helper functions
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configName = "../config.json";
const configPath = path.join(__dirname, configName);

export function writeConfig(configList) {
    var configListString = JSON.stringify(configList, null, 2);
    fs.writeFileSync(configPath, configListString, 'utf8', function(err) {
        if(err) throw err;
        console.log("Config updated");
    });
}

export function getConfig(){
    const loadJSON = () => JSON.parse(fs.readFileSync(configPath));
    return loadJSON();
}

// Single miner config unpackers
export function getMinerResourceOutput(minerConfig){
    return minerConfig.ResourceOutput;
}
export function getMinerId(minerConfig){
    return minerConfig.MinerId;
}
export function getMinerLabel(minerConfig){
    return minerConfig.MinerLabel;
}

export function getMinerResourceOutputType(minerConfig){
    return getMinerResourceOutput(minerConfig).ResourceType;
}

export function getMinerResourceOutputExtension(minerConfig){
    return getMinerResourceOutput(minerConfig).FileExtension;
}

export function getMinerPath(minerConfig){
    return minerConfig.MinerPath;
}

export function getMinerFile(minerConfig){
    return minerConfig.MinerFile;
}

export function getMinerResourceInput(minerConfig){
    return minerConfig.ResourceInput;
}

export function getMinerResourceInputKeys(minerConfig){
    return getMinerResourceInput(minerConfig).map(resourceInput => resourceInput.Name);
}