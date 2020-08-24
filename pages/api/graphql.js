// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200
    res.json({
        "data": {
            "layout": {
                "images": [{
                    "url": "https://www.google.com/",
                    "photographer": "test",
                    "photographerUrl": "test",
                    "id": "SW1hZ2VPYmplY3Q6NWYzN2FlMTBhY2JhNzAxMzI2NWFmZTlh"
                }],
            }
        }
    })
}
