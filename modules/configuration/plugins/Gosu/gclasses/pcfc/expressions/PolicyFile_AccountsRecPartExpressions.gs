package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/PolicyFile_AccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_AccountsRecPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/PolicyFile_AccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_AccountsRecPartExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at PolicyFile_AccountsRecPart.pcf: line 19, column 83
    function def_onEnter_0 (def :  pcf.IMARPanelSet) : void {
      def.onEnter( policyPeriod.IMLine.IMAccountsRecPart, false, null )
    }
    
    // 'def' attribute on PanelRef at PolicyFile_AccountsRecPart.pcf: line 19, column 83
    function def_refreshVariables_1 (def :  pcf.IMARPanelSet) : void {
      def.refreshVariables( policyPeriod.IMLine.IMAccountsRecPart, false, null )
    }
    
    // 'parent' attribute on Page (id=PolicyFile_AccountsRecPart) at PolicyFile_AccountsRecPart.pcf: line 8, column 74
    static function parent_2 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_AccountsRecPart {
      return super.CurrentLocation as pcf.PolicyFile_AccountsRecPart
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