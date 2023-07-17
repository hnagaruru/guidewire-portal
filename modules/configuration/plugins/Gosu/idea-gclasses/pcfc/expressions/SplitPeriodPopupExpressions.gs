package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/SplitPeriodPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SplitPeriodPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/SplitPeriodPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SplitPeriodPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (wcLine :  productmodel.WorkersCompLine, jurisdictions :  WCJurisdiction[]) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=SplitPeriodPopup) at SplitPeriodPopup.pcf: line 12, column 67
    function beforeCommit_11 (pickedValue :  java.lang.Object) : void {
      wcLine.addRPSD( splitDate, splitType, jurisdictions )
    }
    
    // 'value' attribute on DateInput (id=SplitDate_Input) at SplitPeriodPopup.pcf: line 43, column 32
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      splitDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on RangeInput (id=splitType_Input) at SplitPeriodPopup.pcf: line 51, column 43
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      splitType = (__VALUE_TO_SET as typekey.RPSDType)
    }
    
    // 'initialValue' attribute on Variable at SplitPeriodPopup.pcf: line 24, column 30
    function initialValue_0 () : java.util.Date {
      return wcLine.Branch.EditEffectiveDate
    }
    
    // 'requestValidationExpression' attribute on DateInput (id=SplitDate_Input) at SplitPeriodPopup.pcf: line 43, column 32
    function requestValidationExpression_1 (VALUE :  java.util.Date) : java.lang.Object {
      return validateSplitDate(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=splitType_Input) at SplitPeriodPopup.pcf: line 51, column 43
    function valueRange_7 () : java.lang.Object {
      return {RPSDType.TC_FORCEDRERATING, RPSDType.TC_LATEMOD}
    }
    
    // 'value' attribute on DateInput (id=SplitDate_Input) at SplitPeriodPopup.pcf: line 43, column 32
    function value_2 () : java.util.Date {
      return splitDate
    }
    
    // 'value' attribute on RangeInput (id=splitType_Input) at SplitPeriodPopup.pcf: line 51, column 43
    function value_5 () : typekey.RPSDType {
      return splitType
    }
    
    // 'valueRange' attribute on RangeInput (id=splitType_Input) at SplitPeriodPopup.pcf: line 51, column 43
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=splitType_Input) at SplitPeriodPopup.pcf: line 51, column 43
    function verifyValueRangeIsAllowedType_8 ($$arg :  typekey.RPSDType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=splitType_Input) at SplitPeriodPopup.pcf: line 51, column 43
    function verifyValueRange_9 () : void {
      var __valueRangeArg = {RPSDType.TC_FORCEDRERATING, RPSDType.TC_LATEMOD}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    override property get CurrentLocation () : pcf.SplitPeriodPopup {
      return super.CurrentLocation as pcf.SplitPeriodPopup
    }
    
    property get jurisdictions () : WCJurisdiction[] {
      return getVariableValue("jurisdictions", 0) as WCJurisdiction[]
    }
    
    property set jurisdictions ($arg :  WCJurisdiction[]) {
      setVariableValue("jurisdictions", 0, $arg)
    }
    
    property get splitDate () : java.util.Date {
      return getVariableValue("splitDate", 0) as java.util.Date
    }
    
    property set splitDate ($arg :  java.util.Date) {
      setVariableValue("splitDate", 0, $arg)
    }
    
    property get splitType () : RPSDType {
      return getVariableValue("splitType", 0) as RPSDType
    }
    
    property set splitType ($arg :  RPSDType) {
      setVariableValue("splitType", 0, $arg)
    }
    
    property get wcLine () : productmodel.WorkersCompLine {
      return getVariableValue("wcLine", 0) as productmodel.WorkersCompLine
    }
    
    property set wcLine ($arg :  productmodel.WorkersCompLine) {
      setVariableValue("wcLine", 0, $arg)
    }
    
    function validateSplitDate(date : java.util.Date) : String{
      for(j in jurisdictions){
        var dateTime = gw.api.util.DateUtil.mergeDateAndTime(date, wcLine.Branch.PeriodStart)
        var error = j.canAddRPSD(dateTime)
        if(error != null){
          return error
        }
      }
      return null
    }
    
    
  }
  
  
}