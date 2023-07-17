package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/SplitRiskPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SplitRiskPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/SplitRiskPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SplitRiskPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (splittableRisks :  List<gw.lob.apd.APDSplittableRisk>) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=SplitRiskPopup) at SplitRiskPopup.pcf: line 11, column 70
    function beforeCommit_4 (pickedValue :  java.lang.Object) : void {
      splittableRisks.each(\splittableRisk -> splittableRisk.addSplitDate(splitDate))
    }
    
    // 'value' attribute on DateInput (id=SplitDate_Input) at SplitRiskPopup.pcf: line 35, column 32
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      splitDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'initialValue' attribute on Variable at SplitRiskPopup.pcf: line 20, column 30
    function initialValue_0 () : java.util.Date {
      return (splittableRisks.first() as EffDated).BranchUntyped.EditEffectiveDate
    }
    
    // 'value' attribute on DateInput (id=SplitDate_Input) at SplitRiskPopup.pcf: line 35, column 32
    function value_1 () : java.util.Date {
      return splitDate
    }
    
    override property get CurrentLocation () : pcf.SplitRiskPopup {
      return super.CurrentLocation as pcf.SplitRiskPopup
    }
    
    property get splitDate () : java.util.Date {
      return getVariableValue("splitDate", 0) as java.util.Date
    }
    
    property set splitDate ($arg :  java.util.Date) {
      setVariableValue("splitDate", 0, $arg)
    }
    
    property get splittableRisks () : List<gw.lob.apd.APDSplittableRisk> {
      return getVariableValue("splittableRisks", 0) as List<gw.lob.apd.APDSplittableRisk>
    }
    
    property set splittableRisks ($arg :  List<gw.lob.apd.APDSplittableRisk>) {
      setVariableValue("splittableRisks", 0, $arg)
    }
    
    
  }
  
  
}