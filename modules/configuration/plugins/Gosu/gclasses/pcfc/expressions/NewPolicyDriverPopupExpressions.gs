package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewPolicyDriverPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewPolicyDriverPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewPolicyDriverPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewPolicyDriverPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (line :  PersonalAutoLine, contactType :  ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewPolicyDriverPopup.pcf: line 54, column 62
    function action_10 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewPolicyDriverPopup.pcf: line 46, column 62
    function action_5 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(policyDriver))
    }
    
    // 'beforeCommit' attribute on Popup (id=NewPolicyDriverPopup) at NewPolicyDriverPopup.pcf: line 12, column 111
    function beforeCommit_49 (pickedValue :  PolicyDriver) : void {
      policyDriver.resetContactAndRoles(duplicateContactsPopupHelper.existingPCContactWithABContactMatch); policyDriver.initializeIncidentSummary();
    }
    
    // 'def' attribute on PanelRef at NewPolicyDriverPopup.pcf: line 114, column 67
    function def_onEnter_47 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.onEnter(policyDriver, false)
    }
    
    // 'def' attribute on PanelRef at NewPolicyDriverPopup.pcf: line 114, column 67
    function def_refreshVariables_48 (def :  pcf.NewPolicyContactRoleDetailsCV) : void {
      def.refreshVariables(policyDriver, false)
    }
    
    // 'value' attribute on DateInput (id=datecompletedtrainingclass_Input) at NewPolicyDriverPopup.pcf: line 63, column 56
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.DateCompletedTrainingClass = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=trainingclasstype_Input) at NewPolicyDriverPopup.pcf: line 69, column 52
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.TrainingClassType = (__VALUE_TO_SET as typekey.TrainingClassType)
    }
    
    // 'value' attribute on TypeKeyInput (id=numberofaccidents_Input) at NewPolicyDriverPopup.pcf: line 75, column 52
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.NumberofAccidents = (__VALUE_TO_SET as typekey.NumberOfAccidents)
    }
    
    // 'value' attribute on TypeKeyInput (id=numberofviolations_Input) at NewPolicyDriverPopup.pcf: line 81, column 52
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.NumberofViolations = (__VALUE_TO_SET as typekey.NumberOfAccidents)
    }
    
    // 'value' attribute on BooleanRadioInput (id=student_Input) at NewPolicyDriverPopup.pcf: line 86, column 37
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.Student = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=yearlicensed_Input) at NewPolicyDriverPopup.pcf: line 92, column 44
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.YearLicensed = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=gooddriverdiscount_Input) at NewPolicyDriverPopup.pcf: line 97, column 48
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.GoodDriverDiscount = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApplicableGoodDriverDiscount_Input) at NewPolicyDriverPopup.pcf: line 103, column 64
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.ApplicableGoodDriverDiscount = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Excluded_Input) at NewPolicyDriverPopup.pcf: line 108, column 43
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.Excluded = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at NewPolicyDriverPopup.pcf: line 25, column 28
    function initialValue_0 () : PolicyDriver {
      return line.addNewPolicyDriverOfContactType(contactType)
    }
    
    // 'initialValue' attribute on Variable at NewPolicyDriverPopup.pcf: line 29, column 29
    function initialValue_1 () : entity.Driver {
      return policyDriver.AccountContactRole.AccountContact.getRole(TC_DRIVER) as Driver
    }
    
    // 'initialValue' attribute on Variable at NewPolicyDriverPopup.pcf: line 33, column 25
    function initialValue_2 () : Contact[] {
      return line.PolicyDrivers.map(\pd -> pd.AccountContactRole.AccountContact.Contact)
    }
    
    // 'initialValue' attribute on Variable at NewPolicyDriverPopup.pcf: line 37, column 69
    function initialValue_3 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(policyDriver.AccountContactRole.AccountContact.Contact, existingContacts)
    }
    
    // EditButtons at NewPolicyDriverPopup.pcf: line 49, column 72
    function label_8 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at NewPolicyDriverPopup.pcf: line 49, column 72
    function pickValue_6 () : PolicyDriver {
      return policyDriver
    }
    
    // 'title' attribute on Popup (id=NewPolicyDriverPopup) at NewPolicyDriverPopup.pcf: line 12, column 111
    static function title_50 (contactType :  ContactType, line :  PersonalAutoLine) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", entity.PolicyDriver.Type.TypeInfo.DisplayName)
    }
    
    // 'value' attribute on DateInput (id=datecompletedtrainingclass_Input) at NewPolicyDriverPopup.pcf: line 63, column 56
    function valueRoot_13 () : java.lang.Object {
      return driver
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApplicableGoodDriverDiscount_Input) at NewPolicyDriverPopup.pcf: line 103, column 64
    function valueRoot_41 () : java.lang.Object {
      return policyDriver
    }
    
    // 'value' attribute on DateInput (id=datecompletedtrainingclass_Input) at NewPolicyDriverPopup.pcf: line 63, column 56
    function value_11 () : java.util.Date {
      return driver.DateCompletedTrainingClass
    }
    
    // 'value' attribute on TypeKeyInput (id=trainingclasstype_Input) at NewPolicyDriverPopup.pcf: line 69, column 52
    function value_15 () : typekey.TrainingClassType {
      return driver.TrainingClassType
    }
    
    // 'value' attribute on TypeKeyInput (id=numberofaccidents_Input) at NewPolicyDriverPopup.pcf: line 75, column 52
    function value_19 () : typekey.NumberOfAccidents {
      return driver.NumberofAccidents
    }
    
    // 'value' attribute on TypeKeyInput (id=numberofviolations_Input) at NewPolicyDriverPopup.pcf: line 81, column 52
    function value_23 () : typekey.NumberOfAccidents {
      return driver.NumberofViolations
    }
    
    // 'value' attribute on BooleanRadioInput (id=student_Input) at NewPolicyDriverPopup.pcf: line 86, column 37
    function value_27 () : java.lang.Boolean {
      return driver.Student
    }
    
    // 'value' attribute on TextInput (id=yearlicensed_Input) at NewPolicyDriverPopup.pcf: line 92, column 44
    function value_31 () : java.lang.Integer {
      return driver.YearLicensed
    }
    
    // 'value' attribute on BooleanRadioInput (id=gooddriverdiscount_Input) at NewPolicyDriverPopup.pcf: line 97, column 48
    function value_35 () : java.lang.Boolean {
      return driver.GoodDriverDiscount
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApplicableGoodDriverDiscount_Input) at NewPolicyDriverPopup.pcf: line 103, column 64
    function value_39 () : java.lang.Boolean {
      return policyDriver.ApplicableGoodDriverDiscount
    }
    
    // 'value' attribute on BooleanRadioInput (id=Excluded_Input) at NewPolicyDriverPopup.pcf: line 108, column 43
    function value_43 () : java.lang.Boolean {
      return policyDriver.Excluded
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewPolicyDriverPopup.pcf: line 46, column 62
    function visible_4 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewPolicyDriverPopup.pcf: line 49, column 72
    function visible_7 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewPolicyDriverPopup {
      return super.CurrentLocation as pcf.NewPolicyDriverPopup
    }
    
    property get contactType () : ContactType {
      return getVariableValue("contactType", 0) as ContactType
    }
    
    property set contactType ($arg :  ContactType) {
      setVariableValue("contactType", 0, $arg)
    }
    
    property get driver () : entity.Driver {
      return getVariableValue("driver", 0) as entity.Driver
    }
    
    property set driver ($arg :  entity.Driver) {
      setVariableValue("driver", 0, $arg)
    }
    
    property get duplicateContactsPopupHelper () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return getVariableValue("duplicateContactsPopupHelper", 0) as gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper
    }
    
    property set duplicateContactsPopupHelper ($arg :  gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper) {
      setVariableValue("duplicateContactsPopupHelper", 0, $arg)
    }
    
    property get existingContacts () : Contact[] {
      return getVariableValue("existingContacts", 0) as Contact[]
    }
    
    property set existingContacts ($arg :  Contact[]) {
      setVariableValue("existingContacts", 0, $arg)
    }
    
    property get line () : PersonalAutoLine {
      return getVariableValue("line", 0) as PersonalAutoLine
    }
    
    property set line ($arg :  PersonalAutoLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get policyDriver () : PolicyDriver {
      return getVariableValue("policyDriver", 0) as PolicyDriver
    }
    
    property set policyDriver ($arg :  PolicyDriver) {
      setVariableValue("policyDriver", 0, $arg)
    }
    
    
  }
  
  
}