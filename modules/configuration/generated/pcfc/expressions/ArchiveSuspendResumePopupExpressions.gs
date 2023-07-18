package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/archive/ArchiveSuspendResumePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArchiveSuspendResumePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/archive/ArchiveSuspendResumePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArchiveSuspendResumePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policy :  Policy) : int {
      return 0
    }
    
    // 'available' attribute on CheckBoxInput (id=DisableArchiving_Input) at ArchiveSuspendResumePopup.pcf: line 51, column 55
    function available_5 () : java.lang.Boolean {
      return perm.System.archivedisable
    }
    
    // 'beforeCommit' attribute on Popup (id=ArchiveSuspendResumePopup) at ArchiveSuspendResumePopup.pcf: line 10, column 59
    function beforeCommit_40 (pickedValue :  java.lang.Object) : void {
      handleArchiving()
    }
    
    // 'value' attribute on TextInput (id=HistoryComment_Input) at ArchiveSuspendResumePopup.pcf: line 72, column 32
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      comment = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=DisableArchiving_Input) at ArchiveSuspendResumePopup.pcf: line 51, column 55
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      isDoNotArchiveChanged = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at ArchiveSuspendResumePopup.pcf: line 19, column 23
    function initialValue_0 () : boolean {
      return policy.DoNotArchive
    }
    
    // EditButtons at ArchiveSuspendResumePopup.pcf: line 30, column 50
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextCell (id=eventDate_Cell) at ArchiveSuspendResumePopup.pcf: line 92, column 45
    function sortValue_23 (event :  entity.History) : java.lang.Object {
      return event.EventTimestamp
    }
    
    // 'value' attribute on TextCell (id=eventType_Cell) at ArchiveSuspendResumePopup.pcf: line 97, column 56
    function sortValue_24 (event :  entity.History) : java.lang.Object {
      return event.CustomType
    }
    
    // 'value' attribute on TextCell (id=eventUser_Cell) at ArchiveSuspendResumePopup.pcf: line 102, column 42
    function sortValue_25 (event :  entity.History) : java.lang.Object {
      return event.User
    }
    
    // 'value' attribute on TextCell (id=eventDesc_Cell) at ArchiveSuspendResumePopup.pcf: line 106, column 44
    function sortValue_26 (event :  entity.History) : java.lang.Object {
      return event.Description
    }
    
    // 'value' attribute on TextInput (id=HistoryComment_Input) at ArchiveSuspendResumePopup.pcf: line 72, column 32
    function value_20 () : java.lang.String {
      return comment
    }
    
    // 'value' attribute on RowIterator at ArchiveSuspendResumePopup.pcf: line 84, column 80
    function value_39 () : gw.api.database.IQueryBeanResult<entity.History> {
      return searchForArchiveHistory()
    }
    
    // 'updateVisible' attribute on EditButtons at ArchiveSuspendResumePopup.pcf: line 30, column 50
    function visible_1 () : java.lang.Boolean {
      return isDoNotArchiveChanged
    }
    
    // 'visible' attribute on Label (id=ArchiveDisabled) at ArchiveSuspendResumePopup.pcf: line 57, column 52
    function visible_12 () : java.lang.Boolean {
      return doNotArchiveStartingState
    }
    
    // 'visible' attribute on AlertBar (id=currentlyArchivedTermsWarning) at ArchiveSuspendResumePopup.pcf: line 36, column 160
    function visible_3 () : java.lang.Boolean {
      return policy.Periods.hasMatch(\ p -> p.ArchiveState == ArchiveState.TC_ARCHIVED) and (not doNotArchiveStartingState) and isDoNotArchiveChanged
    }
    
    // 'visible' attribute on Label (id=ArchiveEnabled) at ArchiveSuspendResumePopup.pcf: line 43, column 56
    function visible_4 () : java.lang.Boolean {
      return not doNotArchiveStartingState
    }
    
    override property get CurrentLocation () : pcf.ArchiveSuspendResumePopup {
      return super.CurrentLocation as pcf.ArchiveSuspendResumePopup
    }
    
    property get comment () : String {
      return getVariableValue("comment", 0) as String
    }
    
    property set comment ($arg :  String) {
      setVariableValue("comment", 0, $arg)
    }
    
    property get doNotArchiveStartingState () : boolean {
      return getVariableValue("doNotArchiveStartingState", 0) as java.lang.Boolean
    }
    
    property set doNotArchiveStartingState ($arg :  boolean) {
      setVariableValue("doNotArchiveStartingState", 0, $arg)
    }
    
    property get isDoNotArchiveChanged () : boolean {
      return getVariableValue("isDoNotArchiveChanged", 0) as java.lang.Boolean
    }
    
    property set isDoNotArchiveChanged ($arg :  boolean) {
      setVariableValue("isDoNotArchiveChanged", 0, $arg)
    }
    
    property get policy () : Policy {
      return getVariableValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setVariableValue("policy", 0, $arg)
    }
    
    function handleArchiving() {
      if (isDoNotArchiveChanged) {
      policy.setDoNotArchive(not doNotArchiveStartingState, \ -> comment)
      }
    }
    
    function searchForArchiveHistory() : gw.api.database.IQueryBeanResult<entity.History> {
      return new gw.history.CustomHistoryFinder().getAllPolicyArchiveHistory(policy)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/archive/ArchiveSuspendResumePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ArchiveSuspendResumePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=eventDate_Cell) at ArchiveSuspendResumePopup.pcf: line 92, column 45
    function valueRoot_28 () : java.lang.Object {
      return event
    }
    
    // 'value' attribute on TextCell (id=eventDate_Cell) at ArchiveSuspendResumePopup.pcf: line 92, column 45
    function value_27 () : java.util.Date {
      return event.EventTimestamp
    }
    
    // 'value' attribute on TextCell (id=eventType_Cell) at ArchiveSuspendResumePopup.pcf: line 97, column 56
    function value_30 () : typekey.CustomHistoryType {
      return event.CustomType
    }
    
    // 'value' attribute on TextCell (id=eventUser_Cell) at ArchiveSuspendResumePopup.pcf: line 102, column 42
    function value_33 () : entity.User {
      return event.User
    }
    
    // 'value' attribute on TextCell (id=eventDesc_Cell) at ArchiveSuspendResumePopup.pcf: line 106, column 44
    function value_36 () : java.lang.String {
      return event.Description
    }
    
    property get event () : entity.History {
      return getIteratedValue(1) as entity.History
    }
    
    
  }
  
  
}