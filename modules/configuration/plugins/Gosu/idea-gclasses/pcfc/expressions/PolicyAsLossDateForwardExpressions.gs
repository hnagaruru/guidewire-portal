package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyAsLossDateForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyAsLossDateForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyAsLossDateForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyAsLossDateForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyNumber :  String, retrieveAsOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at PolicyAsLossDateForward.pcf: line 29, column 44
    function action_3 () : void {
      PolicySearch.go(errorMessage)
    }
    
    // 'action' attribute on ForwardCondition at PolicyAsLossDateForward.pcf: line 32, column 45
    function action_6 () : void {
      PolicyFileForward.go(retrievedPeriod, retrievedPeriod.SliceDate, "PolicySummary with Error", {errorMessage})
    }
    
    // 'action' attribute on ForwardCondition at PolicyAsLossDateForward.pcf: line 35, column 49
    function action_9 () : void {
      JobForward.go(retrievedPeriod.Job)
    }
    
    // 'action' attribute on ForwardCondition at PolicyAsLossDateForward.pcf: line 35, column 49
    function action_dest_10 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(retrievedPeriod.Job)
    }
    
    // 'action' attribute on ForwardCondition at PolicyAsLossDateForward.pcf: line 29, column 44
    function action_dest_4 () : pcf.api.Destination {
      return pcf.PolicySearch.createDestination(errorMessage)
    }
    
    // 'action' attribute on ForwardCondition at PolicyAsLossDateForward.pcf: line 32, column 45
    function action_dest_7 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(retrievedPeriod, retrievedPeriod.SliceDate, "PolicySummary with Error", {errorMessage})
    }
    
    // 'condition' attribute on ForwardCondition at PolicyAsLossDateForward.pcf: line 35, column 49
    function condition_11 () : java.lang.Boolean {
      return not retrievedPeriod.Promoted
    }
    
    // 'condition' attribute on ForwardCondition at PolicyAsLossDateForward.pcf: line 29, column 44
    function condition_5 () : java.lang.Boolean {
      return retrievedPeriod == null
    }
    
    // 'condition' attribute on ForwardCondition at PolicyAsLossDateForward.pcf: line 32, column 45
    function condition_8 () : java.lang.Boolean {
      return retrievedPeriod.Promoted
    }
    
    // 'initialValue' attribute on Variable at PolicyAsLossDateForward.pcf: line 17, column 30
    function initialValue_0 () : java.util.Date {
      return java.util.Date.CurrentDate
    }
    
    // 'initialValue' attribute on Variable at PolicyAsLossDateForward.pcf: line 22, column 28
    function initialValue_1 () : PolicyPeriod {
      return retrievePeriod()
    }
    
    // 'initialValue' attribute on Variable at PolicyAsLossDateForward.pcf: line 26, column 22
    function initialValue_2 () : String {
      return getErrorMessage(retrievedPeriod)
    }
    
    // 'parent' attribute on Forward (id=PolicyAsLossDateForward) at PolicyAsLossDateForward.pcf: line 7, column 30
    static function parent_12 (policyNumber :  String, retrieveAsOfDate :  java.util.Date) : pcf.api.Destination {
      return pcf.PolicyForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.PolicyAsLossDateForward {
      return super.CurrentLocation as pcf.PolicyAsLossDateForward
    }
    
    property get errorMessage () : String {
      return getVariableValue("errorMessage", 0) as String
    }
    
    property set errorMessage ($arg :  String) {
      setVariableValue("errorMessage", 0, $arg)
    }
    
    property get policyNumber () : String {
      return getVariableValue("policyNumber", 0) as String
    }
    
    property set policyNumber ($arg :  String) {
      setVariableValue("policyNumber", 0, $arg)
    }
    
    property get retrieveAsOfDate () : java.util.Date {
      return getVariableValue("retrieveAsOfDate", 0) as java.util.Date
    }
    
    property set retrieveAsOfDate ($arg :  java.util.Date) {
      setVariableValue("retrieveAsOfDate", 0, $arg)
    }
    
    property get retrievedPeriod () : PolicyPeriod {
      return getVariableValue("retrievedPeriod", 0) as PolicyPeriod
    }
    
    property set retrievedPeriod ($arg :  PolicyPeriod) {
      setVariableValue("retrievedPeriod", 0, $arg)
    }
    
    function retrievePeriod() : PolicyPeriod {
            return Policy.retrievePeriod(policyNumber, retrieveAsOfDate)
          }
    
          function getAsOfDate( period: PolicyPeriod, asOfDate: java.util.Date ): java.util.Date {
            if ( asOfDate.before( period.PeriodStart ) ) {
              return period.PeriodStart
            } else if ( not asOfDate.before( period.PeriodEnd ) ) {
              return period.PeriodEnd.addSeconds( -1 )
            } else {
              return asOfDate
            }
          }
    
          function getErrorMessage( period: PolicyPeriod) : String {
            if (period == null) {
              return DisplayKey.get("Web.Errors.NoPolicyFound", policyNumber)
            }
            else if (!period.isWithinValidPeriod(retrieveAsOfDate)) {
                return DisplayKey.get("Web.Errors.NoPolicyInForce", retrieveAsOfDate)
             }
            return null
          }
    
    
  }
  
  
}