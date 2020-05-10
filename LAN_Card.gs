function lanCard(user, count, shouldUpdate)
{
  
  
  var spreadsheetId = '1g2JDhCGhwgaPOb7AYtLdQHuP9iFQXGIDONSm2AkYp_Y';
  var spreadsheet= SpreadsheetApp.openById(spreadsheetId);
  var schedule = spreadsheet.getSheetByName("Contacts");
  
  
  
  if (count<5) //count is number or rows in this section. 
  {
    var row = 28 + count;
    
  }
  
  
  else 
  {
    var row = 28;
    var count = 0;
  }
  
  if (row <28) 
  {
    var row = 28;
    var count = 0;
  }
  
  var name = schedule.getRange("B"+row).getValue();
  var office = schedule.getRange("C"+row).getValue();
  var cell = schedule.getRange("D"+row).getValue()
  var comments = schedule.getRange("G"+row).getValue();
  
  var mumContact = schedule.getRange("B31").getValue();
  var mumNum = schedule.getRange("D31").getValue();
  var mumComments = schedule.getRange("G31").getValue();
  var output ="<u>"+ name +"</u><b>\n\nOffice #: </b>"+ office + "<b>\nCell #: </b>" + cell + "<b>\nComments: </b>"+ comments +"\n\n<u>"+ mumContact +"</u>\n\n<b>Number: </b>" + mumNum + "<b>\nComments: </b>"+ mumComments;
  
  
  
  
  Logger.log(output);
  
  
  var parameters = [{key: 'count', value: count.toString()}];
  return {
    actionResponse: {
      type: shouldUpdate ? 'UPDATE_MESSAGE' : 'NEW_MESSAGE'
    },
    cards: [{
      "header": {
        "title": "On Call LAN",
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
                    actionMethodName: 'lan_previous',
                    parameters: parameters
                  }
                }
              }
            }, {
              textButton: {
                text: 'NEXT',
                onClick: {
                  action: {
                    actionMethodName: 'lan_next',
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


