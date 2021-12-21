import { GoogleSpreedSheet } from 'google-spreadsheet';

export const postForm = async (data) => {
    const doc = new GoogleSpreedSheet(process.env.NEXT_PUBLIC_SHEETS_ID)
    
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.NEXT_PUBLIC_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, '\n')
        })

        await doc.loadInfo()
        const sheet = doc.sheetByIndex[0]
        await doc.addRow(data)
    } catch (error) {
        console.error('Error: ', err)
    }
}