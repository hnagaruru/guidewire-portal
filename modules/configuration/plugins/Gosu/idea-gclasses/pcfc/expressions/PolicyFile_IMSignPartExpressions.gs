package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/signs/PolicyFile_IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_IMSignPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/signs/PolicyFile_IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_IMSignPartExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at PolicyFile_IMSignPart.pcf: line 20, column 84
    function def_onEnter_0 (def :  pcf.IMSignsPanelSet) : void {
      def.onEnter(policyPeriod, policyPeriod.IMLine.IMSignPart, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_IMSignPart.pcf: line 20, column 84
    function def_refreshVariables_1 (def :  pcf.IMSignsPanelSet) : void {
      def.refreshVariables(policyPeriod, policyPeriod.IMLine.IMSignPart, null)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_IMSignPart) at PolicyFile_IMSignPart.pcf: line 8, column 63
    static function parent_2 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_IMSignPart {
      return super.CurrentLocation as pcf.PolicyFile_IMSignPart
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}