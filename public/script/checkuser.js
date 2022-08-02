app.post("/api/auth", (req, res) => {
    if (req.body.gmail && req.body.pass && req.body.status == "new") {
      User.find({ gmail: req.body.gmail }, (err, users) => {
        if (!err) {
          if (users.length > 0) {
            res.json({ error: "The gmail already exist." });
  
            return;
          }
          const validReq = validate.validate({
            gmail: req.body.gmail,
            pass: req.body.pass,
          });
  
          if (validReq.error) {
            return res.json({ error: validReq.error.details[0].message });
          }
          bcrypt.hash(req.body.pass, 12).then((hashedPass) => {
            // console.log(hashedPass);
            const user = new User({ gmail: req.body.gmail,
                password: hashedPass,
              });
              user.save().then((user) =>
                res.json({
                  status: "OK",
                  gmail: user.gmail,
                  token: jwt.sign({ _id: user._id }, jwtKey),
                })
              );
            });
          }
        });
    
        return;
      }
    
    //   User.find({ gmail: req.body.gmail }, (err, users) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       if (gmail.length > 0) {
    //         bcrypt.compare(req.body.pass, gmail[0].password, (err, hash) => {
    //           if (hash) {
    //             return res.json({
    //               validate: true,
    //               username: gmail[0].username,
    //               token: jwt.sign({ _id: gmail[0]._id }, jwtKey),
    //             });
    //           } else {
    //             return res.json({ validate: false });
    //           }
    //         });
    //       } else {
    //         return res.json({ validate: false });
    //       }
    //     }
    //   });
    // });