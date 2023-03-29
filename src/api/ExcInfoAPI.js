const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const express = require('express');
// const { ObjectId } = require('mongodb');
const app = express.Router()
const ExcInfoModel = mongoose.model('ExcInfoSchema');

const responseBuilder = (data, success = true) => {
  return {
    success,
    data
  }
}

app.get('/get', (req, res) => { //Line 9
  ExcInfoModel.find({}).then((result) => {
    res.send(responseBuilder({
      message: "Get data from database.",
      posts: result
    }));
  })
});

app.post('/save', (req, res) => {
  const {username, date, activityType, duration, description} = req.body;

  if (!username || !date || !activityType || !duration || !description ) {
    res.send(responseBuilder({
      message: "Please provide valid user name and text"
    }, false)); //L0ine 10
  } else {
    const inputRecords = {
      "username": username,
      "date": date,
      "activityType": activityType,
      "duration": duration,
      "description": description,
    };
    let ExcInfoObject = new ExcInfoModel(inputRecords);
    try{
      ExcInfoObject.save();
      //console.log('ExcInfoObject\n', ExcInfoObject);
      ExcInfoModel.findOne().sort({$natural: -1}).limit(1).then((result) => {
      res.send(responseBuilder({
        message: "Data saved in database",
        posts: result
      }));
    });
    } catch(e) {
      throw e;
    }
  }
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
  
    ExcInfoModel.findByIdAndDelete(new ObjectId(id))
      .then((result) => {
        if (result) {
          res.send(responseBuilder({
            message: "Card deleted.",
            id: id
          }));
        } else {
          res.send(responseBuilder({
            message: "Card not found.",
            id: id
          }, false));
        }
      }).catch((err) => {
        res.send(responseBuilder({
          message: "Error deleting post",
          error: err.message
        }, false));
      })
});

// app.put('/update', (req, res) => {
//     const { username } = req.body;
//     PostModel.updateMany({username:username}, { $set: { username: "Umer" } })
//     .then(() => {
//         PostModel.find({})
//         .then((result) => {
//             res.send(responseBuilder({
//               message: "Data updated",
//               posts: result
//             }));
//           });
//     });
// });

module.exports = app;