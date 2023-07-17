package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/job/CoveragePartSelectionDV.HOPHomeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoveragePartSelectionDV_HOPHomeownersExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/job/CoveragePartSelectionDV.HOPHomeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoveragePartSelectionDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=HOPCoverageForm_Input) at CoveragePartSelectionDV.HOPHomeowners.pcf: line 43, column 45
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.CoverageForm = (__VALUE_TO_SET as typekey.HOPCoverageForm)
    }
    
    // 'value' attribute on TypeKeyInput (id=HOPCoveragePartType_Input) at CoveragePartSelectionDV.HOPHomeowners.pcf: line 31, column 46
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      coveragePart.CoveragePartType = (__VALUE_TO_SET as typekey.CoveragePartType)
    }
    
    // 'filter' attribute on TypeKeyInput (id=HOPCoverageForm_Input) at CoveragePartSelectionDV.HOPHomeowners.pcf: line 43, column 45
    function filter_12 (VALUE :  typekey.HOPCoverageForm, VALUES :  typekey.HOPCoverageForm[]) : java.lang.Boolean {
      return coveragePart.CoveragePartType == null ? false : VALUE.hasCategory(coveragePart.CoveragePartType)
    }
    
    // 'initialValue' attribute on Variable at CoveragePartSelectionDV.HOPHomeowners.pcf: line 14, column 38
    function initialValue_0 () : entity.HOPCoveragePart {
      return policyPeriod.HOPLine.HOPCoverageParts.single()
    }
    
    // 'initialValue' attribute on Variable at CoveragePartSelectionDV.HOPHomeowners.pcf: line 19, column 34
    function initialValue_1 () : entity.HOPDwelling {
      return coveragePart.HOPDwellings.first()
    }
    
    // 'initialValue' attribute on Variable at CoveragePartSelectionDV.HOPHomeowners.pcf: line 23, column 70
    function initialValue_2 () : gw.web.line.hop.policy.HOPCoverageFormStateTransitions {
      return gw.web.line.hop.policy.HOPCoverageFormStateTransitions.create(policyPeriod.HOPLine)
    }
    
    // 'onChange' attribute on PostOnChange at CoveragePartSelectionDV.HOPHomeowners.pcf: line 34, column 59
    function onChange_3 () : void {
      coveragePart.clearDwellingCovForm()
    }
    
    // 'onChange' attribute on PostOnChange at CoveragePartSelectionDV.HOPHomeowners.pcf: line 45, column 87
    function onChange_8 () : void {
      hopCoverageFormStateTransitions.switchTo(dwelling.CoverageForm)
    }
    
    // 'value' attribute on TypeKeyInput (id=HOPCoverageForm_Input) at CoveragePartSelectionDV.HOPHomeowners.pcf: line 43, column 45
    function valueRoot_11 () : java.lang.Object {
      return dwelling
    }
    
    // 'value' attribute on TypeKeyInput (id=HOPCoveragePartType_Input) at CoveragePartSelectionDV.HOPHomeowners.pcf: line 31, column 46
    function valueRoot_6 () : java.lang.Object {
      return coveragePart
    }
    
    // 'value' attribute on TypeKeyInput (id=HOPCoveragePartType_Input) at CoveragePartSelectionDV.HOPHomeowners.pcf: line 31, column 46
    function value_4 () : typekey.CoveragePartType {
      return coveragePart.CoveragePartType
    }
    
    // 'value' attribute on TypeKeyInput (id=HOPCoverageForm_Input) at CoveragePartSelectionDV.HOPHomeowners.pcf: line 43, column 45
    function value_9 () : typekey.HOPCoverageForm {
      return dwelling.CoverageForm
    }
    
    property get coveragePart () : entity.HOPCoveragePart {
      return getVariableValue("coveragePart", 0) as entity.HOPCoveragePart
    }
    
    property set coveragePart ($arg :  entity.HOPCoveragePart) {
      setVariableValue("coveragePart", 0, $arg)
    }
    
    property get dwelling () : entity.HOPDwelling {
      return getVariableValue("dwelling", 0) as entity.HOPDwelling
    }
    
    property set dwelling ($arg :  entity.HOPDwelling) {
      setVariableValue("dwelling", 0, $arg)
    }
    
    property get hopCoverageFormStateTransitions () : gw.web.line.hop.policy.HOPCoverageFormStateTransitions {
      return getVariableValue("hopCoverageFormStateTransitions", 0) as gw.web.line.hop.policy.HOPCoverageFormStateTransitions
    }
    
    property set hopCoverageFormStateTransitions ($arg :  gw.web.line.hop.policy.HOPCoverageFormStateTransitions) {
      setVariableValue("hopCoverageFormStateTransitions", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}