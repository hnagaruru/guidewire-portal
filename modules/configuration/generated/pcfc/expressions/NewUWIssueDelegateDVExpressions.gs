package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/NewUWIssueDelegateDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewUWIssueDelegateDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/NewUWIssueDelegateDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewUWIssueDelegateDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=IssueType_Input) at NewUWIssueDelegateDV.pcf: line 20, column 40
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      issue.IssueType = (__VALUE_TO_SET as entity.UWIssueType)
    }
    
    // 'value' attribute on TextAreaInput (id=LongDescription_Input) at NewUWIssueDelegateDV.pcf: line 33, column 40
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      issue.LongDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Value_Input) at NewUWIssueDelegateDV.pcf: line 40, column 97
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      issue.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ShortDescription_Input) at NewUWIssueDelegateDV.pcf: line 27, column 41
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      issue.ShortDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'validationExpression' attribute on TextInput (id=Value_Input) at NewUWIssueDelegateDV.pcf: line 40, column 97
    function validationExpression_15 () : java.lang.Object {
      return issue.IssueType.ComparatorWrapper.ValueType.validate(issue.Value)
    }
    
    // 'valueRange' attribute on RangeInput (id=IssueType_Input) at NewUWIssueDelegateDV.pcf: line 20, column 40
    function valueRange_3 () : java.lang.Object {
      return uwIssueTypes
    }
    
    // 'value' attribute on RangeInput (id=IssueType_Input) at NewUWIssueDelegateDV.pcf: line 20, column 40
    function valueRoot_2 () : java.lang.Object {
      return issue
    }
    
    // 'value' attribute on RangeInput (id=IssueType_Input) at NewUWIssueDelegateDV.pcf: line 20, column 40
    function value_0 () : entity.UWIssueType {
      return issue.IssueType
    }
    
    // 'value' attribute on TextAreaInput (id=LongDescription_Input) at NewUWIssueDelegateDV.pcf: line 33, column 40
    function value_11 () : java.lang.String {
      return issue.LongDescription
    }
    
    // 'value' attribute on TextInput (id=Value_Input) at NewUWIssueDelegateDV.pcf: line 40, column 97
    function value_17 () : java.lang.String {
      return issue.Value
    }
    
    // 'value' attribute on TextInput (id=ShortDescription_Input) at NewUWIssueDelegateDV.pcf: line 27, column 41
    function value_7 () : java.lang.String {
      return issue.ShortDescription
    }
    
    // 'valueRange' attribute on RangeInput (id=IssueType_Input) at NewUWIssueDelegateDV.pcf: line 20, column 40
    function verifyValueRangeIsAllowedType_4 ($$arg :  entity.UWIssueType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=IssueType_Input) at NewUWIssueDelegateDV.pcf: line 20, column 40
    function verifyValueRangeIsAllowedType_4 ($$arg :  gw.api.database.IQueryBeanResult<entity.UWIssueType>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=IssueType_Input) at NewUWIssueDelegateDV.pcf: line 20, column 40
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=IssueType_Input) at NewUWIssueDelegateDV.pcf: line 20, column 40
    function verifyValueRange_5 () : void {
      var __valueRangeArg = uwIssueTypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=Value_Input) at NewUWIssueDelegateDV.pcf: line 40, column 97
    function visible_16 () : java.lang.Boolean {
      return issue.IssueType.Comparator != null and issue.IssueType.Comparator != TC_NONE
    }
    
    property get issue () : UWIssueDelegate {
      return getRequireValue("issue", 0) as UWIssueDelegate
    }
    
    property set issue ($arg :  UWIssueDelegate) {
      setRequireValue("issue", 0, $arg)
    }
    
    property get uwIssueTypes () : List<UWIssueType> {
      return getRequireValue("uwIssueTypes", 0) as List<UWIssueType>
    }
    
    property set uwIssueTypes ($arg :  List<UWIssueType>) {
      setRequireValue("uwIssueTypes", 0, $arg)
    }
    
    
  }
  
  
}