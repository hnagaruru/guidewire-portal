package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/divide/SpinPolicy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SpinPolicyExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/divide/SpinPolicy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SpinPolicyExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (periodToDivide :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=CreateButton) at SpinPolicy.pcf: line 35, column 77
    function action_2 () : void {
      CurrentLocation.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=CancelButton) at SpinPolicy.pcf: line 39, column 78
    function action_3 () : void {
      CurrentLocation.cancel(); PolicyFileForward.go(periodToDivide, asOfDate)
    }
    
    // 'afterCommit' attribute on Page (id=SpinPolicy) at SpinPolicy.pcf: line 13, column 67
    function afterCommit_6 (TopLocation :  pcf.api.Location) : void {
       DividePoliciesLandingPage.go(periodToDivide, destinationSubmission)
    }
    
    // 'beforeCommit' attribute on Page (id=SpinPolicy) at SpinPolicy.pcf: line 13, column 67
    function beforeCommit_7 (pickedValue :  java.lang.Object) : void {
      createSubmissions()
    }
    
    // 'def' attribute on PanelRef (id=SpinPolicy) at SpinPolicy.pcf: line 46, column 30
    function def_onEnter_4 (def :  pcf.DividePolicyPanelSet) : void {
      def.onEnter(periodToDivide, dividePolicySelection)
    }
    
    // 'def' attribute on PanelRef (id=SpinPolicy) at SpinPolicy.pcf: line 46, column 30
    function def_refreshVariables_5 (def :  pcf.DividePolicyPanelSet) : void {
      def.refreshVariables(periodToDivide, dividePolicySelection)
    }
    
    // 'initialValue' attribute on Variable at SpinPolicy.pcf: line 25, column 48
    function initialValue_0 () : gw.product.DividePolicySelection {
      return new gw.product.DividePolicySelection(periodToDivide)
    }
    
    // 'initialValue' attribute on Variable at SpinPolicy.pcf: line 29, column 26
    function initialValue_1 () : Submission {
      return null
    }
    
    // 'parent' attribute on Page (id=SpinPolicy) at SpinPolicy.pcf: line 13, column 67
    static function parent_8 (asOfDate :  java.util.Date, periodToDivide :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(periodToDivide, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.SpinPolicy {
      return super.CurrentLocation as pcf.SpinPolicy
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get destinationSubmission () : Submission {
      return getVariableValue("destinationSubmission", 0) as Submission
    }
    
    property set destinationSubmission ($arg :  Submission) {
      setVariableValue("destinationSubmission", 0, $arg)
    }
    
    property get dividePolicySelection () : gw.product.DividePolicySelection {
      return getVariableValue("dividePolicySelection", 0) as gw.product.DividePolicySelection
    }
    
    property set dividePolicySelection ($arg :  gw.product.DividePolicySelection) {
      setVariableValue("dividePolicySelection", 0, $arg)
    }
    
    property get periodToDivide () : PolicyPeriod {
      return getVariableValue("periodToDivide", 0) as PolicyPeriod
    }
    
    property set periodToDivide ($arg :  PolicyPeriod) {
      setVariableValue("periodToDivide", 0, $arg)
    }
    
    function createSubmissions() {
      try {
        destinationSubmission = dividePolicySelection.createSubmission()
      } catch (ise : java.lang.IllegalStateException) {  // might occur because of product unavailability
        throw new gw.api.util.DisplayableException(ise.LocalizedMessage)
      }
    }
    
    
  }
  
  
}