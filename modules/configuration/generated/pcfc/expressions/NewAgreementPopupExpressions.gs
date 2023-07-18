package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/NewAgreementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAgreementPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/NewAgreementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAgreementPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (agreementType :  typekey.RIAgreement, ririsk :  entity.RIRisk) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=NewAgreementPopup) at NewAgreementPopup.pcf: line 12, column 130
    function beforeCommit_3 (pickedValue :  RIAgreement) : void {
      gw.reinsurance.agreement.RIAgreementValidation.validateUI(agreement); gw.reinsurance.agreement.RIAgreementValidation.validateAgainstRisk(agreement, ririsk)
    }
    
    // 'canVisit' attribute on Popup (id=NewAgreementPopup) at NewAgreementPopup.pcf: line 12, column 130
    static function canVisit_4 (agreementType :  typekey.RIAgreement, ririsk :  entity.RIRisk) : java.lang.Boolean {
      return (perm.System.editreinsuranceprogram and agreementType.isTreatyAgreement) or (perm.System.editreinsurancefacagreement and not agreementType.isTreatyAgreement)
    }
    
    // 'def' attribute on ScreenRef at NewAgreementPopup.pcf: line 26, column 47
    function def_onEnter_1 (def :  pcf.AgreementScreen) : void {
      def.onEnter(agreement, true)
    }
    
    // 'def' attribute on ScreenRef at NewAgreementPopup.pcf: line 26, column 47
    function def_refreshVariables_2 (def :  pcf.AgreementScreen) : void {
      def.refreshVariables(agreement, true)
    }
    
    // 'initialValue' attribute on Variable at NewAgreementPopup.pcf: line 24, column 27
    function initialValue_0 () : RIAgreement {
      return gw.web.admin.ReinsuranceUIHelper.createTreaty(ririsk, agreementType)
    }
    
    // 'title' attribute on Popup (id=NewAgreementPopup) at NewAgreementPopup.pcf: line 12, column 130
    static function title_5 (agreementType :  typekey.RIAgreement, ririsk :  entity.RIRisk) : java.lang.Object {
      return agreementType.isTreatyAgreement ? ArrangementType.TC_TREATY.DisplayName : ArrangementType.TC_FACULTATIVE.DisplayName
    }
    
    override property get CurrentLocation () : pcf.NewAgreementPopup {
      return super.CurrentLocation as pcf.NewAgreementPopup
    }
    
    property get agreement () : RIAgreement {
      return getVariableValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setVariableValue("agreement", 0, $arg)
    }
    
    property get agreementType () : typekey.RIAgreement {
      return getVariableValue("agreementType", 0) as typekey.RIAgreement
    }
    
    property set agreementType ($arg :  typekey.RIAgreement) {
      setVariableValue("agreementType", 0, $arg)
    }
    
    property get ririsk () : entity.RIRisk {
      return getVariableValue("ririsk", 0) as entity.RIRisk
    }
    
    property set ririsk ($arg :  entity.RIRisk) {
      setVariableValue("ririsk", 0, $arg)
    }
    
    
  }
  
  
}