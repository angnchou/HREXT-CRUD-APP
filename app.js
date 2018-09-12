//add due date // 5 hours
// mouseover to show item detail // 5 hours
// categorize list with color/tag // 5 hours


//display list (using items)
//select item for edit or delete
/// checkbox and strikethrough when box is checked // 5 hours */

$(document).ready(function() {
    let num = 0;
  
  $(".add-text-btn").on("click", function(){

    // using jquery selector to read input values
    //AC
    
    let items = $('<ol class= "items" input type="checkbox"></ol>')//AC
    //$('<input type="checkbox">').appendTo(items)//AC 
    let inputKey = $(".user-input-title").val();
    let inputValue = $(".user-input-body").val();
  
    num ++;

    items.text(num + ".   " + inputKey + "  -  " + inputValue); //AC
        // $tweet.html('<a href="#"><div class = "userLink ' + tweet.user + '"> @' + tweet.user + '</div></a>' + " " + tweet.message + '<br>' + tweet.created_at);

    items.appendTo($(".display")); //AC


    //$('#containerId').append('<input type="checkbox" name="myCheckbox" />');


    // clear values on the display
    $(".user-input-title").val("");
    $(".user-input-body").val("");
    
    // console log the input values {key:value}
    //console.log(inputKey, inputValue);
    
    
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    localStorage.setItem(inputKey, inputValue);

    //AC -to have entered items display on page


    
    // data-uniqID
    // let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';
    // $(".display").html(itemHtml);
    //console.log(localStorage);
    // how can we delegate this event to the outer html node?
    // https://learn.jquery.com/events/event-delegation/

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

  });



   // TODO add back in later
  // example of how to do a filter based on a keyup event
//    $(".user-input").on("keyup", function(){
//      let inputValue = $(".user-input").val();
//      localStorage.setItem("testStorage", inputValue);
//      $(".display").text(localStorage.getItem("testStorage"));
//    });

   $(".del-text-btn").on("click", function() {
     alert('item deleted? check the console'); // maybe change to a window.confirm
     localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
     $(".user-input-title").val("");
     $(".user-input-body").val("");
     // clearing display? what if I have multiple items?
     // after item is removed from local storage, redisplay items from local storage
     // refresh from storage?
   });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys



});




// //js


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
