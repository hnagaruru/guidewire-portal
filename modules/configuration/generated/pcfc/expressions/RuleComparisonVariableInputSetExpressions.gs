package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleComparisonVariableInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleComparisonVariableInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleComparisonVariableInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleComparisonVariableInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RuleComparisonVariableInputSet.pcf: line 14, column 75
    function def_onEnter_0 (def :  pcf.RuleComparisonCommandLabelInputSet) : void {
      def.onEnter(controller, "")
    }
    
    // 'def' attribute on InputSetRef (id=NameRow) at RuleComparisonVariableInputSet.pcf: line 17, column 21
    function def_onEnter_2 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(variableDiff.NameRow)
    }
    
    // 'def' attribute on InputSetRef (id=DescriptionRow) at RuleComparisonVariableInputSet.pcf: line 20, column 28
    function def_onEnter_4 (def :  pcf.RuleComparisonRowTextAreaInputSet) : void {
      def.onEnter(variableDiff.DescriptionRow)
    }
    
    // 'def' attribute on InputSetRef (id=ExpressionRow) at RuleComparisonVariableInputSet.pcf: line 23, column 27
    function def_onEnter_6 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(variableDiff.ExpressionRow)
    }
    
    // 'def' attribute on InputSetRef at RuleComparisonVariableInputSet.pcf: line 14, column 75
    function def_refreshVariables_1 (def :  pcf.RuleComparisonCommandLabelInputSet) : void {
      def.refreshVariables(controller, "")
    }
    
    // 'def' attribute on InputSetRef (id=NameRow) at RuleComparisonVariableInputSet.pcf: line 17, column 21
    function def_refreshVariables_3 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(variableDiff.NameRow)
    }
    
    // 'def' attribute on InputSetRef (id=DescriptionRow) at RuleComparisonVariableInputSet.pcf: line 20, column 28
    function def_refreshVariables_5 (def :  pcf.RuleComparisonRowTextAreaInputSet) : void {
      def.refreshVariables(variableDiff.DescriptionRow)
    }
    
    // 'def' attribute on InputSetRef (id=ExpressionRow) at RuleComparisonVariableInputSet.pcf: line 23, column 27
    function def_refreshVariables_7 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(variableDiff.ExpressionRow)
    }
    
    property get controller () : gw.bizrules.pcf.RuleVersionComparisonController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.RuleVersionComparisonController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RuleVersionComparisonController) {
      setRequireValue("controller", 0, $arg)
    }
    
    property get variableDiff () : gw.bizrules.diff.RuleMatchableDiffPair<RuleVariable> {
      return getRequireValue("variableDiff", 0) as gw.bizrules.diff.RuleMatchableDiffPair<RuleVariable>
    }
    
    property set variableDiff ($arg :  gw.bizrules.diff.RuleMatchableDiffPair<RuleVariable>) {
      setRequireValue("variableDiff", 0, $arg)
    }
    
    
  }
  
  
}