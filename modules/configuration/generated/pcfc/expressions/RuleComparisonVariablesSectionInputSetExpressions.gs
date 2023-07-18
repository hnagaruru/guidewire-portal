package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleComparisonVariablesSectionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleComparisonVariablesSectionInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleComparisonVariablesSectionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RuleComparisonVariablesSectionInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RuleComparisonVariablesSectionInputSet.pcf: line 21, column 73
    function def_onEnter_2 (def :  pcf.RuleComparisonVariableInputSet) : void {
      def.onEnter(controller, variableDiff)
    }
    
    // 'def' attribute on InputSetRef at RuleComparisonVariablesSectionInputSet.pcf: line 21, column 73
    function def_refreshVariables_3 (def :  pcf.RuleComparisonVariableInputSet) : void {
      def.refreshVariables(controller, variableDiff)
    }
    
    property get variableDiff () : gw.bizrules.diff.RuleMatchableDiffPair<RuleVariable> {
      return getIteratedValue(1) as gw.bizrules.diff.RuleMatchableDiffPair<RuleVariable>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleComparisonVariablesSectionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleComparisonVariablesSectionInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=RuleVariablesSectionLabel) at RuleComparisonVariablesSectionInputSet.pcf: line 13, column 39
    function def_onEnter_0 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.onEnter(controller, DisplayKey.get("BizRules.Import.Comparison.RuleVariables"))
    }
    
    // 'def' attribute on InputSetRef (id=RuleVariablesSectionLabel) at RuleComparisonVariablesSectionInputSet.pcf: line 13, column 39
    function def_refreshVariables_1 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.refreshVariables(controller, DisplayKey.get("BizRules.Import.Comparison.RuleVariables"))
    }
    
    // 'value' attribute on InputIterator (id=RuleVariables) at RuleComparisonVariablesSectionInputSet.pcf: line 19, column 70
    function value_4 () : List<gw.bizrules.diff.RuleMatchableDiffPair> {
      return controller.VariableDiffs
    }
    
    // 'valueType' attribute on InputIterator (id=RuleVariables) at RuleComparisonVariablesSectionInputSet.pcf: line 19, column 70
    function verifyValueTypeIsAllowedType_5 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on InputIterator (id=RuleVariables) at RuleComparisonVariablesSectionInputSet.pcf: line 19, column 70
    function verifyValueTypeIsAllowedType_5 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on InputIterator (id=RuleVariables) at RuleComparisonVariablesSectionInputSet.pcf: line 19, column 70
    function verifyValueTypeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on InputIterator (id=RuleVariables) at RuleComparisonVariablesSectionInputSet.pcf: line 19, column 70
    function verifyValueType_6 () : void {
      var __valueTypeArg : List<gw.bizrules.diff.RuleMatchableDiffPair>
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_5(__valueTypeArg)
    }
    
    property get controller () : gw.bizrules.pcf.RuleVersionComparisonController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.RuleVersionComparisonController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RuleVersionComparisonController) {
      setRequireValue("controller", 0, $arg)
    }
    
    
  }
  
  
}