const BLENDER_EXE_PATH = "C:\\Program Files\\Blender Foundation\\Blender 3.2\\blender.exe"
import packageJson from "../package.json"
import {spawn} from "child_process";

console.log(`Blender RenderQueue v.${packageJson.version}`)
console.log(`Blender path: ${BLENDER_EXE_PATH}\n`)

const startRendering = async (file: any) => {
    return new Promise((resolve, reject) => {
        const runRender = spawn(BLENDER_EXE_PATH, ["-b", file.path, "-o", file.out, "-f", "1"])

        runRender.stdout.on('data', (data) => {
            console.log(data.toString());  // Stream
        });
        runRender.stderr.on('data', (data) => {
            console.log(data.toString());  // Stream
            reject("Error")
        });
        runRender.on('close', (code) => {
            console.log(code);
            resolve(code)
        });
    })
}

import renderList from "./render.json"

console.log("Queue List:")

renderList.files.forEach(async item => {
    console.log(item.path)
});

(async () => {
    for (const item of renderList.files) {
        console.log(`Start rendering: ${item.path}`)
        await startRendering(item)
    }
})();