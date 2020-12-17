module.exports = {
    "helpers": {
        lowercase: str => str.toLowerCase()
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
        }
    },
    "filters": {},
    "metalsmith": {},
    "completeMessage": "请按以下步骤启动，耐心等待:\n \n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm i\n  vue ui 或者 npm run server"
}