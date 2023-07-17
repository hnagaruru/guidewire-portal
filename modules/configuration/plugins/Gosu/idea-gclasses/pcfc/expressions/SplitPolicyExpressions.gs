package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/divide/SplitPolicy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SplitPolicyExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/divide/SplitPolicy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SplitPolicyExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (periodToDivide :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=CreateButton) at SplitPolicy.pcf: line 43, column 78
    function action_4 () : void {
      CurrentLocation.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=CancelButton) at SplitPolicy.pcf: line 47, column 78
    function action_5 () : void {
      CurrentLocation.cancel(); PolicyFileForward.go(periodToDivide, asOfDate)
    }
    
    // 'afterCommit' attribute on Page (id=SplitPolicy) at SplitPolicy.pcf: line 13, column 68
    function afterCommit_10 (TopLocation :  pcf.api.Location) : void {
      DividePoliciesLandingPage.go(periodToDivide, firstSubmission, secondSubmission)
    }
    
    // 'beforeCommit' attribute on Page (id=SplitPolicy) at SplitPolicy.pcf: line 13, column 68
    function beforeCommit_11 (pickedValue :  java.lang.Object) : void {
      createSubmissions()
    }
    
    // 'def' attribute on PanelRef (id=SplitPolicy1) at SplitPolicy.pcf: line 54, column 31
    function def_onEnter_6 (def :  pcf.DividePolicyPanelSet) : void {
      def.onEnter(periodToDivide, dividePolicySelection1)
    }
    
    // 'def' attribute on PanelRef (id=SplitPolicy2) at SplitPolicy.pcf: line 63, column 31
    function def_onEnter_8 (def :  pcf.DividePolicyPanelSet) : void {
      def.onEnter(periodToDivide, dividePolicySelection2)
    }
    
    // 'def' attribute on PanelRef (id=SplitPolicy1) at SplitPolicy.pcf: line 54, column 31
    function def_refreshVariables_7 (def :  pcf.DividePolicyPanelSet) : void {
      def.refreshVariables(periodToDivide, dividePolicySelection1)
    }
    
    // 'def' attribute on PanelRef (id=SplitPolicy2) at SplitPolicy.pcf: line 63, column 31
    function def_refreshVariables_9 (def :  pcf.DividePolicyPanelSet) : void {
      def.refreshVariables(periodToDivide, dividePolicySelection2)
    }
    
    // 'initialValue' attribute on Variable at SplitPolicy.pcf: line 25, column 48
    function initialValue_0 () : gw.product.DividePolicySelection {
      return new gw.product.DividePolicySelection(periodToDivide)
    }
    
    // 'initialValue' attribute on Variable at SplitPolicy.pcf: line 33, column 26
    function initialValue_2 () : Submission {
      return null
    }
    
    // 'parent' attribute on Page (id=SplitPolicy) at SplitPolicy.pcf: line 13, column 68
    static function parent_12 (asOfDate :  java.util.Date, periodToDivide :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(periodToDivide, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.SplitPolicy {
      return super.CurrentLocation as pcf.SplitPolicy
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get dividePolicySelection1 () : gw.product.DividePolicySelection {
      return getVariableValue("dividePolicySelection1", 0) as gw.product.DividePolicySelection
    }
    
    property set dividePolicySelection1 ($arg :  gw.product.DividePolicySelection) {
      setVariableValue("dividePolicySelection1", 0, $arg)
    }
    
    property get dividePolicySelection2 () : gw.product.DividePolicySelection {
      return getVariableValue("dividePolicySelection2", 0) as gw.product.DividePolicySelection
    }
    
    property set dividePolicySelection2 ($arg :  gw.product.DividePolicySelection) {
      setVariableValue("dividePolicySelection2", 0, $arg)
    }
    
    property get firstSubmission () : Submission {
      return getVariableValue("firstSubmission", 0) as Submission
    }
    
    property set firstSubmission ($arg :  Submission) {
      setVariableValue("firstSubmission", 0, $arg)
    }
    
    property get periodToDivide () : PolicyPeriod {
      return getVariableValue("periodToDivide", 0) as PolicyPeriod
    }
    
    property set periodToDivide ($arg :  PolicyPeriod) {
      setVariableValue("periodToDivide", 0, $arg)
    }
    
    property get secondSubmission () : Submission {
      return getVariableValue("secondSubmission", 0) as Submission
    }
    
    property set secondSubmission ($arg :  Submission) {
      setVariableValue("secondSubmission", 0, $arg)
    }
    
    function createSubmissions() {
      try {
        firstSubmission = dividePolicySelection1.createSubmission()
        secondSubmission = dividePolicySelection2.createSubmission()
        gw.product.DividePolicyUtil.createSplitPolicyActivity(periodToDivide)
      } catch (ise : java.lang.IllegalStateException) {  // might occur because of product unavailability
        throw new gw.api.util.DisplayableException(ise.LocalizedMessage)
      }
    }
    
    
  }
  
  
}