// $(document).ready(function() {
var config = {
  apiKey: "AIzaSyDAepZl_CLXxMWSSovaX5XtsVIKYmA6mbc",
  authDomain: "train-schedule-9f586.firebaseapp.com",
  databaseURL: "https://train-schedule-9f586.firebaseio.com",
  projectId: "train-schedule-9f586",
  storageBucket: "train-schedule-9f586.appspot.com",
  messagingSenderId: "438124838591"
};
firebase.initializeApp(config);

var trainName = "";
var destination = "";
var firstTrainTime = 0;
var frequency = 0;

$("#submitButton").on("click", function(event) {
  event.preventDefault();

  trainName = $("#trainName").val();
  //   .trim();
  destination = $("#destination").val();
  //   .trim();
  firstTrainTime = $("#firstTrainTime").val();
  //   .trim();
  frequency = $("#frequency").val();
  //   .trim();

  console.log(trainName);
  console.log(destination);
  console.log(firstTrainTime);
  console.log(frequency);

  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency,
    dataAdded: firebase.database.ServerValue.TIMESTAMP
  });
});
// });
