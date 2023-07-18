package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/NewSecondaryNamedInsuredPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewSecondaryNamedInsuredPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/NewSecondaryNamedInsuredPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewSecondaryNamedInsuredPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewSecondaryNamedInsuredPopup.pcf: line 54, column 62
    function action_11 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewSecondaryNamedInsuredPopup.pcf: line 46, column 62
    function action_6 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(policySecNamedInsured))
    }
    
    // 'beforeCommit' attribute on Popup (id=NewSecondaryNamedInsuredPopup) at NewSecondaryNamedInsuredPopup.pcf: line 12, column 120
    function beforeCommit_18 (pickedValue :  PolicySecNamedInsured) : void {
      policySecNamedInsured.resetContactAndRoles(duplicateContactsPopupHelper.existingPCContactWithABContactMatch)
    }
    
    // 'def' attribute on PanelRef at NewSecondaryNamedInsuredPopup.pcf: line 67, column 76
    function def_onEnter_16 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.onEnter(policySecNamedInsured, false)
    }
    
    // 'def' attribute on PanelRef at NewSecondaryNamedInsuredPopup.pcf: line 67, column 76
    function def_refreshVariables_17 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.refreshVariables(policySecNamedInsured, false)
    }
    
    // 'value' attribute on TextInput (id=Relationship_Input) at NewSecondaryNamedInsuredPopup.pcf: line 63, column 57
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      policySecNamedInsured.Relationship = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at NewSecondaryNamedInsuredPopup.pcf: line 21, column 44
    function initialValue_0 () : entity.PolicySecNamedInsured {
      return initializePolicySecondaryNamedInsured()
    }
    
    // 'initialValue' attribute on Variable at NewSecondaryNamedInsuredPopup.pcf: line 25, column 28
    function initialValue_1 () : Jurisdiction {
      return gw.api.util.JurisdictionMappingUtil.getJurisdiction(policySecNamedInsured.AccountContactRole.AccountContact.Contact.PrimaryAddress)
    }
    
    // 'initialValue' attribute on Variable at NewSecondaryNamedInsuredPopup.pcf: line 29, column 30
    function initialValue_2 () : java.util.Date {
      return period.getReferenceDateForCurrentJob(referenceState)
    }
    
    // 'initialValue' attribute on Variable at NewSecondaryNamedInsuredPopup.pcf: line 33, column 28
    function initialValue_3 () : IndustryCode {
      return period.Job.NewTerm ? null : policySecNamedInsured.BasedOn.IndustryCode
    }
    
    // 'initialValue' attribute on Variable at NewSecondaryNamedInsuredPopup.pcf: line 37, column 69
    function initialValue_4 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(policySecNamedInsured.AccountContactRole.AccountContact.Contact)
    }
    
    // EditButtons at NewSecondaryNamedInsuredPopup.pcf: line 49, column 72
    function label_9 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at NewSecondaryNamedInsuredPopup.pcf: line 49, column 72
    function pickValue_7 () : PolicySecNamedInsured {
      return policySecNamedInsured
    }
    
    // 'title' attribute on Popup (id=NewSecondaryNamedInsuredPopup) at NewSecondaryNamedInsuredPopup.pcf: line 12, column 120
    static function title_19 (period :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", entity.PolicySecNamedInsured.Type.TypeInfo.DisplayName)
    }
    
    // 'value' attribute on TextInput (id=Relationship_Input) at NewSecondaryNamedInsuredPopup.pcf: line 63, column 57
    function valueRoot_14 () : java.lang.Object {
      return policySecNamedInsured
    }
    
    // 'value' attribute on TextInput (id=Relationship_Input) at NewSecondaryNamedInsuredPopup.pcf: line 63, column 57
    function value_12 () : java.lang.String {
      return policySecNamedInsured.Relationship
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewSecondaryNamedInsuredPopup.pcf: line 46, column 62
    function visible_5 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewSecondaryNamedInsuredPopup.pcf: line 49, column 72
    function visible_8 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewSecondaryNamedInsuredPopup {
      return super.CurrentLocation as pcf.NewSecondaryNamedInsuredPopup
    }
    
    property get duplicateContactsPopupHelper () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return getVariableValue("duplicateContactsPopupHelper", 0) as gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper
    }
    
    property set duplicateContactsPopupHelper ($arg :  gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper) {
      setVariableValue("duplicateContactsPopupHelper", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    property get policySecNamedInsured () : entity.PolicySecNamedInsured {
      return getVariableValue("policySecNamedInsured", 0) as entity.PolicySecNamedInsured
    }
    
    property set policySecNamedInsured ($arg :  entity.PolicySecNamedInsured) {
      setVariableValue("policySecNamedInsured", 0, $arg)
    }
    
    property get previousIndustryCode () : IndustryCode {
      return getVariableValue("previousIndustryCode", 0) as IndustryCode
    }
    
    property set previousIndustryCode ($arg :  IndustryCode) {
      setVariableValue("previousIndustryCode", 0, $arg)
    }
    
    property get referenceDate () : java.util.Date {
      return getVariableValue("referenceDate", 0) as java.util.Date
    }
    
    property set referenceDate ($arg :  java.util.Date) {
      setVariableValue("referenceDate", 0, $arg)
    }
    
    property get referenceState () : Jurisdiction {
      return getVariableValue("referenceState", 0) as Jurisdiction
    }
    
    property set referenceState ($arg :  Jurisdiction) {
      setVariableValue("referenceState", 0, $arg)
    }
    
    function initializePolicySecondaryNamedInsured() : PolicySecNamedInsured {
      period.changeSecondaryNamedInsuredTo(period.Policy.Account.addNewAccountContactOfType(TC_PERSON).Contact)
      return period.SecondaryNamedInsured  
    }
    
    
  }
  
  
}