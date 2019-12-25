module.exports = {
    getHomePage: (req, res) => {
        res.render('landing.ejs', {title: "Welcome to Cytonn School | Register teachers"});
    },
    getSubjectPage: (req, res) => {
        res.render('subject.ejs', {title: "Welcome to Cytonn School | Add Subjects"});
    },
    getSchedulePage: (req, res) => {
        let codes = [];
        let names = [];
        let query = "SELECT name FROM teachers; SELECT code FROM subjects";

        db.query(query, [2, 1], function (error, results, fields) {
            if (error) {
                throw error;
            }
            res.render('schedule.ejs', {
                title: "Welcome to Cytonn School | Create Schedule",
                codes: results[1],
                names: results[0]
            });
            console.log(results[0]);
            console.log(results[1]);
        });
    },
    viewSchedule: (req, res) => {
        let query = "SELECT * FROM schedules";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('view_schedule.ejs', {
                title: "Welcome to Cytonn School | View Schedules",
                data: result
            });
        });
    }
};
