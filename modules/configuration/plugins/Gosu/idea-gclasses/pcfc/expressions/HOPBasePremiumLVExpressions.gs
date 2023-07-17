package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPBasePremiumLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPBasePremiumLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPBasePremiumLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPBasePremiumLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef (id=BasePremiumRow) at HOPBasePremiumLV.pcf: line 62, column 28
    function def_onEnter_6 (def :  pcf.HOPBasePremiumRowSet) : void {
      def.onEnter(basePremiumCosts, proRatedCosts)
    }
    
    // 'def' attribute on RowSetRef (id=BasePremiumRow) at HOPBasePremiumLV.pcf: line 62, column 28
    function def_refreshVariables_7 (def :  pcf.HOPBasePremiumRowSet) : void {
      def.refreshVariables(basePremiumCosts, proRatedCosts)
    }
    
    // 'initialValue' attribute on Variable at HOPBasePremiumLV.pcf: line 15, column 35
    function initialValue_0 () : List<HOPCost> {
      return line.BasePremiumCosts
    }
    
    // 'initialValue' attribute on Variable at HOPBasePremiumLV.pcf: line 19, column 23
    function initialValue_1 () : Boolean {
      return basePremiumCosts.AnyProrated
    }
    
    // 'visible' attribute on TextCell (id=AmountHeader_Cell) at HOPBasePremiumLV.pcf: line 33, column 23
    function visible_2 () : java.lang.Boolean {
      return proRatedCosts
    }
    
    property get basePremiumCosts () : List<HOPCost> {
      return getVariableValue("basePremiumCosts", 0) as List<HOPCost>
    }
    
    property set basePremiumCosts ($arg :  List<HOPCost>) {
      setVariableValue("basePremiumCosts", 0, $arg)
    }
    
    property get line () : HOPLine {
      return getRequireValue("line", 0) as HOPLine
    }
    
    property set line ($arg :  HOPLine) {
      setRequireValue("line", 0, $arg)
    }
    
    property get proRatedCosts () : Boolean {
      return getVariableValue("proRatedCosts", 0) as Boolean
    }
    
    property set proRatedCosts ($arg :  Boolean) {
      setVariableValue("proRatedCosts", 0, $arg)
    }
    
    
  }
  
  
}