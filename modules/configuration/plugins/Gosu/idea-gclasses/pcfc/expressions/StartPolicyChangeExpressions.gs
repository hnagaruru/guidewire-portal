package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/policychange/StartPolicyChange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StartPolicyChangeExpressions {
  @javax.annotation.Generated("config/web/pcf/job/policychange/StartPolicyChange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StartPolicyChangeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=NewPolicyChange) at StartPolicyChange.pcf: line 42, column 25
    function action_4 () : void {
      if (gw.web.job.policychange.StartPolicyChangeUIHelper.refreshAndStartJobAndCommit(job, policyPeriod, effectiveDate, CurrentLocation)) { PolicyChangeWizard.go(job, job.LatestPeriod) }
    }
    
    // 'action' attribute on ToolbarButton (id=Cancel) at StartPolicyChange.pcf: line 46, column 62
    function action_6 () : void {
      CurrentLocation.cancel()
    }
    
    // 'afterCancel' attribute on Page (id=StartPolicyChange) at StartPolicyChange.pcf: line 14, column 76
    function afterCancel_18 () : void {
      PolicyFileForward.go(policyPeriod.PolicyNumber)
    }
    
    // 'afterCancel' attribute on Page (id=StartPolicyChange) at StartPolicyChange.pcf: line 14, column 76
    function afterCancel_dest_19 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod.PolicyNumber)
    }
    
    // 'available' attribute on ToolbarButton (id=NewPolicyChange) at StartPolicyChange.pcf: line 42, column 25
    function available_3 () : java.lang.Boolean {
      return policyPeriod.Policy.canStartPolicyChange(effectiveDate) == null
    }
    
    // 'canVisit' attribute on Page (id=StartPolicyChange) at StartPolicyChange.pcf: line 14, column 76
    static function canVisit_20 (policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.PolicyChange.create
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=NewPolicyChange) at StartPolicyChange.pcf: line 42, column 25
    function confirmMessage_5 () : java.lang.String {
      return gw.web.job.policychange.StartPolicyChangeUIHelper.getConfirmMessage(inForcePeriod, effectiveDate)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at StartPolicyChange.pcf: line 66, column 35
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      effectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at StartPolicyChange.pcf: line 73, column 38
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      job.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at StartPolicyChange.pcf: line 23, column 30
    function initialValue_0 () : java.util.Date {
      return policyPeriod.EditEffectiveDate
    }
    
    // 'initialValue' attribute on Variable at StartPolicyChange.pcf: line 27, column 28
    function initialValue_1 () : PolicyChange {
      return new PolicyChange()
    }
    
    // 'initialValue' attribute on Variable at StartPolicyChange.pcf: line 32, column 28
    function initialValue_2 () : PolicyPeriod {
      return gw.web.job.policychange.StartPolicyChangeUIHelper.getInForcePeriodWithBasedOn(policyPeriod, effectiveDate)
    }
    
    // 'label' attribute on Verbatim (id=WarningMessage) at StartPolicyChange.pcf: line 57, column 25
    function label_10 () : java.lang.String {
      return DisplayKey.get("Web.PolicyChange.StartPolicyChange.Warning", gw.web.job.policychange.StartPolicyChangeUIHelper.getPolicyChangeWarningMessage(inForcePeriod, effectiveDate))
    }
    
    // 'label' attribute on Verbatim (id=ErrorMessage) at StartPolicyChange.pcf: line 52, column 25
    function label_8 () : java.lang.String {
      return DisplayKey.get("Web.PolicyChange.StartPolicyChange.Error", policyPeriod.Policy.canStartPolicyChange(effectiveDate))
    }
    
    // 'parent' attribute on Page (id=StartPolicyChange) at StartPolicyChange.pcf: line 14, column 76
    static function parent_21 (policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, policyPeriod.EditEffectiveDate)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at StartPolicyChange.pcf: line 73, column 38
    function valueRoot_16 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at StartPolicyChange.pcf: line 66, column 35
    function value_11 () : java.util.Date {
      return effectiveDate
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at StartPolicyChange.pcf: line 73, column 38
    function value_14 () : java.lang.String {
      return job.Description
    }
    
    // 'visible' attribute on Verbatim (id=ErrorMessage) at StartPolicyChange.pcf: line 52, column 25
    function visible_7 () : java.lang.Boolean {
      return policyPeriod.Policy.canStartPolicyChange(effectiveDate) != null
    }
    
    // 'visible' attribute on Verbatim (id=WarningMessage) at StartPolicyChange.pcf: line 57, column 25
    function visible_9 () : java.lang.Boolean {
      return gw.web.job.policychange.StartPolicyChangeUIHelper.getPolicyChangeWarningMessage(inForcePeriod, effectiveDate) != null
    }
    
    override property get CurrentLocation () : pcf.StartPolicyChange {
      return super.CurrentLocation as pcf.StartPolicyChange
    }
    
    property get effectiveDate () : java.util.Date {
      return getVariableValue("effectiveDate", 0) as java.util.Date
    }
    
    property set effectiveDate ($arg :  java.util.Date) {
      setVariableValue("effectiveDate", 0, $arg)
    }
    
    property get inForcePeriod () : PolicyPeriod {
      return getVariableValue("inForcePeriod", 0) as PolicyPeriod
    }
    
    property set inForcePeriod ($arg :  PolicyPeriod) {
      setVariableValue("inForcePeriod", 0, $arg)
    }
    
    property get job () : PolicyChange {
      return getVariableValue("job", 0) as PolicyChange
    }
    
    property set job ($arg :  PolicyChange) {
      setVariableValue("job", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}