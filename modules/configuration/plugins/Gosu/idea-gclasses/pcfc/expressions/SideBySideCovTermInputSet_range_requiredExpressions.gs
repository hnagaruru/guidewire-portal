package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/SideBySideCovTermInputSet.range_required.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SideBySideCovTermInputSet_range_requiredExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/SideBySideCovTermInputSet.range_required.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SideBySideCovTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideCovTermInputSet.range_required.pcf: line 58, column 97
    function colspan_14 () : java.lang.Integer {
      return colWidth
    }
    
    // 'def' attribute on InputSetRef at SideBySideCovTermInputSet.range_required.pcf: line 66, column 29
    function def_onEnter_33 (def :  pcf.SideBySideCovTermSpacerInputSet) : void {
      def.onEnter(covTermInfo)
    }
    
    // 'def' attribute on InputSetRef at SideBySideCovTermInputSet.range_required.pcf: line 66, column 29
    function def_refreshVariables_34 (def :  pcf.SideBySideCovTermSpacerInputSet) : void {
      def.refreshVariables(covTermInfo)
    }
    
    // 'value' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required.pcf: line 55, column 38
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      covTermInfo.RangeValue = __VALUE_TO_SET
    }
    
    // 'value' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.range_required.pcf: line 30, column 30
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      covTermInfo.CovInfo.Selected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at SideBySideCovTermInputSet.range_required.pcf: line 61, column 70
    function disablePostOnEnter_16 () : java.lang.Boolean {
      return not (covTermInfo.AssociatedPeriodRatedOrQuoted or covTermInfo.AlwaysPostOnChange)
    }
    
    // 'editable' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required.pcf: line 55, column 38
    function editable_19 () : java.lang.Boolean {
      return covTermInfo.CovInfo.PeriodInfo.SxSEditable and covTermInfo.Editable
    }
    
    // 'editable' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.range_required.pcf: line 30, column 30
    function editable_3 () : java.lang.Boolean {
      return covTermInfo.CovInfo.PeriodInfo.SxSEditable and covTermInfo.CovInfo.AllowToggle
    }
    
    // 'initialValue' attribute on Variable at SideBySideCovTermInputSet.range_required.pcf: line 21, column 23
    function initialValue_0 () : boolean {
      return covTermInfo.Visible
    }
    
    // 'onChange' attribute on PostOnChange at SideBySideCovTermInputSet.range_required.pcf: line 61, column 70
    function onChange_17 () : void {
      covTermInfo.CovInfo.coverageSelectionRefresh()
    }
    
    // 'onChange' attribute on PostOnChange at SideBySideCovTermInputSet.range_required.pcf: line 35, column 70
    function onChange_2 () : void {
      covTermInfo.CovInfo.coverageSelectionRefresh()
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideCovTermInputSet.range_required.pcf: line 32, column 97
    function tdClass_1 () : java.lang.String {
      return "pc-sxs-col-" + (covTermInfo.CovInfo.PeriodInfo.ColumnIndex % 2)
    }
    
    // 'validationExpression' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required.pcf: line 55, column 38
    function validationExpression_20 () : java.lang.Object {
      return (covTermInfo.CovTermPattern.Required and covTermInfo.RangeValue == null) ? DisplayKey.get("Web.Job.SideBySide.Errors.RequiredCovTerm", covTermInfo.CovTermPattern.Name) : null
    }
    
    // 'valueRange' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required.pcf: line 55, column 38
    function valueRange_24 () : java.lang.Object {
      return covTermInfo.OrderedAvailableValues
    }
    
    // 'value' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required.pcf: line 55, column 38
    function valueRoot_23 () : java.lang.Object {
      return covTermInfo
    }
    
    // 'value' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.range_required.pcf: line 30, column 30
    function valueRoot_7 () : java.lang.Object {
      return covTermInfo.CovInfo
    }
    
    // 'value' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required.pcf: line 55, column 38
    function value_21 () : java.lang.Object {
      return covTermInfo.RangeValue
    }
    
    // 'value' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.range_required.pcf: line 30, column 30
    function value_5 () : java.lang.Boolean {
      return covTermInfo.CovInfo.Selected
    }
    
    // 'valueRange' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required.pcf: line 55, column 38
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required.pcf: line 55, column 38
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required.pcf: line 55, column 38
    function verifyValueRange_26 () : void {
      var __valueRangeArg = covTermInfo.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_25(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=rangeSpacer_Input) at SideBySideCovTermInputSet.range_required.pcf: line 42, column 31
    function visible_12 () : java.lang.Boolean {
      return !selectable
    }
    
    // 'visible' attribute on InputSet at SideBySideCovTermInputSet.range_required.pcf: line 23, column 27
    function visible_31 () : java.lang.Boolean {
      return isVisible
    }
    
    // 'visible' attribute on InputSetRef at SideBySideCovTermInputSet.range_required.pcf: line 66, column 29
    function visible_32 () : java.lang.Boolean {
      return !isVisible
    }
    
    // 'visible' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.range_required.pcf: line 30, column 30
    function visible_4 () : java.lang.Boolean {
      return selectable
    }
    
    property get colWidth () : int {
      return getRequireValue("colWidth", 0) as java.lang.Integer
    }
    
    property set colWidth ($arg :  int) {
      setRequireValue("colWidth", 0, $arg)
    }
    
    property get covTermInfo () : gw.job.sxs.SideBySideCovTermInfo {
      return getRequireValue("covTermInfo", 0) as gw.job.sxs.SideBySideCovTermInfo
    }
    
    property set covTermInfo ($arg :  gw.job.sxs.SideBySideCovTermInfo) {
      setRequireValue("covTermInfo", 0, $arg)
    }
    
    property get isVisible () : boolean {
      return getVariableValue("isVisible", 0) as java.lang.Boolean
    }
    
    property set isVisible ($arg :  boolean) {
      setVariableValue("isVisible", 0, $arg)
    }
    
    property get selectable () : boolean {
      return getRequireValue("selectable", 0) as java.lang.Boolean
    }
    
    property set selectable ($arg :  boolean) {
      setRequireValue("selectable", 0, $arg)
    }
    
    
  }
  
  
}