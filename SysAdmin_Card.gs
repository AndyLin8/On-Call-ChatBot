function SysAdminCard(user, dayCount, shouldUpdate) {
  
  var spreadsheetId = '1TRixPf7-uVmZJurS-mBZ8KGUt8Lb8qFTGrtZAXOy6E4';
  var spreadsheet= SpreadsheetApp.openById(spreadsheetId);
  var schedule = spreadsheet.getSheetByName("2020");
  var contactSheet = spreadsheet.getSheetByName("Contact Details"); 
  
  var date = new Date();
  var mt = date.getMonth();
  var day = dayCount + date.getDate();
  
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var currentM = months[mt];
  
  var output = "";
  
  for (var i = 0; i<1; i++){ //***change i<# to set number of days
    var today = day+"-"+currentM;    
    var textfinder = schedule.createTextFinder(today);
    
    var row = textfinder.findNext().getRow(); //gets row# of today's date
    var rowRange = "A"+row+ ":N" + row;
    
    var winCol = schedule.getRange(rowRange).getValues()[0].indexOf('NT')+1;             //gets column# of NT admin using array index. add 1 because array starts at 0
    var winLName = schedule.getRange(1, winCol).getValue();                              //nt last name from schedule
    var winContactRow = contactSheet.createTextFinder(winLName).findNext().getRow();
    var winContact = contactSheet.getRange(winContactRow, 1).getValue(); //win contact name
    var winPhone =  contactSheet.getRange(winContactRow, 4).getValue(); //win contact phone    
    
    var unixCol = schedule.getRange(rowRange).getValues()[0].indexOf('UNIX')+1;          //gets column# of unix admin using array index. add 1 because array starts at 0
    var unixLName = schedule.getRange(1, unixCol).getValue();                            //unix last name from schedule
    var unixContactRow = contactSheet.createTextFinder(unixLName).findNext().getRow();   //row of contact in Contact details sheet
    var unixContact = contactSheet.getRange(unixContactRow, 1).getValue(); //unix contact name
    var unixPhone =  contactSheet.getRange(unixContactRow, 4).getValue(); //unix contact phone
    
    var output = output +"<b>"+ today + " Windows: </b>\n "+ winContact+ " " +winPhone + "\n\n" + "<b>" + today + " Unix: </b>\n "+ unixContact+ " " +unixPhone + "\n";
    
    var day = day +1;
  }
  
  var parameters = [{key: 'count', value: dayCount.toString()}];
  return {
    actionResponse: {
      type: shouldUpdate ? 'UPDATE_MESSAGE' : 'NEW_MESSAGE'
    },
    cards: [{
      header: {
        title: "<b>On Call Sys Admins </b>",
        "subtitle": "GIT. Working Smarter and Faster",
        "imageUrl": "https://www.frugalcouponliving.com/wp-content/uploads/2010/08/colgate-smile-earth-logo.gif"
      },
      sections: [{
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
                  actionMethodName: 'sys_previous',
                  parameters: parameters
                }
              }
            }
          }, {
            textButton: {
              text: 'NEXT',
              onClick: {
                action: {
                  actionMethodName: 'sys_next',
                  parameters: parameters
                }
              }
            }
          }]
        }]
      }]
    }]
  };
}//-------------End function SysAdmin----------------------------------------------------------------------------------------


