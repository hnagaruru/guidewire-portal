package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/MultiQuoteAcceleratedMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MultiQuoteAcceleratedMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/MultiQuoteAcceleratedMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MultiQuoteAcceleratedMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at MultiQuoteAcceleratedMenuActions.pcf: line 20, column 37
    function initialValue_0 () : entity.PolicyPeriod[] {
      return job.ActivePeriods
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get periodList () : entity.PolicyPeriod[] {
      return getVariableValue("periodList", 0) as entity.PolicyPeriod[]
    }
    
    property set periodList ($arg :  entity.PolicyPeriod[]) {
      setVariableValue("periodList", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    function getLabel(VALUE : PolicyPeriod) : String {
      if (VALUE.Job.SelectedVersion == VALUE) {
        return DisplayKey.get("Web.PolicyPeriod.SelectedMarker") + " " +
               DisplayKey.get("Web.PolicyPeriod.Version", VALUE.BranchName, VALUE.Status)
      } else {
        return DisplayKey.get("Web.PolicyPeriod.Version", VALUE.BranchName, VALUE.Status)
      }
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/MultiQuoteAcceleratedMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyPeriodSelectorExpressionsImpl extends MultiQuoteAcceleratedMenuActionsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function action_10 () : void {
      jobWizardHelper.setPeriodToView(ArgValue)
    }
    
    // 'available' attribute on Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function available_8 () : java.lang.Boolean {
      return !jobWizardHelper.isInPicker() and !jobWizardHelper.hasActiveWorksheet()
    }
    
    // 'value' attribute on Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArgValue = (__VALUE_TO_SET as PolicyPeriod)
    }
    
    // 'argInitialValue' attribute on Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function initArg_11 () : void {
      ArgValue = policyPeriod;
    }
    
    // 'action' attribute on Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function onChange_1 () : void {
      jobWizardHelper.setPeriodToView(ArgValue)
    }
    
    // 'argOptionLabel' attribute on Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function optionLabel_4 (VALUE :  PolicyPeriod) : java.lang.String {
      return getLabel(VALUE)
    }
    
    // 'argRange' attribute on Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function valueRange_5 () : java.lang.Object {
      return periodList
    }
    
    // Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function value_2 () : PolicyPeriod {
      return ArgValue
    }
    
    // 'argRange' attribute on Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function verifyValueRangeIsAllowedType_6 ($$arg :  PolicyPeriod[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'argRange' attribute on Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'argRange' attribute on Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'argRange' attribute on Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function verifyValueRange_7 () : void {
      var __valueRangeArg = periodList
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    // 'visible' attribute on Link (id=PolicyPeriodSelector) at MultiQuoteAcceleratedMenuActions.pcf: line 31, column 112
    function visible_9 () : java.lang.Boolean {
      return job.hasMultiplePeriods() && job.SelectedVersion.Status != PolicyPeriodStatus.TC_BOUND
    }
    
    property get ArgValue () : PolicyPeriod {
      return getArgValue(1) as PolicyPeriod
    }
    
    property set ArgValue ($arg :  PolicyPeriod) {
      setArgValue(1, $arg)
    }
    
    
  }
  
  
}