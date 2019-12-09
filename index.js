const axios = require("axios")
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { structuredDataTest } = require("structured-data-testing-tool");
const presets = require("./presets");
const fs = require('fs');
var config = fs.readFileSync('config.txt').toString().split("\n");

let csvWriter = createCsvWriter({
    path: 'out.csv'
});
// const url = "https://www.themuse.com/advice/tech-company-jobs-no-coding-required?_tc_test=1&bust=4811";
const header = [
    { id: "URL", title: "URL" },
    { id: "URL_STATUS", title: "URL Status" }
];
const records = [];

const getRecordStatus = (result) => result.passed ? "Pass" : result.warning ? "Warn" : "Fail";

const generateResults = (url, status, response) => {
    const displayURL = url.replace("https://www.themuse.com", "").split("?")[0];
    const err = response.error || [];
    const warn = response.warnings || [];
    const pass = response.passed || [];
    const payload = [ err, ...warn, ...pass ];
    let cleanResult = {
        URL: displayURL,
        URL_STATUS: status > 399 ? status : getFileStatus(response),
    };

    if (header.length === 2) {
        payload.forEach((_, index) => {
            if (index > 0) {
                const name = `Name_${index}`;
                const status = `Status_${index}`;
                const note = `Note_${index}`;

                header.push({ id: name, title: name });
                header.push({ id: status, title: status });
                header.push({ id: note, title: note });
            };
        });
    
        csvWriter = createCsvWriter({
            path: 'out.csv',
            header: header
        });
    }

    payload.forEach((item, index) => {
        if (index > 0 && status <= 403) {
            const name = `Name_${index}`;
            const status = `Status_${index}`;
            const note = `Note_${index}`;
            const recordStatus = getRecordStatus(item);
            cleanResult[name] = item.test,
            cleanResult[status] = recordStatus,
            cleanResult[note] = recordStatus !== "Pass" ? item.description : "";
        }
    });

    records.push(cleanResult);
    csvWriter.writeRecords(records);
    console.log("writing", displayURL);
}

const test = (url, status, html) => {
    structuredDataTest(html, { presets: [ presets.Google, presets.SocialMedia ]}) 
    .then(res => {
        // If you end up here, then there were no errors
        generateResults(url, status, res);
    })
    .catch(err => {
        // If any test fails, the promise is rejected
        if (err.type === 'VALIDATION_FAILED') {
            generateResults(url, status, err.res);
        } else {
            // Handle other errors here (e.g. an error fetching a URL)
            console.log(err)
        }
    });
}

const getData = async url => {
    try {
        const response = await axios.get(`${url}?_tc_test=1&bust=2020`);
        test(url, response.status, response.data);
        console.log("STATUS", response.status);
        return;
    } catch (error) {
        test(url, error.response.status || "???", `<!DOCTYPE html><html lang="en"><head></head><body></body></html>`);
        console.log("STATUS", error.response.status || "???");
        return;
    }
};

const getFileStatus = (res) => {
    return !!res.failed.length
        ? "Failed"
        : !!res.warnings.length
            ? "Warnings"
            : "passed";
};

config.forEach(getData);

// getData(url);

