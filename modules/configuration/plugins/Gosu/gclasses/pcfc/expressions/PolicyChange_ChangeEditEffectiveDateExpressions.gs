package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/policychange/PolicyChange_ChangeEditEffectiveDate.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyChange_ChangeEditEffectiveDateExpressions {
  @javax.annotation.Generated("config/web/pcf/job/policychange/PolicyChange_ChangeEditEffectiveDate.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyChange_ChangeEditEffectiveDateExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyChange :  PolicyChange, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=PolicyChange_ChangeEditEffectiveDate) at PolicyChange_ChangeEditEffectiveDate.pcf: line 16, column 78
    function afterCancel_11 () : void {
      JobForward.go(policyChange)
    }
    
    // 'afterCancel' attribute on Page (id=PolicyChange_ChangeEditEffectiveDate) at PolicyChange_ChangeEditEffectiveDate.pcf: line 16, column 78
    function afterCancel_dest_12 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(policyChange)
    }
    
    // 'afterCommit' attribute on Page (id=PolicyChange_ChangeEditEffectiveDate) at PolicyChange_ChangeEditEffectiveDate.pcf: line 16, column 78
    function afterCommit_13 (TopLocation :  pcf.api.Location) : void {
      JobForward.go(policyChange)
    }
    
    // 'afterEnter' attribute on Page (id=PolicyChange_ChangeEditEffectiveDate) at PolicyChange_ChangeEditEffectiveDate.pcf: line 16, column 78
    function afterEnter_14 () : void {
      gw.api.web.AutoSaveCacheGateway.clearUnsavedWork()
    }
    
    // 'beforeCommit' attribute on Page (id=PolicyChange_ChangeEditEffectiveDate) at PolicyChange_ChangeEditEffectiveDate.pcf: line 16, column 78
    function beforeCommit_15 (pickedValue :  java.lang.Object) : void {
      policyPeriod.PolicyChangeProcess.changeEditEffectiveDate(effectiveDate)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at PolicyChange_ChangeEditEffectiveDate.pcf: line 49, column 35
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      effectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at PolicyChange_ChangeEditEffectiveDate.pcf: line 56, column 47
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyChange.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at PolicyChange_ChangeEditEffectiveDate.pcf: line 28, column 30
    function initialValue_0 () : java.util.Date {
      return policyPeriod.EditEffectiveDate
    }
    
    // 'onConcurrentDataChange' attribute on Page (id=PolicyChange_ChangeEditEffectiveDate) at PolicyChange_ChangeEditEffectiveDate.pcf: line 16, column 78
    function onConcurrentDataChange_16 () : void {
      CurrentLocation.cancel(); JobForward.go(policyChange)
    }
    
    // 'parent' attribute on Page (id=PolicyChange_ChangeEditEffectiveDate) at PolicyChange_ChangeEditEffectiveDate.pcf: line 16, column 78
    static function parent_17 (policyChange :  PolicyChange, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.JobForward.createDestination(policyChange)
    }
    
    // 'validationExpression' attribute on DateInput (id=EffectiveDate_Input) at PolicyChange_ChangeEditEffectiveDate.pcf: line 49, column 35
    function validationExpression_2 () : java.lang.Object {
      return validateEditLocks()
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at PolicyChange_ChangeEditEffectiveDate.pcf: line 56, column 47
    function valueRoot_9 () : java.lang.Object {
      return policyChange
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at PolicyChange_ChangeEditEffectiveDate.pcf: line 49, column 35
    function value_3 () : java.util.Date {
      return effectiveDate
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at PolicyChange_ChangeEditEffectiveDate.pcf: line 56, column 47
    function value_7 () : java.lang.String {
      return policyChange.Description
    }
    
    override property get CurrentLocation () : pcf.PolicyChange_ChangeEditEffectiveDate {
      return super.CurrentLocation as pcf.PolicyChange_ChangeEditEffectiveDate
    }
    
    property get effectiveDate () : java.util.Date {
      return getVariableValue("effectiveDate", 0) as java.util.Date
    }
    
    property set effectiveDate ($arg :  java.util.Date) {
      setVariableValue("effectiveDate", 0, $arg)
    }
    
    property get oldEffectiveDate () : java.util.Date {
      return getVariableValue("oldEffectiveDate", 0) as java.util.Date
    }
    
    property set oldEffectiveDate ($arg :  java.util.Date) {
      setVariableValue("oldEffectiveDate", 0, $arg)
    }
    
    property get policyChange () : PolicyChange {
      return getVariableValue("policyChange", 0) as PolicyChange
    }
    
    property set policyChange ($arg :  PolicyChange) {
      setVariableValue("policyChange", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    /**
     * Returns an error message listing the active periods that are edit locked, if the user lacks permissions.
     * Returns null if there are no edit locked periods or if the user has the override permissions.
     */
    function validateEditLocks() : String {
      var msg = ""
      if (not perm.System.editlockoverride) {
        for (branch in policyPeriod.Job.ActivePeriods) {
          if (branch.EditLocked) {
            msg += "\n    "
            msg += DisplayKey.get("Web.Job.Warning.LacksEditPermissionForVersion", branch.BranchName)
          }
        }
      }
      return msg.Empty ? null : DisplayKey.get("Web.Job.Warning.CannotChangeEditEffectiveDate", msg)
    }
    
    
  }
  
  
}