import pathData from './path.json'

export function getUrl(envType: string): string[] {
    console.log(envType)
    const domain = getDomain(envType);
    const pathList = getPath(envType);
    const result = [];

    for(const path of pathList) {
        result.push(`${domain}/${path}`);
    }

    return result;
}


function getPath(envType: string): string[] {
    return pathData.path;
}

// うまくTypescriptで書けなかったので、冗長にif文で。
function getDomain(envType: string): string {

    if (envType === "dev") {
        return "https://dev-example.com";
    }
    if (envType === "prod") {
        return "https://prod-example.com";        
    }
    return "";
}

