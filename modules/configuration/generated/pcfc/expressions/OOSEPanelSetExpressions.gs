package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/OOSEPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OOSEPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/OOSEPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OOSEPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NextSliceLink) at OOSEPanelSet.pcf: line 35, column 37
    function action_12 () : void {
      jobWizardHelper.setOOSPeriodToView(policyPeriod.getSlice(policyPeriod.NextBlockedSliceDate))
    }
    
    // 'available' attribute on Link (id=NextSliceLink) at OOSEPanelSet.pcf: line 35, column 37
    function available_11 () : java.lang.Boolean {
      return policyPeriod.NextBlockedSliceDate != null
    }
    
    // 'def' attribute on PanelRef at OOSEPanelSet.pcf: line 14, column 72
    function def_onEnter_0 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef at OOSEPanelSet.pcf: line 14, column 72
    function def_refreshVariables_1 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getWizardWarningMessages())
    }
    
    // 'visible' attribute on DetailViewPanel at OOSEPanelSet.pcf: line 16, column 37
    function visible_13 () : java.lang.Boolean {
      return showSliceSelector()
    }
    
    // 'visible' attribute on PanelDivider at OOSEPanelSet.pcf: line 40, column 80
    function visible_14 () : java.lang.Boolean {
      return policyPeriod.Job.OOSJob and policyPeriod.FailedOOSEValidation
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    function showSliceSelector() : Boolean {
      if (not policyPeriod.Job.OOSJob) {
        return false  // never show unless it's an OOS job
      }
      
      return jobWizardHelper.PolicyPeriod.SliceDate > policyPeriod.EditEffectiveDate  // always show if we're editing a future slice
          or policyPeriod.FailedOOSEValidation or policyPeriod.FailedOOSEEvaluation   // otherwise show if there are errors in a future slice
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/OOSEPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OOSEPeriodSelectorExpressionsImpl extends OOSEPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=OOSEPeriodSelector) at OOSEPanelSet.pcf: line 29, column 45
    function action_9 () : void {
      jobWizardHelper.setOOSPeriodToView(policyPeriod.getSlice(ArgValue))
    }
    
    // 'value' attribute on Link (id=OOSEPeriodSelector) at OOSEPanelSet.pcf: line 29, column 45
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArgValue = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'argInitialValue' attribute on Link (id=OOSEPeriodSelector) at OOSEPanelSet.pcf: line 29, column 45
    function initArg_10 () : void {
      ArgValue = policyPeriod.SliceDate;
    }
    
    // 'action' attribute on Link (id=OOSEPeriodSelector) at OOSEPanelSet.pcf: line 29, column 45
    function onChange_2 () : void {
      jobWizardHelper.setOOSPeriodToView(policyPeriod.getSlice(ArgValue))
    }
    
    // 'argOptionLabel' attribute on Link (id=OOSEPeriodSelector) at OOSEPanelSet.pcf: line 29, column 45
    function optionLabel_5 (VALUE :  java.util.Date) : java.lang.String {
      return VALUE.format("short")
    }
    
    // 'argRange' attribute on Link (id=OOSEPeriodSelector) at OOSEPanelSet.pcf: line 29, column 45
    function valueRange_6 () : java.lang.Object {
      return policyPeriod.OOSSliceDates
    }
    
    // Link (id=OOSEPeriodSelector) at OOSEPanelSet.pcf: line 29, column 45
    function value_3 () : java.util.Date {
      return ArgValue
    }
    
    // 'argRange' attribute on Link (id=OOSEPeriodSelector) at OOSEPanelSet.pcf: line 29, column 45
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.Date[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'argRange' attribute on Link (id=OOSEPeriodSelector) at OOSEPanelSet.pcf: line 29, column 45
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'argRange' attribute on Link (id=OOSEPeriodSelector) at OOSEPanelSet.pcf: line 29, column 45
    function verifyValueRange_8 () : void {
      var __valueRangeArg = policyPeriod.OOSSliceDates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    property get ArgValue () : java.util.Date {
      return getArgValue(1) as java.util.Date
    }
    
    property set ArgValue ($arg :  java.util.Date) {
      setArgValue(1, $arg)
    }
    
    
  }
  
  
}