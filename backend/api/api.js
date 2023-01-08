const { Bank, tranTable } = require("../models/bankingsys");
const router = require("express").Router();

//READ
router.get("/accounts", (req, res) => {
  Bank.find({}).then((accounts) => {
    res.json(accounts);
  });
});

router.get("/transactions", (req, res) => {
  tranTable.find({}).then((accounts) => {
    res.json(accounts);
  });
});

//UPDATE
router.patch("/accounts", (req, res) => {
  let person = req.body.person;
  let sender = req.body.id;
  let money = req.body.money;
  // create object to update balance
  let payr_bal = { balance: req.body.payer_bal };
  let rec_bal = { balance: req.body.rec_bal };

  //update balance in document
  Bank.findByIdAndUpdate(person, rec_bal, { new: true }).exec();
  Bank.findByIdAndUpdate(sender, payr_bal, { new: true }).exec();

  let transactionObject = {
    from: sender,
    date: new Date(),
    to: person,
    money: money,
    new_bal_payer: String(req.body.payer_bal),
  };

  const transaction = new tranTable(transactionObject);
  transaction.save().then((r) => res.status(200).json(r));
});

//Create
router.post("/accounts/new", (req, res) => {
  const account = new Bank(req.body);

  account.save().then((r) => {
    res.status(201).json(r);
  });
});

//DELETE
router.delete("/accounts/:id", (req, res) => {
  res.send({});
});

module.exports = router;
