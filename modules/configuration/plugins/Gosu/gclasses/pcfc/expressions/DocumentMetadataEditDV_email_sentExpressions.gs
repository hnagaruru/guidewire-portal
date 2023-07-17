package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/DocumentMetadataEditDV.email_sent.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentMetadataEditDV_email_sentExpressions {
  @javax.annotation.Generated("config/web/pcf/document/DocumentMetadataEditDV.email_sent.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentMetadataEditDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at DocumentMetadataEditDV.email_sent.pcf: line 53, column 55
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityType_Input) at DocumentMetadataEditDV.email_sent.pcf: line 59, column 51
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.SecurityType = (__VALUE_TO_SET as typekey.DocumentSecurityType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Section_Input) at DocumentMetadataEditDV.email_sent.pcf: line 66, column 70
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Section = (__VALUE_TO_SET as typekey.DocumentSection)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Hidden_Input) at DocumentMetadataEditDV.email_sent.pcf: line 71, column 52
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Obsolete = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataEditDV.email_sent.pcf: line 18, column 104
    function initialValue_0 () : gw.api.web.document.DocumentMetadataPCHelper {
      return documentDetailsApplicationHelper as gw.api.web.document.DocumentMetadataPCHelper
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataEditDV.email_sent.pcf: line 45, column 67
    function valueRange_16 () : java.lang.Object {
      return LanguageType.getTypeKeys( false )
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentMetadataEditDV.email_sent.pcf: line 25, column 50
    function valueRoot_2 () : java.lang.Object {
      return documentMetadataPCHelper
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentMetadataEditDV.email_sent.pcf: line 25, column 50
    function value_1 () : java.lang.String {
      return documentMetadataPCHelper.Author
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at DocumentMetadataEditDV.email_sent.pcf: line 38, column 54
    function value_10 () : java.util.Date {
      return documentMetadataPCHelper.CreateTime
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at DocumentMetadataEditDV.email_sent.pcf: line 45, column 67
    function value_14 () : typekey.LanguageType {
      return documentMetadataPCHelper.Language
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at DocumentMetadataEditDV.email_sent.pcf: line 53, column 55
    function value_21 () : java.lang.String {
      return documentMetadataPCHelper.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityType_Input) at DocumentMetadataEditDV.email_sent.pcf: line 59, column 51
    function value_25 () : typekey.DocumentSecurityType {
      return documentMetadataPCHelper.SecurityType
    }
    
    // 'value' attribute on TypeKeyInput (id=Section_Input) at DocumentMetadataEditDV.email_sent.pcf: line 66, column 70
    function value_30 () : typekey.DocumentSection {
      return documentMetadataPCHelper.Section
    }
    
    // 'value' attribute on BooleanRadioInput (id=Hidden_Input) at DocumentMetadataEditDV.email_sent.pcf: line 71, column 52
    function value_35 () : java.lang.Boolean {
      return documentMetadataPCHelper.Obsolete
    }
    
    // 'value' attribute on TextInput (id=Recipient_Input) at DocumentMetadataEditDV.email_sent.pcf: line 29, column 53
    function value_4 () : java.lang.String {
      return documentMetadataPCHelper.Recipient
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at DocumentMetadataEditDV.email_sent.pcf: line 34, column 48
    function value_7 () : java.lang.String {
      return documentMetadataPCHelper.Name
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataEditDV.email_sent.pcf: line 45, column 67
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataEditDV.email_sent.pcf: line 45, column 67
    function verifyValueRangeIsAllowedType_17 ($$arg :  typekey.LanguageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataEditDV.email_sent.pcf: line 45, column 67
    function verifyValueRange_18 () : void {
      var __valueRangeArg = LanguageType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=Language_Input) at DocumentMetadataEditDV.email_sent.pcf: line 45, column 67
    function visible_13 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on TypeKeyInput (id=Section_Input) at DocumentMetadataEditDV.email_sent.pcf: line 66, column 70
    function visible_29 () : java.lang.Boolean {
      return DocumentSection.getTypeKeys( false ).Count > 1
    }
    
    property get documentDetailsApplicationHelper () : gw.document.DocumentDetailsApplicationHelper {
      return getRequireValue("documentDetailsApplicationHelper", 0) as gw.document.DocumentDetailsApplicationHelper
    }
    
    property set documentDetailsApplicationHelper ($arg :  gw.document.DocumentDetailsApplicationHelper) {
      setRequireValue("documentDetailsApplicationHelper", 0, $arg)
    }
    
    property get documentMetadataPCHelper () : gw.api.web.document.DocumentMetadataPCHelper {
      return getVariableValue("documentMetadataPCHelper", 0) as gw.api.web.document.DocumentMetadataPCHelper
    }
    
    property set documentMetadataPCHelper ($arg :  gw.api.web.document.DocumentMetadataPCHelper) {
      setVariableValue("documentMetadataPCHelper", 0, $arg)
    }
    
    property get fromTemplate () : boolean {
      return getRequireValue("fromTemplate", 0) as java.lang.Boolean
    }
    
    property set fromTemplate ($arg :  boolean) {
      setRequireValue("fromTemplate", 0, $arg)
    }
    
    
  }
  
  
}