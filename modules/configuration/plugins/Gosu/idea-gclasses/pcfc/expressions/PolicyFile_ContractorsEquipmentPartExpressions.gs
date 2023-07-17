package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/PolicyFile_ContractorsEquipmentPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_ContractorsEquipmentPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/PolicyFile_ContractorsEquipmentPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_ContractorsEquipmentPartExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at PolicyFile_ContractorsEquipmentPart.pcf: line 20, column 106
    function def_onEnter_0 (def :  pcf.ContractorsEquipmentPartPanelSet) : void {
      def.onEnter( policyPeriod.IMLine.ContractorsEquipPart, false, null )
    }
    
    // 'def' attribute on PanelRef at PolicyFile_ContractorsEquipmentPart.pcf: line 20, column 106
    function def_refreshVariables_1 (def :  pcf.ContractorsEquipmentPartPanelSet) : void {
      def.refreshVariables( policyPeriod.IMLine.ContractorsEquipPart, false, null )
    }
    
    // 'parent' attribute on Page (id=PolicyFile_ContractorsEquipmentPart) at PolicyFile_ContractorsEquipmentPart.pcf: line 8, column 76
    static function parent_2 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_ContractorsEquipmentPart {
      return super.CurrentLocation as pcf.PolicyFile_ContractorsEquipmentPart
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