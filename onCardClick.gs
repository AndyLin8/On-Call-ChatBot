//This event handler is for ALL on Click Events in the Card Specify it by actionMethodName
function onCardClick(e) {
  
  /*
  if (e.action.actionMethodName === 'newCard') {
  return createCard_DBA(e.user.displayName, 0);
  }
  */
  
  var count = +e.action.parameters[0].value;
  
  //********   DBA    ****************************************************
  if (e.action.actionMethodName === 'dba_next'){
    count=count+7; //counts by week
    return dbaCard(e.user.displayName, count, true);
  }
  else if(e.action.actionMethodName === 'dba_previous'){
    count=count-7;
    return dbaCard(e.user.displayName, count, true);
  }
  
  //********   Sys Admin    ****************************************************
  
  else if(e.action.actionMethodName === 'sys_next'){
    count=count+1; //counts by day
    return SysAdminCard(e.user.displayName, count, true);
  }
  else if(e.action.actionMethodName === 'sys_previous'){
    count=count-1;
    return SysAdminCard(e.user.displayName, count, true);
  }
  
  //********   ESM    ****************************************************
  
  else if(e.action.actionMethodName === 'esm_next'){
    count=count+1; //counts by month
    return esmCard(e.user.displayName, count, true);
  }
  else if(e.action.actionMethodName === 'esm_previous'){
    count=count-1;
    return esmCard(e.user.displayName, count, true);
    
  }
  
  //********   WAN    ****************************************************
  
  else if(e.action.actionMethodName === 'wan_next'){
    count=count+1; //counts by month
    return wanCard(e.user.displayName, count, true);
  }
  else if(e.action.actionMethodName === 'wan_previous'){
    count=count-1;
    return wanCard(e.user.displayName, count, true);
    
  }
  
  //********   LAN    ****************************************************
  
  
  else if(e.action.actionMethodName === 'lan_next'){
    count=count+1; //counts by month
    return lanCard(e.user.displayName, count, true);
  }
  else if(e.action.actionMethodName === 'lan_previous'){
    count=count-1;
    return lanCard(e.user.displayName, count, true);
    
  }
  
}// End onCardClick

