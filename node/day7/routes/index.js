const express = require("express");
const router = express.Router();

const db = [
    {
        image: "https://images.unsplash.com/photo-1625797226467-a87561e3d77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        heading: "Morning View",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus natus unde cumque nobis, perferendis aspernatur minus ut at eos asperiores.",
    },
    {
        image: "https://images.unsplash.com/photo-1625884422538-4edf3a9987d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1181&q=80",
        heading: "Man Standing",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus natus unde cumque nobis, perferendis aspernatur minus ut at eos asperiores.",
    },
    {
        image: "https://images.unsplash.com/photo-1612908630755-31679b2bc781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        heading: "Mountains",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus natus unde cumque nobis, perferendis aspernatur minus ut at eos asperiores.",
    },
];


const users = [
    {
        image: "https://i.pinimg.com/564x/81/fc/52/81fc52b6f93b43699439f61ac181c477.jpg",
        heading: "image of artistic girl",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus natus unde cumque nobis, perferendis aspernatur minus ut at eos asperiores.",
    },
    {
        image: "https://i.pinimg.com/736x/e9/64/47/e96447f6b3aafb8f00a1965d2782dfb4.jpg",
        heading: "good looking model",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus natus unde cumque nobis, perferendis aspernatur minus ut at eos asperiores.",
    },
    {
        image: "https://i.pinimg.com/564x/81/fc/52/81fc52b6f93b43699439f61ac181c477.jpg",
        heading: "best looking model",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus natus unde cumque nobis, perferendis aspernatur minus ut at eos asperiores.",
    },
];

router.get("/", (req, res) => {
    res.render("index", { title: "Homepage", posts: db });
});
router.get("/about", (req, res) => {
    res.render("about", { title: "about page", posts: db });
});

router.get("/users", (req, res) => {
    res.render("users", { title: "users ", posts: users });
});
router.get("/product", (req, res) => {
    res.render("product", { title: "product ", posts: db });
});
router.get("/create-product", (req, res) => {
    res.render("create-product", { title: "create-product" });
});
// router.get("/pro", (req, res) => {
//     res.json(req.query)
// });

router.get("/create-users", (req, res) => {
    res.render("create-users", { title: "create-users" });
});

router.post("/create-product", (req, res) => {
    // res.json(req.query)  // it basically fetch data from URL
    // res.json(req.body);  // fetch data from body/parser
    db.push(req.body);
    res.redirect("/product")
});

router.post("/create-users", (req, res) => {
    // res.json(req.query)  // it basically fetch data from URL
    // res.json(req.body);  // fetch data from body/parser
    users.push(req.body);
    res.redirect("/users")
});


router.get("/delete-product/:index", (req, res) => {
    // res.send(req.params.index)
    //  res.json("message : "+req.params.index)

    db.splice(req.params.index, 1);
    // res.redirect("back")
    res.redirect("/product")
})
router.get("/delete-users/:index", (req, res) => {
    // res.send(req.params.body)
    // res.json("message : "+req.params.index)
    users.splice(req.params.index, 1);
    res.redirect("back")
})

router.get("/update-product/:index", (req, res) => {
res.render("update-product", {
     title : "update product",
     post: db[req.params.index],
     index: req.params.index,
   }) 
//    res.redirect("/product")
})
router.post("/update-product/:index", (req, res) => {
//    let data = db[req.params.index];
//    data.image = req.body.image
//    data.heading = req.body.heading
//    data.para = req.body.para


   // secon method
   db[req.params.index] = req.body;

   res.redirect("/product")
})

router.get("/update-users/:index", (req, res) => {
    res.render("update-users", {
         title : "update users",
         post: users[req.params.index],
         index: req.params.index,
       }) 
    })

    router.post("/update-users/:index", (req, res) => {
           users[req.params.index] = req.body;
        
           res.redirect("/users")
        })

module.exports = router;
