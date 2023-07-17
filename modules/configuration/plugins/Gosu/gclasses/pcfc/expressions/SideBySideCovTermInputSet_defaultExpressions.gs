package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/SideBySideCovTermInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SideBySideCovTermInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/SideBySideCovTermInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SideBySideCovTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideCovTermInputSet.default.pcf: line 56, column 97
    function colspan_14 () : java.lang.Integer {
      return colWidth
    }
    
    // 'def' attribute on InputSetRef at SideBySideCovTermInputSet.default.pcf: line 64, column 29
    function def_onEnter_28 (def :  pcf.SideBySideCovTermSpacerInputSet) : void {
      def.onEnter(covTermInfo)
    }
    
    // 'def' attribute on InputSetRef at SideBySideCovTermInputSet.default.pcf: line 64, column 29
    function def_refreshVariables_29 (def :  pcf.SideBySideCovTermSpacerInputSet) : void {
      def.refreshVariables(covTermInfo)
    }
    
    // 'value' attribute on TextInput (id=SideBySideDefaultCovTermValue_Input) at SideBySideCovTermInputSet.default.pcf: line 53, column 38
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      covTermInfo?.DefaultValue = __VALUE_TO_SET
    }
    
    // 'value' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.default.pcf: line 30, column 30
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      covTermInfo.CovInfo.Selected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at SideBySideCovTermInputSet.default.pcf: line 59, column 70
    function disablePostOnEnter_16 () : java.lang.Boolean {
      return not (covTermInfo.AssociatedPeriodRatedOrQuoted or covTermInfo.AlwaysPostOnChange)
    }
    
    // 'editable' attribute on TextInput (id=SideBySideDefaultCovTermValue_Input) at SideBySideCovTermInputSet.default.pcf: line 53, column 38
    function editable_18 () : java.lang.Boolean {
      return covTermInfo.CovInfo.PeriodInfo.SxSEditable and covTermInfo.Editable
    }
    
    // 'editable' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.default.pcf: line 30, column 30
    function editable_3 () : java.lang.Boolean {
      return covTermInfo.CovInfo.PeriodInfo.SxSEditable and covTermInfo.CovInfo.AllowToggle
    }
    
    // 'initialValue' attribute on Variable at SideBySideCovTermInputSet.default.pcf: line 21, column 23
    function initialValue_0 () : boolean {
      return covTermInfo.Visible
    }
    
    // 'onChange' attribute on PostOnChange at SideBySideCovTermInputSet.default.pcf: line 59, column 70
    function onChange_17 () : void {
      covTermInfo.CovInfo.coverageSelectionRefresh()
    }
    
    // 'onChange' attribute on PostOnChange at SideBySideCovTermInputSet.default.pcf: line 35, column 70
    function onChange_2 () : void {
      covTermInfo.CovInfo.coverageSelectionRefresh()
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideCovTermInputSet.default.pcf: line 32, column 97
    function tdClass_1 () : java.lang.String {
      return "pc-sxs-col-" + (covTermInfo.CovInfo.PeriodInfo.ColumnIndex % 2)
    }
    
    // 'validationExpression' attribute on TextInput (id=SideBySideDefaultCovTermValue_Input) at SideBySideCovTermInputSet.default.pcf: line 53, column 38
    function validationExpression_19 () : java.lang.Object {
      return (covTermInfo.CovTermPattern.Required and covTermInfo.DefaultValue == null) ? DisplayKey.get("Web.Job.SideBySide.Errors.RequiredCovTerm", covTermInfo.CovTermPattern.Name) : null
    }
    
    // 'value' attribute on TextInput (id=SideBySideDefaultCovTermValue_Input) at SideBySideCovTermInputSet.default.pcf: line 53, column 38
    function valueRoot_22 () : java.lang.Object {
      return covTermInfo
    }
    
    // 'value' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.default.pcf: line 30, column 30
    function valueRoot_7 () : java.lang.Object {
      return covTermInfo.CovInfo
    }
    
    // 'value' attribute on TextInput (id=SideBySideDefaultCovTermValue_Input) at SideBySideCovTermInputSet.default.pcf: line 53, column 38
    function value_20 () : java.lang.Object {
      return covTermInfo?.DefaultValue
    }
    
    // 'value' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.default.pcf: line 30, column 30
    function value_5 () : java.lang.Boolean {
      return covTermInfo.CovInfo.Selected
    }
    
    // 'visible' attribute on TextInput (id=defaultSpacer_Input) at SideBySideCovTermInputSet.default.pcf: line 42, column 31
    function visible_12 () : java.lang.Boolean {
      return !selectable
    }
    
    // 'visible' attribute on InputSet at SideBySideCovTermInputSet.default.pcf: line 23, column 27
    function visible_26 () : java.lang.Boolean {
      return isVisible
    }
    
    // 'visible' attribute on InputSetRef at SideBySideCovTermInputSet.default.pcf: line 64, column 29
    function visible_27 () : java.lang.Boolean {
      return !isVisible
    }
    
    // 'visible' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.default.pcf: line 30, column 30
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