package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/DocumentMetadataInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentMetadataInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/document/DocumentMetadataInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentMetadataInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NameLink) at DocumentMetadataInputSet.default.pcf: line 73, column 83
    function action_30 () : void {
      document.downloadContent()
    }
    
    // 'available' attribute on Link (id=NameLink) at DocumentMetadataInputSet.default.pcf: line 73, column 83
    function available_29 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(document, documentActionsEnabled)
    }
    
    // 'available' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 36, column 60
    function available_3 () : java.lang.Boolean {
      return documentMetadataPCHelper.AllowFieldsSubset
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 171, column 65
    function defaultSetter_108 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on CheckBoxInput (id=relatedToEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 179, column 60
    function defaultSetter_120 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.LevelEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 194, column 57
    function defaultSetter_128 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Level = (__VALUE_TO_SET as gw.api.domain.linkedobject.LinkedObjectContainer)
    }
    
    // 'value' attribute on CheckBoxInput (id=statusEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 202, column 60
    function defaultSetter_140 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.StatusEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at DocumentMetadataInputSet.default.pcf: line 213, column 47
    function defaultSetter_147 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Status = (__VALUE_TO_SET as typekey.DocumentStatusType)
    }
    
    // 'value' attribute on CheckBoxInput (id=nameEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 50, column 60
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.DocumentNameEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=securityTypeEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 221, column 60
    function defaultSetter_154 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.SecurityTypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityType_Input) at DocumentMetadataInputSet.default.pcf: line 232, column 49
    function defaultSetter_161 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.SecurityType = (__VALUE_TO_SET as typekey.DocumentSecurityType)
    }
    
    // 'value' attribute on CheckBoxInput (id=typeEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 240, column 60
    function defaultSetter_168 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.TypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at DocumentMetadataInputSet.default.pcf: line 251, column 41
    function defaultSetter_175 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Type = (__VALUE_TO_SET as typekey.DocumentType)
    }
    
    // 'value' attribute on CheckBoxInput (id=sectionEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 259, column 60
    function defaultSetter_182 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.SectionEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Section_Input) at DocumentMetadataInputSet.default.pcf: line 270, column 68
    function defaultSetter_190 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Section = (__VALUE_TO_SET as typekey.DocumentSection)
    }
    
    // 'value' attribute on CheckBoxInput (id=obsoleteEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 278, column 60
    function defaultSetter_198 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.ObsoleteEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Obsolete_Input) at DocumentMetadataInputSet.default.pcf: line 288, column 50
    function defaultSetter_205 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Obsolete = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=DocumentName_Input) at DocumentMetadataInputSet.default.pcf: line 61, column 45
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=descriptionEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 82, column 60
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.DescriptionEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at DocumentMetadataInputSet.default.pcf: line 92, column 53
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=mimeTypeEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 100, column 60
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.MimeTypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.MimeType = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 36, column 60
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.AllFieldsEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=authorEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 122, column 60
    function defaultSetter_71 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.AuthorEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentMetadataInputSet.default.pcf: line 132, column 48
    function defaultSetter_78 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Author = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=recipientEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 140, column 60
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.RecipientEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Recipient_Input) at DocumentMetadataInputSet.default.pcf: line 150, column 51
    function defaultSetter_92 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Recipient = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 159, column 118
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.LanguageEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 171, column 65
    function editable_105 () : java.lang.Boolean {
      return documentMetadataPCHelper.Language == null or not fromTemplate
    }
    
    // 'editable' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function editable_57 () : java.lang.Boolean {
      return !fromTemplate
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataInputSet.default.pcf: line 17, column 104
    function initialValue_0 () : gw.api.web.document.DocumentMetadataPCHelper {
      return documentDetailsApplicationHelper as gw.api.web.document.DocumentMetadataPCHelper
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataInputSet.default.pcf: line 21, column 24
    function initialValue_1 () : Document {
      return documentMetadataPCHelper.Document
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataInputSet.default.pcf: line 28, column 23
    function initialValue_2 () : Boolean {
      return documentsActionsHelper.DocumentContentServerAvailable
    }
    
    // 'label' attribute on Link (id=NameLink) at DocumentMetadataInputSet.default.pcf: line 73, column 83
    function label_31 () : java.lang.Object {
      return documentMetadataPCHelper.Name
    }
    
    // 'optionLabel' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 194, column 57
    function optionLabel_130 (VALUE :  gw.api.domain.linkedobject.LinkedObjectContainer) : java.lang.String {
      return Note.getLevelDisplayString(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function optionLabel_61 (VALUE :  java.lang.String) : java.lang.String {
      return gw.document.DocumentsUtilBase.getMimeTypeDescription(VALUE)
    }
    
    // 'required' attribute on TextInput (id=DocumentName_Input) at DocumentMetadataInputSet.default.pcf: line 61, column 45
    function required_22 () : java.lang.Boolean {
      return !documentMetadataPCHelper.AllowFieldsSubset
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at DocumentMetadataInputSet.default.pcf: line 73, column 83
    function tooltip_32 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(document)
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 171, column 65
    function valueRange_110 () : java.lang.Object {
      return LanguageType.getTypeKeys( false )
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 194, column 57
    function valueRange_131 () : java.lang.Object {
      return documentMetadataPCHelper.GenerateLevels
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function valueRange_62 () : java.lang.Object {
      return gw.document.DocumentsUtilBase.getMimeTypes()
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 36, column 60
    function valueRoot_7 () : java.lang.Object {
      return documentMetadataPCHelper
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 171, column 65
    function value_107 () : typekey.LanguageType {
      return documentMetadataPCHelper.Language
    }
    
    // 'value' attribute on CheckBoxInput (id=relatedToEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 179, column 60
    function value_119 () : java.lang.Boolean {
      return documentMetadataPCHelper.LevelEnabled
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 194, column 57
    function value_127 () : gw.api.domain.linkedobject.LinkedObjectContainer {
      return documentMetadataPCHelper.Level
    }
    
    // 'value' attribute on CheckBoxInput (id=statusEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 202, column 60
    function value_139 () : java.lang.Boolean {
      return documentMetadataPCHelper.StatusEnabled
    }
    
    // 'value' attribute on CheckBoxInput (id=nameEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 50, column 60
    function value_14 () : java.lang.Boolean {
      return documentMetadataPCHelper.DocumentNameEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at DocumentMetadataInputSet.default.pcf: line 213, column 47
    function value_146 () : typekey.DocumentStatusType {
      return documentMetadataPCHelper.Status
    }
    
    // 'value' attribute on CheckBoxInput (id=securityTypeEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 221, column 60
    function value_153 () : java.lang.Boolean {
      return documentMetadataPCHelper.SecurityTypeEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityType_Input) at DocumentMetadataInputSet.default.pcf: line 232, column 49
    function value_160 () : typekey.DocumentSecurityType {
      return documentMetadataPCHelper.SecurityType
    }
    
    // 'value' attribute on CheckBoxInput (id=typeEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 240, column 60
    function value_167 () : java.lang.Boolean {
      return documentMetadataPCHelper.TypeEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at DocumentMetadataInputSet.default.pcf: line 251, column 41
    function value_174 () : typekey.DocumentType {
      return documentMetadataPCHelper.Type
    }
    
    // 'value' attribute on CheckBoxInput (id=sectionEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 259, column 60
    function value_181 () : java.lang.Boolean {
      return documentMetadataPCHelper.SectionEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=Section_Input) at DocumentMetadataInputSet.default.pcf: line 270, column 68
    function value_189 () : typekey.DocumentSection {
      return documentMetadataPCHelper.Section
    }
    
    // 'value' attribute on CheckBoxInput (id=obsoleteEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 278, column 60
    function value_197 () : java.lang.Boolean {
      return documentMetadataPCHelper.ObsoleteEnabled
    }
    
    // 'value' attribute on BooleanRadioInput (id=Obsolete_Input) at DocumentMetadataInputSet.default.pcf: line 288, column 50
    function value_204 () : java.lang.Boolean {
      return documentMetadataPCHelper.Obsolete
    }
    
    // 'value' attribute on TextInput (id=DocumentName_Input) at DocumentMetadataInputSet.default.pcf: line 61, column 45
    function value_23 () : java.lang.String {
      return documentMetadataPCHelper.Name
    }
    
    // 'value' attribute on CheckBoxInput (id=descriptionEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 82, column 60
    function value_36 () : java.lang.Boolean {
      return documentMetadataPCHelper.DescriptionEnabled
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at DocumentMetadataInputSet.default.pcf: line 92, column 53
    function value_43 () : java.lang.String {
      return documentMetadataPCHelper.Description
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 36, column 60
    function value_5 () : java.lang.Boolean {
      return documentMetadataPCHelper.AllFieldsEnabled
    }
    
    // 'value' attribute on CheckBoxInput (id=mimeTypeEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 100, column 60
    function value_50 () : java.lang.Boolean {
      return documentMetadataPCHelper.MimeTypeEnabled
    }
    
    // 'value' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function value_58 () : java.lang.String {
      return documentMetadataPCHelper.MimeType
    }
    
    // 'value' attribute on CheckBoxInput (id=authorEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 122, column 60
    function value_70 () : java.lang.Boolean {
      return documentMetadataPCHelper.AuthorEnabled
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentMetadataInputSet.default.pcf: line 132, column 48
    function value_77 () : java.lang.String {
      return documentMetadataPCHelper.Author
    }
    
    // 'value' attribute on CheckBoxInput (id=recipientEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 140, column 60
    function value_84 () : java.lang.Boolean {
      return documentMetadataPCHelper.RecipientEnabled
    }
    
    // 'value' attribute on TextInput (id=Recipient_Input) at DocumentMetadataInputSet.default.pcf: line 150, column 51
    function value_91 () : java.lang.String {
      return documentMetadataPCHelper.Recipient
    }
    
    // 'value' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 159, column 118
    function value_98 () : java.lang.Boolean {
      return documentMetadataPCHelper.LanguageEnabled
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 171, column 65
    function verifyValueRangeIsAllowedType_111 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 171, column 65
    function verifyValueRangeIsAllowedType_111 ($$arg :  typekey.LanguageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 194, column 57
    function verifyValueRangeIsAllowedType_132 ($$arg :  gw.api.domain.linkedobject.LinkedObjectContainer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 194, column 57
    function verifyValueRangeIsAllowedType_132 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function verifyValueRangeIsAllowedType_63 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function verifyValueRangeIsAllowedType_63 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 171, column 65
    function verifyValueRange_112 () : void {
      var __valueRangeArg = LanguageType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_111(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 194, column 57
    function verifyValueRange_133 () : void {
      var __valueRangeArg = documentMetadataPCHelper.GenerateLevels
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_132(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function verifyValueRange_64 () : void {
      var __valueRangeArg = gw.document.DocumentsUtilBase.getMimeTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_63(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 171, column 65
    function visible_106 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 194, column 57
    function visible_126 () : java.lang.Boolean {
      return documentMetadataPCHelper.LevelsVisible
    }
    
    // 'visible' attribute on TypeKeyInput (id=Section_Input) at DocumentMetadataInputSet.default.pcf: line 270, column 68
    function visible_188 () : java.lang.Boolean {
      return DocumentSection.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on TextInput (id=DocumentName_Input) at DocumentMetadataInputSet.default.pcf: line 61, column 45
    function visible_21 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on ContentInput (id=DocumentLink) at DocumentMetadataInputSet.default.pcf: line 65, column 69
    function visible_33 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode and document != null
    }
    
    // 'visible' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 159, column 118
    function visible_97 () : java.lang.Boolean {
      return documentMetadataPCHelper.AllowFieldsSubset && LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get document () : Document {
      return getVariableValue("document", 0) as Document
    }
    
    property set document ($arg :  Document) {
      setVariableValue("document", 0, $arg)
    }
    
    property get documentActionsEnabled () : Boolean {
      return getVariableValue("documentActionsEnabled", 0) as Boolean
    }
    
    property set documentActionsEnabled ($arg :  Boolean) {
      setVariableValue("documentActionsEnabled", 0, $arg)
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
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get fromTemplate () : boolean {
      return getRequireValue("fromTemplate", 0) as java.lang.Boolean
    }
    
    property set fromTemplate ($arg :  boolean) {
      setRequireValue("fromTemplate", 0, $arg)
    }
    
    
  }
  
  
}