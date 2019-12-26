module.exports = {
    getHomePage: (req, res) => {
        res.render('landing.ejs', {title: "Welcome to Cytonn School | Register teachers"});
    },
    getSubjectPage: (req, res) => {
        res.render('subject.ejs', {title: "Welcome to Cytonn School | Add Subjects"});
    },
    getSchedulePage: (req, res) => {
        let query = "SELECT * FROM `teachers`";
        let query1 = "SELECT * FROM `subjects`";
        db.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            db.query(query1, function (error, results) {
                if (error) {
                    throw error;
                }
                res.render('schedule.ejs', {
                    title: "Welcome to Cytonn School | Create Schedule",
                    codes: results,
                    names: result

                });
                console.log("codes");
                console.log(results);
                console.log("names");
                console.log(result);
            });
        });

    },
    viewSchedule: (req, res) => {
        let query = "SELECT * FROM schedules";
        let query1 = "SELECT * FROM subjects";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            db.query(query1, (err, results) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.render('view_schedule.ejs', {
                    title: "Welcome to Cytonn School | View Schedules",
                    schedules: result,
                    subjects: results
                });
            });

        });
    },
    deleteSchedule: (req, res) => {
        let id = req.params.id;
        let query = "DELETE FROM schedules WHERE `id` = id";
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                // return res.status(500).send(err);
            }
            res.redirect('/view_schedule');
        });
    }
};
