package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/EditPolicyContactRolePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditPolicyContactRolePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/EditPolicyContactRolePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditPolicyContactRolePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyContactRole :  PolicyContactRole, canEdit :  Boolean) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=EditPolicyContactRolePopup) at EditPolicyContactRolePopup.pcf: line 12, column 146
    function beforeCommit_4 (pickedValue :  PolicyContactRole) : void {
      validatePolicyContacts(policyContactRole.Branch)
    }
    
    // 'canEdit' attribute on Popup (id=EditPolicyContactRolePopup) at EditPolicyContactRolePopup.pcf: line 12, column 146
    function canEdit_5 () : java.lang.Boolean {
      return canEdit
    }
    
    // 'def' attribute on PanelRef at EditPolicyContactRolePopup.pcf: line 29, column 71
    function def_onEnter_2 (def :  pcf.PolicyContactRoleDetailsCV) : void {
      def.onEnter(policyContactRole, canEdit)
    }
    
    // 'def' attribute on PanelRef at EditPolicyContactRolePopup.pcf: line 29, column 71
    function def_refreshVariables_3 (def :  pcf.PolicyContactRoleDetailsCV) : void {
      def.refreshVariables(policyContactRole, canEdit)
    }
    
    // EditButtons at EditPolicyContactRolePopup.pcf: line 26, column 42
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at EditPolicyContactRolePopup.pcf: line 26, column 42
    function pickValue_0 () : PolicyContactRole {
      return policyContactRole
    }
    
    // 'title' attribute on Popup (id=EditPolicyContactRolePopup) at EditPolicyContactRolePopup.pcf: line 12, column 146
    static function title_7 (canEdit :  Boolean, policyContactRole :  PolicyContactRole) : java.lang.Object {
      return DisplayKey.get("Web.EditPolicyContactRolePopup.Title", (typeof policyContactRole).TypeInfo.DisplayName, policyContactRole)
    }
    
    override property get CurrentLocation () : pcf.EditPolicyContactRolePopup {
      return super.CurrentLocation as pcf.EditPolicyContactRolePopup
    }
    
    property get canEdit () : Boolean {
      return getVariableValue("canEdit", 0) as Boolean
    }
    
    property set canEdit ($arg :  Boolean) {
      setVariableValue("canEdit", 0, $arg)
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getVariableValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setVariableValue("policyContactRole", 0, $arg)
    }
    
    function validatePolicyContacts(policyPeriod : PolicyPeriod) {
      
      gw.validation.PCValidationContext.doPageLevelValidation( \ context -> {
        for (line in policyPeriod.Lines) {
          for (policyAddlInsured in line.AdditionalInsureds) {     
            var addlInsuredValidator = new gw.policy.PolicyAddlInsuredAndTypeUniqueValidation(context, policyAddlInsured)
            addlInsuredValidator.validate()
          }
        }
        
        // Check to make sure the user didn't delete the policy address
        var validator = new gw.policy.PolicyPeriodValidation(context, policyPeriod  )
        validator.checkPolicyAddress()
      })
      
    }
    
    
  }
  
  
}