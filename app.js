//add due date // 5 hours
// mouseover to show item detail // 5 hours
// categorize list with color/tag // 5 hours


//display list (using items)
//select item for edit or delete
/// checkbox and strikethrough when box is checked // 5 hours */

$(document).ready(function() {
  let num = 0;
  let MYKEY = "storedData";
  let myData = localStorage.getItem(MYKEY);
  let storedItems = JSON.parse(myData); 
  if (storedItems === null) {
    storedItems = [];
  }
  $("select").on("change", function(){
    $(this).css("background",$("select option:selected").val());
  });
  
  $(".add-text-btn").on("click", function(){

    // using jquery selector to read input values
    //AC
    let time = moment(new Date()).format('MMM Do YYYY');
    // let items = $('<ol class="items" ></ol>' + '<input type="checkbox"');//AC

    let items = $('<div><input type="checkbox"> <ol class="items"></ol></div>')//AC
    //$('<input type="checkbox">').appendTo(items)//AC 
    let inputKey = $(".user-input-title").val();
    let inputValue = $(".user-input-body").val();


    // items.children("ol").html("<span class='time'>" + time + "</span>" + "<span class='num'>" + num + "</span>" + "  .   " + "<span id= '"+ localStorage.length + "' class= 'title'>" + inputKey + "</span>"  + "<span class='body'>" + inputValue + "</span>"); 
    
    let itemObject = {"id": localStorage.length,
    "title": inputKey,
    "body": inputValue,
    "timeStamp": time,
    "category": "",
    "color": ""
  }
    //AC
        // $tweet.html('<a href="#"><div class = "userLink ' + tweet.user + '"> @' + tweet.user + '</div></a>' + " " + tweet.message + '<br>' + tweet.created_at);

    //items.appendTo($(".display")); //AC
    displayNewLine(itemObject);

    storedItems.push(itemObject);
    console.log('length ' + localStorage.length);
    localStorage.setItem(MYKEY, JSON.stringify(storedItems));
    //let data = JSON.parse(localStorage.getItem('items'));

  }); 


  // clear values on the display
  $(".user-input-title").val("");
  $(".user-input-body").val("");
  
    // console log the input values {key:value}
    //console.log(inputKey, inputValue);
    
    
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    //localStorage.setItem(inputKey, inputValue);

    //AC -to have entered items display on page


    storedItems.forEach((item, index) => displayNewLine(item, index));
    // data-uniqID
    
    //console.log(localStorage);
    // how can we delegate this event to the outer html node?
    // https://learn.jquery.com/events/event-delegation/

    function displayNewLine(item, index) {
      let itemHtml = '<div class="display-item" data-storage-key="'+ 
        index + 
        '"><input type="checkbox"> ' + 
        item.timeStamp + "&nbsp;&nbsp;&nbsp;&nbsp;" +
        item.title + "&nbsp;&nbsp;&nbsp;&nbsp;" +
        ' ' +  item.body + '</div>';
        $(".display").append(itemHtml);
    }

    $(".display-item").on("click", function(e){
      // plop the key:value back into the input boxes

      // get the values from the the data dash properties
      console.log(e.target.dataset.storageKey);//whole div tag printed after text is clicked on
      console.log("key=> ", e.target.dataset.storageKey); // user-input-title
      localStorage.getItem(e.target.dataset.storageKey); // user-input-body

      // set those values in the form fields
      $(".user-input-title").val(e.target.dataset.storageKey);
      console.log(e.target.dataset.storageKey);//logs the title
      $(".user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));//div tag class=user-input-body
    });

//AC
//store items in localStorage
    //let storedItems = [];
    
//local storage exists, get data from items in localStorage; otherwise []
    // if (localStorage.getItem("itemObject")) {
    //   items = JSON.parse(localStorage.getItem("itemObject"));
    // } else {
    //   items = [];
    // }


//to make sure data is stored until we hit "clear"
    //   if (localStorage.getItem("itemObject")) {
    //   items = JSON.parse(localStorage.getItem("itemObject"));
    // } else {
    //   items = [];
    // }
  //});





   // TODO add back in later
  // example of how to do a filter based on a keyup event
//    $(".user-input").on("keyup", function(){
//      let inputValue = $(".user-input").val();
//      localStorage.setItem("testStorage", inputValue);
//      $(".display").text(localStorage.getItem("testStorage"));
//    });

  $(".del-text-btn").on("click", function() {
     window.confirm('Press ok to delete'); // maybe change to a window.confirm
     console.log(localStorage);

     let indexStored = $("input:checked").parent().attr("data-storage-key");
     storedItems.splice(indexStored, 1);
     localStorage.setItem(MYKEY, JSON.stringify(storedItems)); 

     // grab the title and plop here
     $("input:checked").parent().remove();
     //console.log(title);
     // $(".user-input-body").val("");
     // let body = $("input:checked").parent().find(".body").text();
     // //console.log(body);
     // clearing display? what if I have multiple items?
     // after item is removed from local storage, redisplay items from local storage
     // refresh from storage?
   });

  $(".del-all-text-btn").on("click", function() {
     window.confirm('Press ok to delete all items?'); // maybe change to a window.confirm

     localStorage.removeItem(MYKEY); 

     // grab the title and plop here
     $(".display").empty();
     storedItems = [];
     //console.log(title);
     // $(".user-input-body").val("");
     // let body = $("input:checked").parent().find(".body").text();
     // //console.log(body);
     // clearing display? what if I have multiple items?
     // after item is removed from local storage, redisplay items from local storage
     // refresh from storage?
   });





});


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys




// //original JS file below


// $(document).ready(function() {


//   $(".add-text-btn").on("click", function(){

//     // store values
//     let inputKey = $(".user-input-title").val();
//     let inputValue = $(".user-input-body").val();

//     // clear values
//     $(".user-input-title").val("");
//     $(".user-input-body").val("");

//     console.log(inputKey, inputValue);

//     localStorage.setItem(inputKey, inputValue);
//     // data-
//     let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';
//     $(".display").html(itemHtml);
//     //console.log(localStorage);
//     // how can we delegate this event to the outer html node?
//     // https://learn.jquery.com/events/event-delegation/

//     $(".display-item").on("click", function(e){
//       // plop the key:value back into the input boxes

//       // get the values from the the divs?
//       console.log("key=> ", e.target.dataset.storageKey); // user-input-title
//       localStorage.getItem(e.target.dataset.storageKey); // user-input-body

//       // set those values in the form fields
//       $(".user-input-title").val(e.target.dataset.storageKey);
//       $(".user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));
//     });

//   });



//    // TODO add back in later
//    // $(".user-input").on("keyup", function(){
//    //   let inputValue = $(".user-input").val();
//    //   localStorage.setItem("testStorage", inputValue);
//    //   $(".display").text(localStorage.getItem("testStorage"));
//    // });

//    $(".del-text-btn").on("click", function() {
//      alert('item deleted? check the console'); // maybe change to a window.confirm
//      localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
//      $(".user-input-title").val("");
//      $(".user-input-body").val("");
//      // clearing display? what if I have multiple items?
//      // after item is removed from local storage, redisplay items from local storage
//      // refresh from storage?
//    });


//    // iterative approach to adding items
//    // store data as stringified array of objects
//    // store data with individual keys
//   // how do we get keys? research Object.keys



// });
