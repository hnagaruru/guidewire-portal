package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPModifiersPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPModifiersPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPModifiersPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPModifiersPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=LineModifiers) at HOPModifiersPanelSet.pcf: line 31, column 37
    function def_onEnter_2 (def :  pcf.HOPModifiersInputSet) : void {
      def.onEnter(lineModifiers, policyPeriod)
    }
    
    // 'def' attribute on InputSetRef (id=DwellingModifiers) at HOPModifiersPanelSet.pcf: line 44, column 41
    function def_onEnter_4 (def :  pcf.HOPModifiersInputSet) : void {
      def.onEnter(dwellingModifiers, policyPeriod)
    }
    
    // 'def' attribute on InputSetRef (id=LineModifiers) at HOPModifiersPanelSet.pcf: line 31, column 37
    function def_refreshVariables_3 (def :  pcf.HOPModifiersInputSet) : void {
      def.refreshVariables(lineModifiers, policyPeriod)
    }
    
    // 'def' attribute on InputSetRef (id=DwellingModifiers) at HOPModifiersPanelSet.pcf: line 44, column 41
    function def_refreshVariables_5 (def :  pcf.HOPModifiersInputSet) : void {
      def.refreshVariables(dwellingModifiers, policyPeriod)
    }
    
    // 'editable' attribute on PanelSet (id=HOPModifiersPanelSet) at HOPModifiersPanelSet.pcf: line 7, column 31
    function editable_6 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at HOPModifiersPanelSet.pcf: line 17, column 26
    function initialValue_0 () : Modifier[] {
      return policyPeriod.HOPLine.Modifiers
    }
    
    // 'initialValue' attribute on Variable at HOPModifiersPanelSet.pcf: line 21, column 26
    function initialValue_1 () : Modifier[] {
      return policyPeriod.HOPLine.HOPDwellings.single().Modifiers
    }
    
    property get dwellingModifiers () : Modifier[] {
      return getVariableValue("dwellingModifiers", 0) as Modifier[]
    }
    
    property set dwellingModifiers ($arg :  Modifier[]) {
      setVariableValue("dwellingModifiers", 0, $arg)
    }
    
    property get lineModifiers () : Modifier[] {
      return getVariableValue("lineModifiers", 0) as Modifier[]
    }
    
    property set lineModifiers ($arg :  Modifier[]) {
      setVariableValue("lineModifiers", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}