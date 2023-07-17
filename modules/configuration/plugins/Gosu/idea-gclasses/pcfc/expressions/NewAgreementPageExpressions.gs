package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/NewAgreementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAgreementPageExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/NewAgreementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAgreementPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (agreementType :  typekey.RIAgreement) : int {
      return 0
    }
    
    static function __constructorIndex (agreementType :  typekey.RIAgreement, basedOn :  RIAgreement) : int {
      return 1
    }
    
    // 'afterCancel' attribute on Page (id=NewAgreementPage) at NewAgreementPage.pcf: line 13, column 130
    function afterCancel_3 () : void {
      Reinsurance.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewAgreementPage) at NewAgreementPage.pcf: line 13, column 130
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.Reinsurance.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewAgreementPage) at NewAgreementPage.pcf: line 13, column 130
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      EditAgreementPage.go(agreement)
    }
    
    // 'canVisit' attribute on Page (id=NewAgreementPage) at NewAgreementPage.pcf: line 13, column 130
    static function canVisit_6 (agreementType :  typekey.RIAgreement, basedOn :  RIAgreement) : java.lang.Boolean {
      return (perm.System.editreinsuranceprogram and agreementType.isTreatyAgreement) or (perm.System.editreinsurancefacagreement and not agreementType.isTreatyAgreement)
    }
    
    // 'def' attribute on ScreenRef at NewAgreementPage.pcf: line 29, column 48
    function def_onEnter_1 (def :  pcf.AgreementScreen) : void {
      def.onEnter(agreement, false)
    }
    
    // 'def' attribute on ScreenRef at NewAgreementPage.pcf: line 29, column 48
    function def_refreshVariables_2 (def :  pcf.AgreementScreen) : void {
      def.refreshVariables(agreement, false)
    }
    
    // 'initialValue' attribute on Variable at NewAgreementPage.pcf: line 27, column 27
    function initialValue_0 () : RIAgreement {
      return gw.web.admin.ReinsuranceUIHelper.createAgreement(basedOn, agreementType)
    }
    
    // 'parent' attribute on Page (id=NewAgreementPage) at NewAgreementPage.pcf: line 13, column 130
    static function parent_7 (agreementType :  typekey.RIAgreement, basedOn :  RIAgreement) : pcf.api.Destination {
      return pcf.Reinsurance.createDestination()
    }
    
    // 'title' attribute on Page (id=NewAgreementPage) at NewAgreementPage.pcf: line 13, column 130
    static function title_8 (agreementType :  typekey.RIAgreement, basedOn :  RIAgreement) : java.lang.Object {
      return agreementType.isTreatyAgreement ? ArrangementType.TC_TREATY.DisplayName : ArrangementType.TC_FACULTATIVE.DisplayName
    }
    
    override property get CurrentLocation () : pcf.NewAgreementPage {
      return super.CurrentLocation as pcf.NewAgreementPage
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
    
    property get basedOn () : RIAgreement {
      return getVariableValue("basedOn", 0) as RIAgreement
    }
    
    property set basedOn ($arg :  RIAgreement) {
      setVariableValue("basedOn", 0, $arg)
    }
    
    
  }
  
  
}