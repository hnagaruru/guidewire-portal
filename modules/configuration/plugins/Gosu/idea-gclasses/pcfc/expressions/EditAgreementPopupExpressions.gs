package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/EditAgreementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditAgreementPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/EditAgreementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditAgreementPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (agreement :  RIAgreement, ririsk :  entity.RIRisk, isreadonly :  boolean) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=EditAgreementPopup) at EditAgreementPopup.pcf: line 12, column 122
    function afterCommit_2 (TopLocation :  pcf.api.Location) : void {
      ririsk.updateCedingOnAllAttachments()
    }
    
    // 'beforeCommit' attribute on Popup (id=EditAgreementPopup) at EditAgreementPopup.pcf: line 12, column 122
    function beforeCommit_3 (pickedValue :  RIAgreement) : void {
      gw.web.admin.ReinsuranceUIHelper.recalcAndValidate(agreement, ririsk)
    }
    
    // 'canEdit' attribute on Popup (id=EditAgreementPopup) at EditAgreementPopup.pcf: line 12, column 122
    function canEdit_4 () : java.lang.Boolean {
      return not isreadonly
    }
    
    // 'canVisit' attribute on Popup (id=EditAgreementPopup) at EditAgreementPopup.pcf: line 12, column 122
    static function canVisit_5 (agreement :  RIAgreement, isreadonly :  boolean, ririsk :  entity.RIRisk) : java.lang.Boolean {
      return perm.System.viewreinsuranceforpolicy
    }
    
    // 'def' attribute on ScreenRef at EditAgreementPopup.pcf: line 26, column 47
    function def_onEnter_0 (def :  pcf.AgreementScreen) : void {
      def.onEnter(agreement, true)
    }
    
    // 'def' attribute on ScreenRef at EditAgreementPopup.pcf: line 26, column 47
    function def_refreshVariables_1 (def :  pcf.AgreementScreen) : void {
      def.refreshVariables(agreement, true)
    }
    
    // 'title' attribute on Popup (id=EditAgreementPopup) at EditAgreementPopup.pcf: line 12, column 122
    static function title_6 (agreement :  RIAgreement, isreadonly :  boolean, ririsk :  entity.RIRisk) : java.lang.Object {
      return agreement typeis Treaty ? ArrangementType.TC_TREATY.DisplayName : ArrangementType.TC_FACULTATIVE.DisplayName
    }
    
    override property get CurrentLocation () : pcf.EditAgreementPopup {
      return super.CurrentLocation as pcf.EditAgreementPopup
    }
    
    property get agreement () : RIAgreement {
      return getVariableValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setVariableValue("agreement", 0, $arg)
    }
    
    property get isreadonly () : boolean {
      return getVariableValue("isreadonly", 0) as java.lang.Boolean
    }
    
    property set isreadonly ($arg :  boolean) {
      setVariableValue("isreadonly", 0, $arg)
    }
    
    property get ririsk () : entity.RIRisk {
      return getVariableValue("ririsk", 0) as entity.RIRisk
    }
    
    property set ririsk ($arg :  entity.RIRisk) {
      setVariableValue("ririsk", 0, $arg)
    }
    
    
  }
  
  
}