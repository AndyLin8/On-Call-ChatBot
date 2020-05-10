function esmCard(user, monthCount, shouldUpdate) {
  var date = new Date();
  var mt = monthCount + date.getMonth();
  var output = "";
  for (var i = 0; i <1; i++){ //change i<# to set number of months
    var months = ["January", "February", "March", "April", "May", "June", "JULY", "August", "September", "October", "November", "December"];
    var currentM = months[mt]; 
    
    var spreadsheetId = '1QzfG439uVsUmbLkSxno_ESs1oTRBFqU3jT57l4h77AA';
    var spreadsheet= SpreadsheetApp.openById(spreadsheetId);
    var schedule = spreadsheet.getSheetByName("Sheet1");
    
    var textfinder = schedule.createTextFinder(currentM);
    var row = textfinder.findNext().getRow();
    
    var esmName = schedule.getRange("B"+row).getValue();
    var esmNum = schedule.getRange("C"+row).getValue();
    
    
    var output = output +("<b>" + currentM + ":</b>\n" + esmName + " " + esmNum+ "\n");
    var mt = mt + 1;
  }
  
  Logger.log(output);
  
  var parameters = [{key: 'count', value: monthCount.toString()}];
  return {
    actionResponse: {
      type: shouldUpdate ? 'UPDATE_MESSAGE' : 'NEW_MESSAGE'
    },
    cards: [{
      "header": {
        "title": "On Call ESM",
        "subtitle": "GIT. Working Smarter and Faster",
        "imageUrl": "https://www.frugalcouponliving.com/wp-content/uploads/2010/08/colgate-smile-earth-logo.gif"
      },
      sections: [
        
        
        
        {
          widgets: [{
            textParagraph: {
              text: output
            }
          }, {
            buttons: [{
              textButton: {
                text: 'PREVIOUS',
                onClick: {
                  action: {
                    actionMethodName: 'esm_previous',
                    parameters: parameters
                  }
                }
              }
            }, {
              textButton: {
                text: 'NEXT',
                onClick: {
                  action: {
                    actionMethodName: 'esm_next',
                    parameters: parameters
                  }
                }
              }
            }]
          }]
        }]
    }]
  };
  
}


