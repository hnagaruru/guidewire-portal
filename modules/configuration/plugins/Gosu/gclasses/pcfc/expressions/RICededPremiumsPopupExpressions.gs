package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiumsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RICededPremiumsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiumsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RICededPremiumsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AllTransactions_Cell) at RICededPremiumsPopup.pcf: line 41, column 103
    function action_1 () : void {
      RICededPremiums_AllPopup.push(risk.RIRisk)
    }
    
    // 'action' attribute on TextCell (id=AgreementsByCost_Cell) at RICededPremiumsPopup.pcf: line 51, column 110
    function action_3 () : void {
      RICededPremiums_AgreementsByCostPopup.push(risk.RIRisk)
    }
    
    // 'action' attribute on TextCell (id=CostsByAgreement_Cell) at RICededPremiumsPopup.pcf: line 61, column 110
    function action_5 () : void {
      RICededPremiums_CostsByAgreementPopup.push(risk.RIRisk)
    }
    
    // 'action' attribute on TextCell (id=AgreementCedingsAcrossTime_Cell) at RICededPremiumsPopup.pcf: line 71, column 105
    function action_7 () : void {
      RICededPremiums_AgreementsOverTimePopup.push(risk.RIRisk)
    }
    
    // 'action' attribute on TextCell (id=AllTransactions_Cell) at RICededPremiumsPopup.pcf: line 41, column 103
    function action_dest_2 () : pcf.api.Destination {
      return pcf.RICededPremiums_AllPopup.createDestination(risk.RIRisk)
    }
    
    // 'action' attribute on TextCell (id=AgreementsByCost_Cell) at RICededPremiumsPopup.pcf: line 51, column 110
    function action_dest_4 () : pcf.api.Destination {
      return pcf.RICededPremiums_AgreementsByCostPopup.createDestination(risk.RIRisk)
    }
    
    // 'action' attribute on TextCell (id=CostsByAgreement_Cell) at RICededPremiumsPopup.pcf: line 61, column 110
    function action_dest_6 () : pcf.api.Destination {
      return pcf.RICededPremiums_CostsByAgreementPopup.createDestination(risk.RIRisk)
    }
    
    // 'action' attribute on TextCell (id=AgreementCedingsAcrossTime_Cell) at RICededPremiumsPopup.pcf: line 71, column 105
    function action_dest_8 () : pcf.api.Destination {
      return pcf.RICededPremiums_AgreementsOverTimePopup.createDestination(risk.RIRisk)
    }
    
    // 'label' attribute on Label at RICededPremiumsPopup.pcf: line 33, column 41
    function label_0 () : java.lang.String {
      return risk.DisplayName
    }
    
    property get risk () : entity.Reinsurable {
      return getIteratedValue(1) as entity.Reinsurable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiumsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RICededPremiumsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'value' attribute on PanelIterator at RICededPremiumsPopup.pcf: line 29, column 62
    function value_9 () : java.util.List<entity.Reinsurable> {
      return policyPeriod.AllReinsurables.sortBy(\ r -> r.DisplayName )
    }
    
    override property get CurrentLocation () : pcf.RICededPremiumsPopup {
      return super.CurrentLocation as pcf.RICededPremiumsPopup
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}