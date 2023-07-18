package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/note/NoteTemplateSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NoteTemplateSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/note/NoteTemplateSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NoteTemplateSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at NoteTemplateSearchDV.pcf: line 49, column 41
    function def_onEnter_30 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at NoteTemplateSearchDV.pcf: line 49, column 41
    function def_refreshVariables_31 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at NoteTemplateSearchDV.pcf: line 32, column 67
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      noteTemplateSearchCriteria.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on RangeInput (id=Product_Input) at NoteTemplateSearchDV.pcf: line 40, column 39
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      noteTemplateSearchCriteria.LOB = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at NoteTemplateSearchDV.pcf: line 17, column 68
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      noteTemplateSearchCriteria.Topic = (__VALUE_TO_SET as typekey.NoteTopicType)
    }
    
    // 'value' attribute on TextInput (id=Keywords_Input) at NoteTemplateSearchDV.pcf: line 45, column 54
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      noteTemplateSearchCriteria.Keywords = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at NoteTemplateSearchDV.pcf: line 24, column 63
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      noteTemplateSearchCriteria.Type = (__VALUE_TO_SET as typekey.NoteType)
    }
    
    // 'optionLabel' attribute on RangeInput (id=Product_Input) at NoteTemplateSearchDV.pcf: line 40, column 39
    function optionLabel_21 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.productmodel.ProductLookup.getByPublicID( VALUE ).DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at NoteTemplateSearchDV.pcf: line 40, column 39
    function valueRange_22 () : java.lang.Object {
      return gw.api.productmodel.ProductLookup.getAll().map( \ p -> p.PublicID  )
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at NoteTemplateSearchDV.pcf: line 17, column 68
    function valueRoot_3 () : java.lang.Object {
      return noteTemplateSearchCriteria
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at NoteTemplateSearchDV.pcf: line 17, column 68
    function value_1 () : typekey.NoteTopicType {
      return noteTemplateSearchCriteria.Topic
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at NoteTemplateSearchDV.pcf: line 32, column 67
    function value_13 () : typekey.LanguageType {
      return noteTemplateSearchCriteria.Language
    }
    
    // 'value' attribute on RangeInput (id=Product_Input) at NoteTemplateSearchDV.pcf: line 40, column 39
    function value_18 () : java.lang.String {
      return noteTemplateSearchCriteria.LOB
    }
    
    // 'value' attribute on TextInput (id=Keywords_Input) at NoteTemplateSearchDV.pcf: line 45, column 54
    function value_26 () : java.lang.String {
      return noteTemplateSearchCriteria.Keywords
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at NoteTemplateSearchDV.pcf: line 24, column 63
    function value_7 () : typekey.NoteType {
      return noteTemplateSearchCriteria.Type
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at NoteTemplateSearchDV.pcf: line 40, column 39
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at NoteTemplateSearchDV.pcf: line 40, column 39
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at NoteTemplateSearchDV.pcf: line 40, column 39
    function verifyValueRange_24 () : void {
      var __valueRangeArg = gw.api.productmodel.ProductLookup.getAll().map( \ p -> p.PublicID  )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyInput (id=Topic_Input) at NoteTemplateSearchDV.pcf: line 17, column 68
    function visible_0 () : java.lang.Boolean {
      return NoteTopicType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on TypeKeyInput (id=Language_Input) at NoteTemplateSearchDV.pcf: line 32, column 67
    function visible_12 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on TypeKeyInput (id=Type_Input) at NoteTemplateSearchDV.pcf: line 24, column 63
    function visible_6 () : java.lang.Boolean {
      return NoteType.getTypeKeys( false ).Count > 1
    }
    
    property get noteTemplateSearchCriteria () : NoteTemplateSearchCriteria {
      return getRequireValue("noteTemplateSearchCriteria", 0) as NoteTemplateSearchCriteria
    }
    
    property set noteTemplateSearchCriteria ($arg :  NoteTemplateSearchCriteria) {
      setRequireValue("noteTemplateSearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}