package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/EditAgreementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditAgreementPageExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/EditAgreementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditAgreementPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (agreement :  RIAgreement) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Page (id=EditAgreementPage) at EditAgreementPage.pcf: line 12, column 122
    function beforeCommit_2 (pickedValue :  java.lang.Object) : void {
      if (agreement.Active) { gw.reinsurance.agreement.RIAgreementValidation.validateUI(agreement); if (agreement typeis Facultative) {agreement.recalculateCeding()} }
    }
    
    // 'canVisit' attribute on Page (id=EditAgreementPage) at EditAgreementPage.pcf: line 12, column 122
    static function canVisit_3 (agreement :  RIAgreement) : java.lang.Boolean {
      return perm.System.viewreinsuranceforpolicy
    }
    
    // 'def' attribute on ScreenRef at EditAgreementPage.pcf: line 19, column 48
    function def_onEnter_0 (def :  pcf.AgreementScreen) : void {
      def.onEnter(agreement, false)
    }
    
    // 'def' attribute on ScreenRef at EditAgreementPage.pcf: line 19, column 48
    function def_refreshVariables_1 (def :  pcf.AgreementScreen) : void {
      def.refreshVariables(agreement, false)
    }
    
    // 'parent' attribute on Page (id=EditAgreementPage) at EditAgreementPage.pcf: line 12, column 122
    static function parent_4 (agreement :  RIAgreement) : pcf.api.Destination {
      return pcf.AgreementSearchPage.createDestination()
    }
    
    // 'title' attribute on Page (id=EditAgreementPage) at EditAgreementPage.pcf: line 12, column 122
    static function title_5 (agreement :  RIAgreement) : java.lang.Object {
      return agreement typeis Treaty ? ArrangementType.TC_TREATY.DisplayName : ArrangementType.TC_FACULTATIVE.DisplayName
    }
    
    override property get CurrentLocation () : pcf.EditAgreementPage {
      return super.CurrentLocation as pcf.EditAgreementPage
    }
    
    property get agreement () : RIAgreement {
      return getVariableValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setVariableValue("agreement", 0, $arg)
    }
    
    
  }
  
  
}