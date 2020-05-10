function onMessage(event) 
{
  var command = event.message.text.toUpperCase(); //to ignore case
  
  if (command == "ESM" || command == "\@WHO'S ON CALL CHATBOT ESM")
  {
    //return { "text": "ESM \n" + ESM()};
    return esmCard(event.user.displayName, 0); 
    
  }
  
  else if (command == "DBA" || command == "\@WHO'S ON CALL CHATBOT DBA")
  {
    //return { "text": "DBA \n" + DBA()};
    return dbaCard(event.user.displayName, 0);
    
  }
  
  else if (command == "SYS ADMIN" || command == "SYSADMIN" || command == "\@WHO'S ON CALL CHATBOT SYS ADMIN" || command == "\@WHO'S ON CALL CHATBOT SYSADMIN" || command == "SYS" || command == "\@WHO'S ON CALL CHATBOT SYS")
  {
    return SysAdminCard(event.user.displayName, 0);
    //return { "text": "Sys Admins \n" + SysAdmin()}; 
  }
  
  
  else if (command == "WAN" || command == "\@WHO'S ON CALL CHATBOT WAN")
  {
    
    return wanCard(event.user.displayName, 0);
    
  }
  
  else if (command == "LAN" || command == "\@WHO'S ON CALL CHATBOT LAN")
  {
    
    return lanCard(event.user.displayName, 0);
    
  }
  
  /***********************************************************************/ 
  
  else {return{"text": "Thank you for using the EPC Who's On Call ChatBot! \nBot Commands: \nDBA \nSys, Sys Admin or SysAdmin \nESM \nWAN \nLAN \n\nex. @Who's On Call Chatbot Dba \n ***Note: Caps do not matter"}}
  
}













/**
* Responds to an ADDED_TO_SPACE event in Hangouts Chat.
*
* @param {Object} event the event object from Hangouts Chat
*/
function onAddToSpace(event) {
  var message = "";
  
  if (event.space.type == "DM") 
  {
    message = "Thank you for adding me to a DM, " + event.user.displayName + "!";
  } 
  
  else 
  {
    message = "Thank you for adding me to " + event.space.displayName;
  }
  
  return { "text": message };
}

/**
* Responds to a REMOVED_FROM_SPACE event in Hangouts Chat.
*
* @param {Object} event the event object from Hangouts Chat
*/
function onRemoveFromSpace(event) {
  console.info("Bot removed from ", event.space.name);
}


