package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPCostChangeDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPCostChangeDetailLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPCostChangeDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPCostChangeDetailLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef (id=CostChangeDetailRow) at HOPCostChangeDetailLV.pcf: line 17, column 33
    function def_onEnter_0 (def :  pcf.HOPCostChangeDetailRowSet) : void {
      def.onEnter(line.Branch, costChanges)
    }
    
    // 'def' attribute on RowSetRef (id=CostChangeDetailRow) at HOPCostChangeDetailLV.pcf: line 17, column 33
    function def_refreshVariables_1 (def :  pcf.HOPCostChangeDetailRowSet) : void {
      def.refreshVariables(line.Branch, costChanges)
    }
    
    property get costChanges () : java.util.List<entity.HOPTransaction> {
      return getRequireValue("costChanges", 0) as java.util.List<entity.HOPTransaction>
    }
    
    property set costChanges ($arg :  java.util.List<entity.HOPTransaction>) {
      setRequireValue("costChanges", 0, $arg)
    }
    
    property get line () : entity.HOPLine {
      return getRequireValue("line", 0) as entity.HOPLine
    }
    
    property set line ($arg :  entity.HOPLine) {
      setRequireValue("line", 0, $arg)
    }
    
    
  }
  
  
}