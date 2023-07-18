package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldRuleLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyHoldRuleLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldRuleLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyHoldRuleLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerCell (id=Coverage_Cell) at PolicyHoldRuleLV.pcf: line 58, column 60
    function action_19 () : void {
      CovPatternSearchPopup.push(holdRule.PolicyLineType, holdRule.getMatchingLinePattern(linePatterns))
    }
    
    // 'pickLocation' attribute on PickerCell (id=Coverage_Cell) at PolicyHoldRuleLV.pcf: line 58, column 60
    function action_dest_20 () : pcf.api.Destination {
      return pcf.CovPatternSearchPopup.createDestination(holdRule.PolicyLineType, holdRule.getMatchingLinePattern(linePatterns))
    }
    
    // 'available' attribute on PickerCell (id=Coverage_Cell) at PolicyHoldRuleLV.pcf: line 58, column 60
    function available_21 () : java.lang.Boolean {
      return holdRule.PolicyLineType != null
    }
    
    // 'checkBoxVisible' attribute on RowIterator at PolicyHoldRuleLV.pcf: line 26, column 43
    function checkBoxVisible_27 () : java.lang.Boolean {
      return perm.System.polholdcreate and perm.System.polholdelete
    }
    
    // 'value' attribute on TypeKeyCell (id=Job_Cell) at PolicyHoldRuleLV.pcf: line 42, column 36
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      holdRule.JobType = (__VALUE_TO_SET as typekey.Job)
    }
    
    // 'value' attribute on TypeKeyCell (id=JobDateType_Cell) at PolicyHoldRuleLV.pcf: line 49, column 44
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      holdRule.JobDateType = (__VALUE_TO_SET as typekey.JobDateType)
    }
    
    // 'value' attribute on PickerCell (id=Coverage_Cell) at PolicyHoldRuleLV.pcf: line 58, column 60
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      holdRule.CovPattern = (__VALUE_TO_SET as gw.api.productmodel.CoveragePattern)
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyLine_Cell) at PolicyHoldRuleLV.pcf: line 33, column 42
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      holdRule.PolicyLineType = (__VALUE_TO_SET as typekey.PolicyLine)
    }
    
    // 'filter' attribute on TypeKeyCell (id=JobDateType_Cell) at PolicyHoldRuleLV.pcf: line 49, column 44
    function filter_17 (VALUE :  typekey.JobDateType, VALUES :  typekey.JobDateType[]) : java.lang.Boolean {
      return filterJobDateTypeByPolicyHoldType(VALUE)
    }
    
    // 'onChange' attribute on PostOnChange at PolicyHoldRuleLV.pcf: line 35, column 52
    function onChange_5 () : void {
      holdRule.CovPattern = null
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyLine_Cell) at PolicyHoldRuleLV.pcf: line 33, column 42
    function valueRoot_8 () : java.lang.Object {
      return holdRule
    }
    
    // 'value' attribute on TypeKeyCell (id=Job_Cell) at PolicyHoldRuleLV.pcf: line 42, column 36
    function value_10 () : typekey.Job {
      return holdRule.JobType
    }
    
    // 'value' attribute on TypeKeyCell (id=JobDateType_Cell) at PolicyHoldRuleLV.pcf: line 49, column 44
    function value_14 () : typekey.JobDateType {
      return holdRule.JobDateType
    }
    
    // 'value' attribute on PickerCell (id=Coverage_Cell) at PolicyHoldRuleLV.pcf: line 58, column 60
    function value_22 () : gw.api.productmodel.CoveragePattern {
      return holdRule.CovPattern
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyLine_Cell) at PolicyHoldRuleLV.pcf: line 33, column 42
    function value_6 () : typekey.PolicyLine {
      return holdRule.PolicyLineType
    }
    
    property get holdRule () : entity.PolicyHoldRule {
      return getIteratedValue(1) as entity.PolicyHoldRule
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldRuleLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyHoldRuleLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyHoldRuleLV.pcf: line 16, column 55
    function initialValue_0 () : gw.api.productmodel.PolicyLinePattern[] {
      return gw.api.productmodel.PolicyLinePatternLookup.All.toTypedArray()
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyLine_Cell) at PolicyHoldRuleLV.pcf: line 33, column 42
    function sortValue_1 (holdRule :  entity.PolicyHoldRule) : java.lang.Object {
      return holdRule.PolicyLineType
    }
    
    // 'value' attribute on TypeKeyCell (id=Job_Cell) at PolicyHoldRuleLV.pcf: line 42, column 36
    function sortValue_2 (holdRule :  entity.PolicyHoldRule) : java.lang.Object {
      return holdRule.JobType
    }
    
    // 'value' attribute on TypeKeyCell (id=JobDateType_Cell) at PolicyHoldRuleLV.pcf: line 49, column 44
    function sortValue_3 (holdRule :  entity.PolicyHoldRule) : java.lang.Object {
      return holdRule.JobDateType
    }
    
    // 'value' attribute on PickerCell (id=Coverage_Cell) at PolicyHoldRuleLV.pcf: line 58, column 60
    function sortValue_4 (holdRule :  entity.PolicyHoldRule) : java.lang.Object {
      return holdRule.CovPattern
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at PolicyHoldRuleLV.pcf: line 26, column 43
    function toCreateAndAdd_28 () : entity.PolicyHoldRule {
      return policyHold.createAndAddRule()
    }
    
    // 'toRemove' attribute on RowIterator at PolicyHoldRuleLV.pcf: line 26, column 43
    function toRemove_29 (holdRule :  entity.PolicyHoldRule) : void {
      policyHold.removeFromRules(holdRule)
    }
    
    // 'value' attribute on RowIterator at PolicyHoldRuleLV.pcf: line 26, column 43
    function value_30 () : entity.PolicyHoldRule[] {
      return policyHold.Rules
    }
    
    property get linePatterns () : gw.api.productmodel.PolicyLinePattern[] {
      return getVariableValue("linePatterns", 0) as gw.api.productmodel.PolicyLinePattern[]
    }
    
    property set linePatterns ($arg :  gw.api.productmodel.PolicyLinePattern[]) {
      setVariableValue("linePatterns", 0, $arg)
    }
    
    property get policyHold () : PolicyHold {
      return getRequireValue("policyHold", 0) as PolicyHold
    }
    
    property set policyHold ($arg :  PolicyHold) {
      setRequireValue("policyHold", 0, $arg)
    }
    
    function filterJobDateTypeByPolicyHoldType(VALUE : typekey.JobDateType) : boolean {
      if (policyHold.HoldType != null) {
        return VALUE.hasCategory(policyHold.HoldType)
      } else {
        return false
      }
    }
    
    
  }
  
  
}