module.exports = {
    addTeachers: (req, res) => {

        class Teachers {
            constructor() {
                var name;
                var email;
            }

            setName(name) {
                this.name = name;
            }

            setEmail(email) {
                this.email = email;
            }

            getName() {
                return this.name;
            }

            getEmail() {
                return this.email;
            }
        }

        let teacher = new Teachers();
        teacher.setName(req.body.name);
        teacher.setEmail(req.body.email);
        let namea = teacher.getName();
        let emaila = teacher.getEmail();
        let query = "INSERT INTO `teachers`( name, email) VALUES(?, ?)";
        let values =[namea,emaila];
        db.query(query, values,(err, result) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.redirect('/');
            }
        });
    }
};
