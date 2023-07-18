package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/UWApprovalLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWApprovalLVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/UWApprovalLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWApprovalLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ReferenceValue_Cell) at UWApprovalLV.pcf: line 64, column 58
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      approval.NonCurrencyReferenceValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioCell (id=EditBeforeBind_Cell) at UWApprovalLV.pcf: line 78, column 41
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      approval.EditBeforeBind = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeCell (id=BlockingPoint_Cell) at UWApprovalLV.pcf: line 90, column 51
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      approval.BlockingPoint = (__VALUE_TO_SET as typekey.UWIssueBlockingPoint)
    }
    
    // 'value' attribute on TypeKeyCell (id=Duration_Cell) at UWApprovalLV.pcf: line 98, column 53
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      approval.Duration = (__VALUE_TO_SET as typekey.UWApprovalDurationType)
    }
    
    // 'editable' attribute on ListViewPanel (id=UWApprovalLV) at UWApprovalLV.pcf: line 7, column 23
    function editable_38 () : java.lang.Boolean {
      return canEdit
    }
    
    // 'initialValue' attribute on Variable at UWApprovalLV.pcf: line 17, column 30
    function initialValue_0 () : entity.UWIssue {
      return asst.Issue
    }
    
    // 'initialValue' attribute on Variable at UWApprovalLV.pcf: line 21, column 41
    function initialValue_1 () : gw.job.uw.UWIssueApproval {
      return issue.Approval
    }
    
    // 'optionLabel' attribute on RangeCell (id=BlockingPoint_Cell) at UWApprovalLV.pcf: line 90, column 51
    function optionLabel_29 (VALUE :  typekey.UWIssueBlockingPoint) : java.lang.String {
      return VALUE.DisplayAsThroughValue
    }
    
    // 'validationExpression' attribute on TextCell (id=ReferenceValue_Cell) at UWApprovalLV.pcf: line 64, column 58
    function validationExpression_9 () : java.lang.Object {
      return asst.validate(approval.ReferenceValue)
    }
    
    // 'valueRange' attribute on RangeCell (id=BlockingPoint_Cell) at UWApprovalLV.pcf: line 90, column 51
    function valueRange_30 () : java.lang.Object {
      return asst.BlockingPointValueRange
    }
    
    // 'value' attribute on TextCell (id=ReferenceValue_Cell) at UWApprovalLV.pcf: line 64, column 58
    function valueRoot_12 () : java.lang.Object {
      return approval
    }
    
    // 'value' attribute on TypeKeyCell (id=ReferenceComparator_Cell) at UWApprovalLV.pcf: line 56, column 58
    function valueRoot_6 () : java.lang.Object {
      return issue.IssueType
    }
    
    // 'value' attribute on TextCell (id=ReferenceValue_Cell) at UWApprovalLV.pcf: line 64, column 58
    function value_10 () : java.lang.String {
      return approval.NonCurrencyReferenceValue
    }
    
    // 'value' attribute on TypeKeyCell (id=ReferenceValueCurrency_Cell) at UWApprovalLV.pcf: line 72, column 111
    function value_17 () : typekey.Currency {
      return approval.ReferenceValueCurrency
    }
    
    // 'value' attribute on BooleanRadioCell (id=EditBeforeBind_Cell) at UWApprovalLV.pcf: line 78, column 41
    function value_22 () : java.lang.Boolean {
      return approval.EditBeforeBind
    }
    
    // 'value' attribute on RangeCell (id=BlockingPoint_Cell) at UWApprovalLV.pcf: line 90, column 51
    function value_26 () : typekey.UWIssueBlockingPoint {
      return approval.BlockingPoint
    }
    
    // 'value' attribute on TypeKeyCell (id=Duration_Cell) at UWApprovalLV.pcf: line 98, column 53
    function value_34 () : typekey.UWApprovalDurationType {
      return approval.Duration
    }
    
    // 'value' attribute on TypeKeyCell (id=ReferenceComparator_Cell) at UWApprovalLV.pcf: line 56, column 58
    function value_5 () : typekey.ValueComparator {
      return issue.IssueType.Comparator
    }
    
    // 'valueRange' attribute on RangeCell (id=BlockingPoint_Cell) at UWApprovalLV.pcf: line 90, column 51
    function verifyValueRangeIsAllowedType_31 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BlockingPoint_Cell) at UWApprovalLV.pcf: line 90, column 51
    function verifyValueRangeIsAllowedType_31 ($$arg :  typekey.UWIssueBlockingPoint[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BlockingPoint_Cell) at UWApprovalLV.pcf: line 90, column 51
    function verifyValueRange_32 () : void {
      var __valueRangeArg = asst.BlockingPointValueRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_31(__valueRangeArg)
    }
    
    // 'visible' attribute on TextCell (id=ReferenceComparatorHeader_Cell) at UWApprovalLV.pcf: line 26, column 58
    function visible_2 () : java.lang.Boolean {
      return issue.IssueType.Comparator != TC_NONE
    }
    
    // 'visible' attribute on TextCell (id=ReferenceValueCurrencyHeader_Cell) at UWApprovalLV.pcf: line 36, column 111
    function visible_4 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode() and approval.ReferenceValueCurrency != null
    }
    
    property get approval () : gw.job.uw.UWIssueApproval {
      return getVariableValue("approval", 0) as gw.job.uw.UWIssueApproval
    }
    
    property set approval ($arg :  gw.job.uw.UWIssueApproval) {
      setVariableValue("approval", 0, $arg)
    }
    
    property get asst () : gw.job.uw.UWApprovalLVAsst {
      return getRequireValue("asst", 0) as gw.job.uw.UWApprovalLVAsst
    }
    
    property set asst ($arg :  gw.job.uw.UWApprovalLVAsst) {
      setRequireValue("asst", 0, $arg)
    }
    
    property get canEdit () : boolean {
      return getRequireValue("canEdit", 0) as java.lang.Boolean
    }
    
    property set canEdit ($arg :  boolean) {
      setRequireValue("canEdit", 0, $arg)
    }
    
    property get issue () : entity.UWIssue {
      return getVariableValue("issue", 0) as entity.UWIssue
    }
    
    property set issue ($arg :  entity.UWIssue) {
      setVariableValue("issue", 0, $arg)
    }
    
    
  }
  
  
}