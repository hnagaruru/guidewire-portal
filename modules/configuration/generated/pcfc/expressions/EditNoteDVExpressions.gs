package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/EditNoteDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditNoteDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/EditNoteDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditNoteDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=TitleContingencyPolicy) at EditNoteDV.pcf: line 60, column 95
    function action_20 () : void {
      ContingencyPopup.push(note.Contingency)
    }
    
    // 'action' attribute on Link (id=RelatedToPolicyNumberContingency) at EditNoteDV.pcf: line 68, column 55
    function action_24 () : void {
      PolicyFile_Summary.push(note.Contingency.Policy.MostRecentBoundPeriodOnMostRecentTerm, java.util.Date.Today)
    }
    
    // 'action' attribute on Link (id=TitleContingencyJob) at EditNoteDV.pcf: line 80, column 95
    function action_29 () : void {
      ContingencyPopup.push(note.Contingency)
    }
    
    // 'action' attribute on Link (id=RelatedToJobNumberContingency) at EditNoteDV.pcf: line 88, column 52
    function action_34 () : void {
      JobForward.go(note.Contingency.PolicyPeriod.Job)
    }
    
    // 'action' attribute on Link (id=TitleContingencyPolicy) at EditNoteDV.pcf: line 60, column 95
    function action_dest_21 () : pcf.api.Destination {
      return pcf.ContingencyPopup.createDestination(note.Contingency)
    }
    
    // 'action' attribute on Link (id=RelatedToPolicyNumberContingency) at EditNoteDV.pcf: line 68, column 55
    function action_dest_25 () : pcf.api.Destination {
      return pcf.PolicyFile_Summary.createDestination(note.Contingency.Policy.MostRecentBoundPeriodOnMostRecentTerm, java.util.Date.Today)
    }
    
    // 'action' attribute on Link (id=TitleContingencyJob) at EditNoteDV.pcf: line 80, column 95
    function action_dest_30 () : pcf.api.Destination {
      return pcf.ContingencyPopup.createDestination(note.Contingency)
    }
    
    // 'action' attribute on Link (id=RelatedToJobNumberContingency) at EditNoteDV.pcf: line 88, column 52
    function action_dest_35 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(note.Contingency.PolicyPeriod.Job)
    }
    
    // 'available' attribute on Link (id=TitleContingencyPolicy) at EditNoteDV.pcf: line 60, column 95
    function available_19 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode
    }
    
    // 'value' attribute on TextAreaInput (id=Text_Input) at EditNoteDV.pcf: line 49, column 28
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      note.Body = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at EditNoteDV.pcf: line 29, column 31
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      note.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'filter' attribute on TypeKeyInput (id=SecurityLevel_Input) at EditNoteDV.pcf: line 42, column 47
    function filter_13 (VALUE :  typekey.NoteSecurityType, VALUES :  typekey.NoteSecurityType[]) : java.lang.Boolean {
      return note.hasCreatePermission(VALUE)
    }
    
    // 'initialValue' attribute on Variable at EditNoteDV.pcf: line 13, column 23
    function initialValue_0 () : boolean {
      return note.Contingency != null and note.Contingency.Policy.MostRecentBoundPeriodOnMostRecentTerm.Status == TC_BOUND
    }
    
    // 'initialValue' attribute on Variable at EditNoteDV.pcf: line 17, column 23
    function initialValue_1 () : boolean {
      return note.Contingency != null and not showContingencyPolicy and note.Contingency.PolicyPeriod != null
    }
    
    // 'label' attribute on Link (id=TitleContingencyPolicy) at EditNoteDV.pcf: line 60, column 95
    function label_22 () : java.lang.Object {
      return DisplayKey.get('Web.Contingency.TitleContingency', note.Contingency.Title)
    }
    
    // 'label' attribute on Link (id=RelatedToPolicyNumberContingency) at EditNoteDV.pcf: line 68, column 55
    function label_26 () : java.lang.Object {
      return note.Contingency.PolicyNumberLabel
    }
    
    // 'label' attribute on Link (id=RelatedToJobContingency) at EditNoteDV.pcf: line 83, column 50
    function label_32 () : java.lang.Object {
      return note.Contingency.JobTypeLabel
    }
    
    // 'label' attribute on Link (id=RelatedToJobNumberContingency) at EditNoteDV.pcf: line 88, column 52
    function label_36 () : java.lang.Object {
      return note.Contingency.JobNumberLabel
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at EditNoteDV.pcf: line 24, column 44
    function valueRoot_3 () : java.lang.Object {
      return note
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityLevel_Input) at EditNoteDV.pcf: line 42, column 47
    function value_11 () : typekey.NoteSecurityType {
      return note.SecurityType
    }
    
    // 'value' attribute on TextAreaInput (id=Text_Input) at EditNoteDV.pcf: line 49, column 28
    function value_15 () : java.lang.String {
      return note.Body
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at EditNoteDV.pcf: line 24, column 44
    function value_2 () : typekey.NoteTopicType {
      return note.Topic
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at EditNoteDV.pcf: line 29, column 31
    function value_5 () : java.lang.String {
      return note.Subject
    }
    
    // 'value' attribute on TextInput (id=RelatedTo_Input) at EditNoteDV.pcf: line 35, column 25
    function value_9 () : java.lang.String {
      return entity.Note.getLevelDisplayString( note.Level )
    }
    
    // 'visible' attribute on ContentInput at EditNoteDV.pcf: line 52, column 41
    function visible_27 () : java.lang.Boolean {
      return showContingencyPolicy
    }
    
    // 'visible' attribute on ContentInput at EditNoteDV.pcf: line 72, column 37
    function visible_37 () : java.lang.Boolean {
      return showContigencyJob
    }
    
    property get note () : Note {
      return getRequireValue("note", 0) as Note
    }
    
    property set note ($arg :  Note) {
      setRequireValue("note", 0, $arg)
    }
    
    property get showContigencyJob () : boolean {
      return getVariableValue("showContigencyJob", 0) as java.lang.Boolean
    }
    
    property set showContigencyJob ($arg :  boolean) {
      setVariableValue("showContigencyJob", 0, $arg)
    }
    
    property get showContingencyPolicy () : boolean {
      return getVariableValue("showContingencyPolicy", 0) as java.lang.Boolean
    }
    
    property set showContingencyPolicy ($arg :  boolean) {
      setVariableValue("showContingencyPolicy", 0, $arg)
    }
    
    
  }
  
  
}