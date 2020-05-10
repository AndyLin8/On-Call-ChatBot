//This is the json card message that will be generated
function dbaCard(user, weekCount, shouldUpdate) {
  
  //Original DBA Function here spitting out the output
  var date = new Date();
  var output = "";
  var monday = weekCount + date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1); //date # value of monday. Negative if monday was last month
  Logger.log(monday);
  
  for (var i = 0; i<1; i++){ //***change i<# to set number of weeks
    
    var monDate = new Date(date.getFullYear(), date.getMonth(), monday); //full date object of monday regardless of month. changes to last month if monday is negative
    var weekStart = monDate.getDate(); //monday's actual date #
    var mt = monDate.getMonth(); //monday's actual month #
    var months = ["January", "February", "March", "April", "May", "June", "JULY", "August", "September", "October", "November", "December"];
    var currentM = months[mt];
    
    
    var weekOf = currentM + " " + weekStart; //search string matching spreadsheet naming convention
    
    var spreadsheetId = '176syDlnrVcSfqfAfQnW3LEHfKZCCq0Aj3dB5loscdB4';
    var spreadsheet= SpreadsheetApp.openById(spreadsheetId);
    var schedule = spreadsheet.getSheetByName("DBA On Call");
    
    
    var textfinder = schedule.createTextFinder(weekOf);
    var row = textfinder.findNext().getRow(); //gets row# of for this monday's date
    
    var usName = schedule.getRange("B"+row).getValue();
    var usNum = schedule.getRange("C"+row).getValue();
    var usContact = usName + " " + usNum;
    
    
    
    var inName = schedule.getRange("G"+row).getValue();
    var inNum = schedule.getRange("H"+row).getValue();
    var inContact = inName + " " + inNum;
    
    var output = output + "<b>Week of " + weekOf + "</b>" +":<u>\n8am - 8pm EST:	</u>\n "+ usContact + "\n\n<u>8pm - 8am EST:</u>\n "+ inContact + "\n";
    var monday = monday +7;
  }//End of Loop
  
  Logger.log("Output is: " + output);
  
  //End of Original DBA Function
  
  //parameters are going to keep track of each previous and subsequent week
  
  var parameters = [{key: 'count', value: weekCount.toString()}];
  return {
    actionResponse: {
      type: shouldUpdate ? 'UPDATE_MESSAGE' : 'NEW_MESSAGE'
    },
    cards: [{
      header: {
        title: "<b>On Call DBAs </b>",
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
                  actionMethodName: 'dba_previous',
                  parameters: parameters
                }
              }
            }
          }, {
            textButton: {
              text: 'NEXT',
              onClick: {
                action: {
                  actionMethodName: 'dba_next',
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


 

