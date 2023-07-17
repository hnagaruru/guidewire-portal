package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyNotesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyNotesDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyNotesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyNotesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at CopyNotesDV.pcf: line 36, column 51
    function def_onEnter_10 (def :  pcf.CopyNotesLV) : void {
      def.onEnter(noteCopiers)
    }
    
    // 'def' attribute on ListViewInput at CopyNotesDV.pcf: line 36, column 51
    function def_refreshVariables_11 (def :  pcf.CopyNotesLV) : void {
      def.refreshVariables(noteCopiers)
    }
    
    // 'value' attribute on BooleanRadioInput (id=allNotes_Input) at CopyNotesDV.pcf: line 31, column 54
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      allNoteCopier.ShouldCopyAll = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at CopyNotesDV.pcf: line 16, column 37
    function initialValue_0 () : gw.note.AllNoteCopier {
      return copier.getAllNoteCopier()
    }
    
    // 'initialValue' attribute on Variable at CopyNotesDV.pcf: line 20, column 46
    function initialValue_1 () : List<gw.note.NoteCopier> {
      return copier.getNoteCopiers()
    }
    
    // 'label' attribute on PreFormattedTextInput (id=NoNotes_Input) at CopyNotesDV.pcf: line 43, column 38
    function label_13 () : java.lang.Object {
      return DisplayKey.get("Web.CopyPolicyData.NoItems.Policy", sourcePeriod.PolicyNumberDisplayString)
    }
    
    // 'trueLabel' attribute on BooleanRadioInput (id=allNotes_Input) at CopyNotesDV.pcf: line 31, column 54
    function trueLabel_6 () : java.lang.Object {
      return DisplayKey.get("Web.CopyPolicyData.Notes.AllNotes.Policy", sourcePeriod.PolicyNumberDisplayString)
    }
    
    // 'value' attribute on BooleanRadioInput (id=allNotes_Input) at CopyNotesDV.pcf: line 31, column 54
    function valueRoot_5 () : java.lang.Object {
      return allNoteCopier
    }
    
    // 'value' attribute on BooleanRadioInput (id=allNotes_Input) at CopyNotesDV.pcf: line 31, column 54
    function value_3 () : java.lang.Boolean {
      return allNoteCopier.ShouldCopyAll
    }
    
    // 'visible' attribute on PreFormattedTextInput (id=NoNotes_Input) at CopyNotesDV.pcf: line 43, column 38
    function visible_12 () : java.lang.Boolean {
      return noteCopiers.Empty
    }
    
    // 'visible' attribute on BooleanRadioInput (id=allNotes_Input) at CopyNotesDV.pcf: line 31, column 54
    function visible_2 () : java.lang.Boolean {
      return allNoteCopier.Copiers.Count > 0
    }
    
    // 'visible' attribute on ListViewInput at CopyNotesDV.pcf: line 36, column 51
    function visible_9 () : java.lang.Boolean {
      return not allNoteCopier.ShouldCopyAll
    }
    
    property get allNoteCopier () : gw.note.AllNoteCopier {
      return getVariableValue("allNoteCopier", 0) as gw.note.AllNoteCopier
    }
    
    property set allNoteCopier ($arg :  gw.note.AllNoteCopier) {
      setVariableValue("allNoteCopier", 0, $arg)
    }
    
    property get copier () : gw.policy.PolicyPeriodCopier {
      return getRequireValue("copier", 0) as gw.policy.PolicyPeriodCopier
    }
    
    property set copier ($arg :  gw.policy.PolicyPeriodCopier) {
      setRequireValue("copier", 0, $arg)
    }
    
    property get noteCopiers () : List<gw.note.NoteCopier> {
      return getVariableValue("noteCopiers", 0) as List<gw.note.NoteCopier>
    }
    
    property set noteCopiers ($arg :  List<gw.note.NoteCopier>) {
      setVariableValue("noteCopiers", 0, $arg)
    }
    
    property get sourcePeriod () : PolicyPeriod {
      return getRequireValue("sourcePeriod", 0) as PolicyPeriod
    }
    
    property set sourcePeriod ($arg :  PolicyPeriod) {
      setRequireValue("sourcePeriod", 0, $arg)
    }
    
    
  }
  
  
}