const { GoogleSpreadsheet } = require("google-spreadsheet");
credentials = require("./hubconf.json")


module.exports = {
    handleAppending: async function (obj) {
        let spreadsheet = new GoogleSpreadsheet("1N7giS-ff6At6gKO5K30WC0j0Bw-c5C5fAC4uhtZqozY")

        try {
            await spreadsheet.useServiceAccountAuth(credentials)
            await spreadsheet.loadInfo()
            
            const sheet = spreadsheet.sheetsByIndex[0]

            rows = await sheet.getRows()
            
            for (data in rows){
                if(rows[data]._rawData[0] === obj.fullName && rows[data]._rawData[1] === obj.email){
                    return false
                }
            }

            if("school" in obj){
                const rowAppend = await sheet.addRows([
                    { name: obj.fullName , email: obj.email, school: obj.school},
                ]);
            }
            else{
                const rowAppend = await sheet.addRows([
                { name: obj.fullName , email: obj.email},
            ]);  
            }

            return true
        }  
        catch (error) {
            console.log(error)
            return false
        }
    }
}
