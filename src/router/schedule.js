module.exports = {
    createSchedule: (req, res) => {
        class Schedule {
            constructor() {
                var name;
                var code;
            }
            setName(name) {
                this.name = name;
            }
            getName() {
                return this.name;
            }
            setCode(code) {
                this.code = code;
            }
            getCode() {
                return this.code;
            }
        }
        let schedule = new Schedule();
        schedule.setName(req.body.name);
        schedule.setCode(req.body.code);
        let teacher_name = schedule.getName();
        let subject_code = schedule.getCode();
        let query = "INSERT INTO `schedules`( teacher_name, subject_code) VALUES(?, ?)";
        let values =[teacher_name, subject_code];
        db.query(query, values,(err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            } else {
                res.redirect('/schedule');
            }
        });
    }
};

