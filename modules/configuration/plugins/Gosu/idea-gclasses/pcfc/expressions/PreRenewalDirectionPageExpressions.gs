package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/prerenewal/PreRenewalDirectionPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PreRenewalDirectionPageExpressions {
  @javax.annotation.Generated("config/web/pcf/prerenewal/PreRenewalDirectionPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PreRenewalDirectionPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, policy :  Policy, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'action' attribute on MenuItem (id=AssigneePicker) at PreRenewalDirectionPage.pcf: line 92, column 220
    function action_18 () : void {
      AssigneePickerPopup.push( new gw.assignment.UserAssigneePicker() )
    }
    
    // 'action' attribute on ToolbarButton (id=PreRenewalDirectionScreen_DeleteButton) at PreRenewalDirectionPage.pcf: line 57, column 136
    function action_8 () : void {
      removePrerenewal()
    }
    
    // 'action' attribute on ToolbarButton (id=PreRenewalDirectionScreen_ViewNotesButton) at PreRenewalDirectionPage.pcf: line 62, column 82
    function action_9 () : void {
      PreRenewalNotesPage.push(policyPeriod, TC_PRERENEWAL, asOfDate)
    }
    
    // 'action' attribute on ToolbarButton (id=PreRenewalDirectionScreen_ViewNotesButton) at PreRenewalDirectionPage.pcf: line 62, column 82
    function action_dest_10 () : pcf.api.Destination {
      return pcf.PreRenewalNotesPage.createDestination(policyPeriod, TC_PRERENEWAL, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=AssigneePicker) at PreRenewalDirectionPage.pcf: line 92, column 220
    function action_dest_19 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination( new gw.assignment.UserAssigneePicker() )
    }
    
    // 'afterCancel' attribute on Page (id=PreRenewalDirectionPage) at PreRenewalDirectionPage.pcf: line 13, column 65
    function afterCancel_72 () : void {
      PolicyFileForward.go(policyPeriod, asOfDate, "PolicySummary")
    }
    
    // 'afterCancel' attribute on Page (id=PreRenewalDirectionPage) at PreRenewalDirectionPage.pcf: line 13, column 65
    function afterCancel_dest_73 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod, asOfDate, "PolicySummary")
    }
    
    // 'afterCommit' attribute on Page (id=PreRenewalDirectionPage) at PreRenewalDirectionPage.pcf: line 13, column 65
    function afterCommit_74 (TopLocation :  pcf.api.Location) : void {
      PolicyFileForward.go(policyPeriod, asOfDate, "PolicySummary")
    }
    
    // 'beforeCommit' attribute on Page (id=PreRenewalDirectionPage) at PreRenewalDirectionPage.pcf: line 13, column 65
    function beforeCommit_75 (pickedValue :  java.lang.Object) : void {
      createCustomHistoryEvent()
    }
    
    // 'canEdit' attribute on Page (id=PreRenewalDirectionPage) at PreRenewalDirectionPage.pcf: line 13, column 65
    function canEdit_76 () : java.lang.Boolean {
      return perm.System.editprerenewal and policyPeriod.Policy.OpenRenewalJob == null
    }
    
    // 'canVisit' attribute on Page (id=PreRenewalDirectionPage) at PreRenewalDirectionPage.pcf: line 13, column 65
    static function canVisit_77 (asOfDate :  java.util.Date, policy :  Policy, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.System.viewprerenewal and perm.PolicyPeriod.view(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PreRenewalDirectionPage.pcf: line 174, column 115
    function def_onEnter_70 (def :  pcf.SelectedNonRenewalExplanationsLV) : void {
      def.onEnter(policy, policyPeriod, descriptions)
    }
    
    // 'def' attribute on PanelRef at PreRenewalDirectionPage.pcf: line 174, column 115
    function def_refreshVariables_71 (def :  pcf.SelectedNonRenewalExplanationsLV) : void {
      def.refreshVariables(policy, policyPeriod, descriptions)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreRenewalDirection_Input) at PreRenewalDirectionPage.pcf: line 78, column 57
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyTerm.PreRenewalDirection = (__VALUE_TO_SET as typekey.PreRenewalDirection)
    }
    
    // 'value' attribute on RangeInput (id=PreRenewalOwner_Input) at PreRenewalDirectionPage.pcf: line 92, column 220
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      policy.PreRenewalOwner = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'value' attribute on TypeKeyInput (id=NonRenewReason_Input) at PreRenewalDirectionPage.pcf: line 108, column 123
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyTerm.NonRenewReason = (__VALUE_TO_SET as typekey.NonRenewalCode)
    }
    
    // 'value' attribute on TextAreaInput (id=NonRenewAddExpl_Input) at PreRenewalDirectionPage.pcf: line 119, column 123
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyTerm.NonRenewAddExplanation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at PreRenewalDirectionPage.pcf: line 142, column 39
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      note.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityLevel_Input) at PreRenewalDirectionPage.pcf: line 160, column 55
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      note.SecurityType = (__VALUE_TO_SET as typekey.NoteSecurityType)
    }
    
    // 'value' attribute on TextAreaInput (id=Text_Input) at PreRenewalDirectionPage.pcf: line 167, column 36
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      note.Body = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'filter' attribute on TypeKeyInput (id=PreRenewalDirection_Input) at PreRenewalDirectionPage.pcf: line 78, column 57
    function filter_15 (VALUE :  typekey.PreRenewalDirection, VALUES :  typekey.PreRenewalDirection[]) : java.lang.Boolean {
      return filterPreRenewalDirection(VALUE)
    }
    
    // 'filter' attribute on TypeKeyInput (id=SecurityLevel_Input) at PreRenewalDirectionPage.pcf: line 160, column 55
    function filter_63 (VALUE :  typekey.NoteSecurityType, VALUES :  typekey.NoteSecurityType[]) : java.lang.Boolean {
      return note.hasCreatePermission(VALUE)
    }
    
    // 'initialValue' attribute on Variable at PreRenewalDirectionPage.pcf: line 28, column 26
    function initialValue_0 () : PolicyTerm {
      return policyPeriod.PolicyTerm
    }
    
    // 'initialValue' attribute on Variable at PreRenewalDirectionPage.pcf: line 32, column 24
    function initialValue_1 () : String[] {
      return new String[]{""}
    }
    
    // 'initialValue' attribute on Variable at PreRenewalDirectionPage.pcf: line 36, column 43
    function initialValue_2 () : typekey.PreRenewalDirection {
      return policyTerm.PreRenewalDirection
    }
    
    // 'initialValue' attribute on Variable at PreRenewalDirectionPage.pcf: line 40, column 38
    function initialValue_3 () : typekey.NonRenewalCode {
      return policyTerm.NonRenewReason
    }
    
    // 'initialValue' attribute on Variable at PreRenewalDirectionPage.pcf: line 44, column 20
    function initialValue_4 () : Note {
      return createPreRenewalNote()
    }
    
    // EditButtons at PreRenewalDirectionPage.pcf: line 50, column 23
    function label_6 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'onChange' attribute on PostOnChange at PreRenewalDirectionPage.pcf: line 80, column 167
    function onChange_11 () : void {
      descriptions[0] = descriptions[0] + policyTerm.createPreRenewalDirectionHistoryDescription(originalPreRenewalDirection) + " "
    }
    
    // 'onChange' attribute on PostOnChange at PreRenewalDirectionPage.pcf: line 99, column 212
    function onChange_17 () : void {
      descriptions[0] = descriptions[0] + policyTerm.createPreRenewalAssignmentHistoryDescription(policy.getUserRoleAssignmentByRole(typekey.UserRole.TC_PRERENEWALOWNER)) + " "
    }
    
    // 'onChange' attribute on PostOnChange at PreRenewalDirectionPage.pcf: line 110, column 159
    function onChange_30 () : void {
      descriptions[0] = descriptions[0] + policyTerm.createNonRenewalReasonHistoryDescription(originalNonRenewReason) + " "
    }
    
    // 'onChange' attribute on PostOnChange at PreRenewalDirectionPage.pcf: line 121, column 152
    function onChange_37 () : void {
      descriptions[0] = descriptions[0] + policyTerm.createNonRenewalAdditionalExplanationHistoryDescription() + " "
    }
    
    // 'onPick' attribute on RangeInput (id=PreRenewalOwner_Input) at PreRenewalDirectionPage.pcf: line 92, column 220
    function onPick_21 (PickedValue :  gw.api.assignment.Assignee) : void {
      policy.PreRenewalOwner = PickedValue as gw.api.assignment.Assignee
    }
    
    // 'optionLabel' attribute on RangeInput (id=RelatedTo_Input) at PreRenewalDirectionPage.pcf: line 152, column 43
    function optionLabel_54 (VALUE :  gw.api.domain.linkedobject.LinkedObjectContainer) : java.lang.String {
      return note.getLevelDisplayString(VALUE)
    }
    
    // 'parent' attribute on Page (id=PreRenewalDirectionPage) at PreRenewalDirectionPage.pcf: line 13, column 65
    static function parent_78 (asOfDate :  java.util.Date, policy :  Policy, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    // 'title' attribute on TitleBar at PreRenewalDirectionPage.pcf: line 48, column 240
    function title_5 () : java.lang.String {
      return DisplayKey.get("Web.PreRenewalDirection.ScreenTitle", gw.api.util.StringUtil.formatDate(policyPeriod.PeriodStart, "short"), gw.api.util.StringUtil.formatDate(policyPeriod.PeriodEnd, "short"))
    }
    
    // 'valueRange' attribute on RangeInput (id=PreRenewalOwner_Input) at PreRenewalDirectionPage.pcf: line 92, column 220
    function valueRange_25 () : java.lang.Object {
      return policy.getSuggestedPreRenewalOwners(policyTerm.PreRenewalDirection)
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at PreRenewalDirectionPage.pcf: line 152, column 43
    function valueRange_55 () : java.lang.Object {
      return note.generateLevels(null, policy, null, null)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreRenewalDirection_Input) at PreRenewalDirectionPage.pcf: line 78, column 57
    function valueRoot_14 () : java.lang.Object {
      return policyTerm
    }
    
    // 'value' attribute on RangeInput (id=PreRenewalOwner_Input) at PreRenewalDirectionPage.pcf: line 92, column 220
    function valueRoot_24 () : java.lang.Object {
      return policy
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at PreRenewalDirectionPage.pcf: line 137, column 52
    function valueRoot_45 () : java.lang.Object {
      return note
    }
    
    // 'value' attribute on RangeInput (id=PreRenewalOwner_Input) at PreRenewalDirectionPage.pcf: line 92, column 220
    function value_22 () : gw.api.assignment.Assignee {
      return policy.PreRenewalOwner
    }
    
    // 'value' attribute on TextAreaInput (id=NonRenewAddExpl_Input) at PreRenewalDirectionPage.pcf: line 119, column 123
    function value_39 () : java.lang.String {
      return policyTerm.NonRenewAddExplanation
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at PreRenewalDirectionPage.pcf: line 137, column 52
    function value_44 () : typekey.NoteTopicType {
      return note.Topic
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at PreRenewalDirectionPage.pcf: line 142, column 39
    function value_47 () : java.lang.String {
      return note.Subject
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at PreRenewalDirectionPage.pcf: line 152, column 43
    function value_52 () : gw.api.domain.linkedobject.LinkedObjectContainer {
      return note.Level
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityLevel_Input) at PreRenewalDirectionPage.pcf: line 160, column 55
    function value_60 () : typekey.NoteSecurityType {
      return note.SecurityType
    }
    
    // 'value' attribute on TextAreaInput (id=Text_Input) at PreRenewalDirectionPage.pcf: line 167, column 36
    function value_65 () : java.lang.String {
      return note.Body
    }
    
    // 'valueRange' attribute on RangeInput (id=PreRenewalOwner_Input) at PreRenewalDirectionPage.pcf: line 92, column 220
    function verifyValueRangeIsAllowedType_26 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PreRenewalOwner_Input) at PreRenewalDirectionPage.pcf: line 92, column 220
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at PreRenewalDirectionPage.pcf: line 152, column 43
    function verifyValueRangeIsAllowedType_56 ($$arg :  gw.api.domain.linkedobject.LinkedObjectContainer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at PreRenewalDirectionPage.pcf: line 152, column 43
    function verifyValueRangeIsAllowedType_56 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PreRenewalOwner_Input) at PreRenewalDirectionPage.pcf: line 92, column 220
    function verifyValueRange_27 () : void {
      var __valueRangeArg = policy.getSuggestedPreRenewalOwners(policyTerm.PreRenewalDirection)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at PreRenewalDirectionPage.pcf: line 152, column 43
    function verifyValueRange_57 () : void {
      var __valueRangeArg = note.generateLevels(null, policy, null, null)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_56(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=PreRenewalOwner_Input) at PreRenewalDirectionPage.pcf: line 92, column 220
    function visible_20 () : java.lang.Boolean {
      return policyTerm.PreRenewalDirection==TC_NONRENEWREFER or policyTerm.PreRenewalDirection==TC_UNDERWRITER or policyTerm.PreRenewalDirection==TC_ASSISTANT or policyTerm.PreRenewalDirection==TC_CUSTREP
    }
    
    // 'visible' attribute on TypeKeyInput (id=NonRenewReason_Input) at PreRenewalDirectionPage.pcf: line 108, column 123
    function visible_31 () : java.lang.Boolean {
      return policyTerm.PreRenewalDirection==TC_NONRENEW or policyTerm.PreRenewalDirection==TC_NONRENEWREFER
    }
    
    // 'visible' attribute on RangeInput (id=RelatedTo_Input) at PreRenewalDirectionPage.pcf: line 152, column 43
    function visible_51 () : java.lang.Boolean {
      return policy != null
    }
    
    // 'visible' attribute on ToolbarButton (id=PreRenewalDirectionScreen_DeleteButton) at PreRenewalDirectionPage.pcf: line 57, column 136
    function visible_7 () : java.lang.Boolean {
      return originalPreRenewalDirection != null and policyPeriod.Policy.OpenRenewalJob == null and perm.System.editprerenewal
    }
    
    override property get CurrentLocation () : pcf.PreRenewalDirectionPage {
      return super.CurrentLocation as pcf.PreRenewalDirectionPage
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get descriptions () : String[] {
      return getVariableValue("descriptions", 0) as String[]
    }
    
    property set descriptions ($arg :  String[]) {
      setVariableValue("descriptions", 0, $arg)
    }
    
    property get note () : Note {
      return getVariableValue("note", 0) as Note
    }
    
    property set note ($arg :  Note) {
      setVariableValue("note", 0, $arg)
    }
    
    property get originalNonRenewReason () : typekey.NonRenewalCode {
      return getVariableValue("originalNonRenewReason", 0) as typekey.NonRenewalCode
    }
    
    property set originalNonRenewReason ($arg :  typekey.NonRenewalCode) {
      setVariableValue("originalNonRenewReason", 0, $arg)
    }
    
    property get originalPreRenewalDirection () : typekey.PreRenewalDirection {
      return getVariableValue("originalPreRenewalDirection", 0) as typekey.PreRenewalDirection
    }
    
    property set originalPreRenewalDirection ($arg :  typekey.PreRenewalDirection) {
      setVariableValue("originalPreRenewalDirection", 0, $arg)
    }
    
    property get policy () : Policy {
      return getVariableValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setVariableValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get policyTerm () : PolicyTerm {
      return getVariableValue("policyTerm", 0) as PolicyTerm
    }
    
    property set policyTerm ($arg :  PolicyTerm) {
      setVariableValue("policyTerm", 0, $arg)
    }
    
    function removePrerenewal() {
      var _policyTerm = policyTerm
      gw.transaction.Transaction.runWithNewBundle( \ b -> {
        var thisTerm = b.loadBean(_policyTerm.ID) as PolicyTerm
        thisTerm.removePreRenewalDirection()
      })
      CurrentLocation.cancel()
    }
    
    // Users with selectnonrenew permission can choose any PreRenewalDirection value
    // Other users cannot choose "nonrenew" and "nonrenewrefer"
    function filterPreRenewalDirection( code : PreRenewalDirection ) : boolean {
      return perm.System.selectnonrenew or (code != TC_NONRENEW and code != TC_NONRENEWREFER)
    }
    
    // Creates a new pre-renewal note on the policy with "internalonly" security
    function createPreRenewalNote() : Note {
      var newNote = policy.newPrerenewalNote()
      newNote.SecurityType = NoteSecurityType.TC_INTERNALONLY
      return newNote
    }
    
    function createCustomHistoryEvent() {
      var _description = descriptions[0]
      policyTerm.createCustomHistoryEvent(CustomHistoryType.TC_PRERENEWAL, \ -> _description)
    }
    
    
  }
  
  
}