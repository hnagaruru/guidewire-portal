package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/archive/ArchivedPolicyFileAcceleratedMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArchivedPolicyFileAcceleratedMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/archive/ArchivedPolicyFileAcceleratedMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArchivedPolicyFileAcceleratedMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get asOfDate () : java.util.Date {
      return getRequireValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    function switchToPolicyPeriodAsOfDate( selectedDate : java.util.Date, period : PolicyPeriod ) {
            var endOfSelectedDate = gw.api.util.DateUtil.endOfDay(selectedDate)
            var newPeriod = entity.Policy.finder.findPolicyPeriodByPolicyAndAsOfDate( policyPeriod.Policy, endOfSelectedDate )
            if ( newPeriod != null ) {
              PolicyFileForward.go( newPeriod, endOfSelectedDate )
            } else {
              var dateStr = gw.api.util.StringUtil.formatDate(endOfSelectedDate, "short")
              throw new gw.api.util.DisplayableException( DisplayKey.get("Java.PolicyPeriodAsOfDateSelector.NoPeriod",  dateStr ) )
            }
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/archive/ArchivedPolicyFileAcceleratedMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyPeriodEffDateIDExpressionsImpl extends ArchivedPolicyFileAcceleratedMenuActionsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=PolicyPeriodEffDateID) at ArchivedPolicyFileAcceleratedMenuActions.pcf: line 24, column 31
    function action_3 () : void {
      switchToPolicyPeriodAsOfDate(ArgValue, policyPeriod)
    }
    
    // 'value' attribute on Link (id=PolicyPeriodEffDateID) at ArchivedPolicyFileAcceleratedMenuActions.pcf: line 24, column 31
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArgValue = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'argInitialValue' attribute on Link (id=PolicyPeriodEffDateID) at ArchivedPolicyFileAcceleratedMenuActions.pcf: line 24, column 31
    function initArg_4 () : void {
      ArgValue = asOfDate;
    }
    
    // 'action' attribute on Link (id=PolicyPeriodEffDateID) at ArchivedPolicyFileAcceleratedMenuActions.pcf: line 24, column 31
    function onChange_0 () : void {
      switchToPolicyPeriodAsOfDate(ArgValue, policyPeriod)
    }
    
    // Link (id=PolicyPeriodEffDateID) at ArchivedPolicyFileAcceleratedMenuActions.pcf: line 24, column 31
    function value_1 () : java.util.Date {
      return ArgValue
    }
    
    property get ArgValue () : java.util.Date {
      return getArgValue(1) as java.util.Date
    }
    
    property set ArgValue ($arg :  java.util.Date) {
      setArgValue(1, $arg)
    }
    
    
  }
  
  
}