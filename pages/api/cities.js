// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200
    res.json({
        data: [
            {title: "tehran", id: "1"},
            {title: "isfahan", id: "2"},
            {title: "ramsar", id: "3"},
            {title: "mashhad", id: "4"},
        ]
    })
}
