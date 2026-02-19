import fs from "fs/promises";
export const readJsonFile = async (path) => {
    try {
        const fileData = await fs.readFile(path, "utf-8");
        return JSON.parse(fileData);
    } catch (error) {
        console.log("unable to read data");
    }
}
export const writeJsonFile = async(path, data)=>{
    let status = 0;
    let message = "";
    try {
        await fs.writeFile(path,JSON.stringify(data,2,null));
        status = 200;
        message = "Data has been written successfully.";    
    } catch (error) {
        console.log("unable to write");     
    }
    return {status,message};
}
