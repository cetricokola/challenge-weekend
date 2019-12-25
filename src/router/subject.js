module.exports = {
    addSubject: (req, res) => {
        class Subject {
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
        let subject = new Subject();
        subject.setName(req.body.name);
        subject.setCode(req.body.code);
        let subject_name = subject.getName();
        let subject_code = subject.getCode();
        let query = "INSERT INTO `subjects`( name, code) VALUES(?, ?)";
        let values =[subject_name, subject_code];
        db.query(query, values,(err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            } else {
                res.redirect('/subject');
            }
        });
    }
};
