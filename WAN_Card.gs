function wanCard(user, count, shouldUpdate)
{
  
  
  var spreadsheetId = '1g2JDhCGhwgaPOb7AYtLdQHuP9iFQXGIDONSm2AkYp_Y';
  var spreadsheet= SpreadsheetApp.openById(spreadsheetId);
  var schedule = spreadsheet.getSheetByName("Contacts");
  
  
  
  if (count<7) //count is number or rows in this section. 
  {
    var row = 7 + count;
    
  }
  
  
  else 
  {
    var row = 7;
    var count = 0;
  }
  
  if (row <7) 
  {
    var row = 7;
    var count = 0;
  }
  var name = schedule.getRange("B"+row).getValue() + " " + schedule.getRange("A"+row).getValue();
  var office = schedule.getRange("C"+row).getValue();
  var cell = schedule.getRange("E"+row).getValue()
  var comments = schedule.getRange("G"+row).getValue();
  
  
  var output ="<u>"+ name +"</u><b>\n\nOffice #: </b>"+ office + "<b>\nCell #: </b>" + cell + "<b>\nComments: </b>"+ comments;
  
  
  
  
  Logger.log(output);
  
  
  var parameters = [{key: 'count', value: count.toString()}];
  return {
    actionResponse: {
      type: shouldUpdate ? 'UPDATE_MESSAGE' : 'NEW_MESSAGE'
    },
    cards: [{
      "header": {
        "title": "On Call WAN",
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
                    actionMethodName: 'wan_previous',
                    parameters: parameters
                  }
                }
              }
            }, {
              textButton: {
                text: 'NEXT',
                onClick: {
                  action: {
                    actionMethodName: 'wan_next',
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


