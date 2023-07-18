package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/DocumentMetadataEditLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentMetadataEditLV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/document/DocumentMetadataEditLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentMetadataEditLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataEditLV.default.pcf: line 24, column 53
    function initialValue_0 () : gw.api.web.document.DocumentPCContext {
      return DocumentApplicationContext as gw.api.web.document.DocumentPCContext
    }
    
    // 'value' attribute on TextCell (id=DocumentName_Cell) at DocumentMetadataEditLV.default.pcf: line 52, column 34
    function sortValue_1 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentMetadataEditLV.default.pcf: line 105, column 51
    function sortValue_10 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=SecurityType_Cell) at DocumentMetadataEditLV.default.pcf: line 112, column 53
    function sortValue_11 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.SecurityType
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentMetadataEditLV.default.pcf: line 119, column 45
    function sortValue_12 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Section_Cell) at DocumentMetadataEditLV.default.pcf: line 126, column 72
    function sortValue_13 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Section
    }
    
    // 'value' attribute on BooleanRadioCell (id=Obsolete_Cell) at DocumentMetadataEditLV.default.pcf: line 132, column 38
    function sortValue_15 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Obsolete
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DocumentMetadataEditLV.default.pcf: line 58, column 41
    function sortValue_2 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Description
    }
    
    // 'value' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.default.pcf: line 67, column 41
    function sortValue_3 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.MimeType
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentMetadataEditLV.default.pcf: line 73, column 36
    function sortValue_4 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Author
    }
    
    // 'value' attribute on TextCell (id=Recipient_Cell) at DocumentMetadataEditLV.default.pcf: line 79, column 39
    function sortValue_5 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Recipient
    }
    
    // 'value' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.default.pcf: line 87, column 69
    function sortValue_6 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Language
    }
    
    // 'value' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.default.pcf: line 98, column 54
    function sortValue_8 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Level
    }
    
    // 'toRemove' attribute on RowIterator at DocumentMetadataEditLV.default.pcf: line 34, column 54
    function toRemove_81 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : void {
      DocumentCreationInfos.remove(DocumentCreationInfo); DocumentCreationInfo.Document.remove()
    }
    
    // 'value' attribute on RowIterator at DocumentMetadataEditLV.default.pcf: line 34, column 54
    function value_82 () : gw.document.DocumentCreationInfo[] {
      return DocumentCreationInfos.toTypedArray()
    }
    
    // 'visible' attribute on TypeKeyCell (id=Section_Cell) at DocumentMetadataEditLV.default.pcf: line 126, column 72
    function visible_14 () : java.lang.Boolean {
      return DocumentSection.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.default.pcf: line 87, column 69
    function visible_7 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.default.pcf: line 98, column 54
    function visible_9 () : java.lang.Boolean {
      return documentPCContext.LevelsVisible
    }
    
    property get DocumentApplicationContext () : gw.document.DocumentApplicationContext {
      return getRequireValue("DocumentApplicationContext", 0) as gw.document.DocumentApplicationContext
    }
    
    property set DocumentApplicationContext ($arg :  gw.document.DocumentApplicationContext) {
      setRequireValue("DocumentApplicationContext", 0, $arg)
    }
    
    property get DocumentCreationInfos () : java.util.Collection<gw.document.DocumentCreationInfo> {
      return getRequireValue("DocumentCreationInfos", 0) as java.util.Collection<gw.document.DocumentCreationInfo>
    }
    
    property set DocumentCreationInfos ($arg :  java.util.Collection<gw.document.DocumentCreationInfo>) {
      setRequireValue("DocumentCreationInfos", 0, $arg)
    }
    
    property get documentPCContext () : gw.api.web.document.DocumentPCContext {
      return getVariableValue("documentPCContext", 0) as gw.api.web.document.DocumentPCContext
    }
    
    property set documentPCContext ($arg :  gw.api.web.document.DocumentPCContext) {
      setVariableValue("documentPCContext", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/document/DocumentMetadataEditLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DocumentMetadataEditLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=DocumentName_Cell) at DocumentMetadataEditLV.default.pcf: line 52, column 34
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DocumentMetadataEditLV.default.pcf: line 58, column 41
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.default.pcf: line 67, column 41
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.MimeType = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentMetadataEditLV.default.pcf: line 73, column 36
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Author = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Recipient_Cell) at DocumentMetadataEditLV.default.pcf: line 79, column 39
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Recipient = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.default.pcf: line 87, column 69
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.default.pcf: line 98, column 54
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Level = (__VALUE_TO_SET as gw.api.domain.linkedobject.LinkedObjectContainer)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentMetadataEditLV.default.pcf: line 105, column 51
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Status = (__VALUE_TO_SET as typekey.DocumentStatusType)
    }
    
    // 'value' attribute on TypeKeyCell (id=SecurityType_Cell) at DocumentMetadataEditLV.default.pcf: line 112, column 53
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.SecurityType = (__VALUE_TO_SET as typekey.DocumentSecurityType)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentMetadataEditLV.default.pcf: line 119, column 45
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Type = (__VALUE_TO_SET as typekey.DocumentType)
    }
    
    // 'value' attribute on TypeKeyCell (id=Section_Cell) at DocumentMetadataEditLV.default.pcf: line 126, column 72
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Section = (__VALUE_TO_SET as typekey.DocumentSection)
    }
    
    // 'value' attribute on BooleanRadioCell (id=Obsolete_Cell) at DocumentMetadataEditLV.default.pcf: line 132, column 38
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Obsolete = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at DocumentMetadataEditLV.default.pcf: line 46, column 32
    function icon_17 () : java.lang.String {
      return document.Icon
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataEditLV.default.pcf: line 38, column 33
    function initialValue_16 () : entity.Document {
      return DocumentCreationInfo.Document
    }
    
    // RowIterator at DocumentMetadataEditLV.default.pcf: line 34, column 54
    function initializeVariables_80 () : void {
        document = DocumentCreationInfo.Document;

    }
    
    // 'optionLabel' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.default.pcf: line 67, column 41
    function optionLabel_29 (VALUE :  java.lang.String) : java.lang.String {
      return gw.document.DocumentsUtilBase.getMimeTypeDescription(VALUE)
    }
    
    // 'optionLabel' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.default.pcf: line 98, column 54
    function optionLabel_53 (VALUE :  gw.api.domain.linkedobject.LinkedObjectContainer) : java.lang.String {
      return Note.getLevelDisplayString(VALUE)
    }
    
    // 'valueRange' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.default.pcf: line 67, column 41
    function valueRange_30 () : java.lang.Object {
      return gw.document.DocumentsUtilBase.getMimeTypes()
    }
    
    // 'valueRange' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.default.pcf: line 87, column 69
    function valueRange_45 () : java.lang.Object {
      return LanguageType.getTypeKeys( false )
    }
    
    // 'valueRange' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.default.pcf: line 98, column 54
    function valueRange_54 () : java.lang.Object {
      return documentPCContext.GenerateLevels
    }
    
    // 'value' attribute on TextCell (id=DocumentName_Cell) at DocumentMetadataEditLV.default.pcf: line 52, column 34
    function valueRoot_20 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TextCell (id=DocumentName_Cell) at DocumentMetadataEditLV.default.pcf: line 52, column 34
    function value_18 () : java.lang.String {
      return document.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DocumentMetadataEditLV.default.pcf: line 58, column 41
    function value_22 () : java.lang.String {
      return document.Description
    }
    
    // 'value' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.default.pcf: line 67, column 41
    function value_26 () : java.lang.String {
      return document.MimeType
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentMetadataEditLV.default.pcf: line 73, column 36
    function value_34 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on TextCell (id=Recipient_Cell) at DocumentMetadataEditLV.default.pcf: line 79, column 39
    function value_38 () : java.lang.String {
      return document.Recipient
    }
    
    // 'value' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.default.pcf: line 87, column 69
    function value_42 () : typekey.LanguageType {
      return document.Language
    }
    
    // 'value' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.default.pcf: line 98, column 54
    function value_50 () : gw.api.domain.linkedobject.LinkedObjectContainer {
      return document.Level
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentMetadataEditLV.default.pcf: line 105, column 51
    function value_59 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=SecurityType_Cell) at DocumentMetadataEditLV.default.pcf: line 112, column 53
    function value_63 () : typekey.DocumentSecurityType {
      return document.SecurityType
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentMetadataEditLV.default.pcf: line 119, column 45
    function value_67 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Section_Cell) at DocumentMetadataEditLV.default.pcf: line 126, column 72
    function value_71 () : typekey.DocumentSection {
      return document.Section
    }
    
    // 'value' attribute on BooleanRadioCell (id=Obsolete_Cell) at DocumentMetadataEditLV.default.pcf: line 132, column 38
    function value_76 () : java.lang.Boolean {
      return document.Obsolete
    }
    
    // 'valueRange' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.default.pcf: line 67, column 41
    function verifyValueRangeIsAllowedType_31 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.default.pcf: line 67, column 41
    function verifyValueRangeIsAllowedType_31 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.default.pcf: line 87, column 69
    function verifyValueRangeIsAllowedType_46 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.default.pcf: line 87, column 69
    function verifyValueRangeIsAllowedType_46 ($$arg :  typekey.LanguageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.default.pcf: line 98, column 54
    function verifyValueRangeIsAllowedType_55 ($$arg :  gw.api.domain.linkedobject.LinkedObjectContainer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.default.pcf: line 98, column 54
    function verifyValueRangeIsAllowedType_55 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.default.pcf: line 67, column 41
    function verifyValueRange_32 () : void {
      var __valueRangeArg = gw.document.DocumentsUtilBase.getMimeTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_31(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.default.pcf: line 87, column 69
    function verifyValueRange_47 () : void {
      var __valueRangeArg = LanguageType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_46(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.default.pcf: line 98, column 54
    function verifyValueRange_56 () : void {
      var __valueRangeArg = documentPCContext.GenerateLevels
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_55(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.default.pcf: line 87, column 69
    function visible_48 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.default.pcf: line 98, column 54
    function visible_57 () : java.lang.Boolean {
      return documentPCContext.LevelsVisible
    }
    
    // 'visible' attribute on TypeKeyCell (id=Section_Cell) at DocumentMetadataEditLV.default.pcf: line 126, column 72
    function visible_74 () : java.lang.Boolean {
      return DocumentSection.getTypeKeys( false ).Count > 1
    }
    
    property get DocumentCreationInfo () : gw.document.DocumentCreationInfo {
      return getIteratedValue(1) as gw.document.DocumentCreationInfo
    }
    
    property get document () : entity.Document {
      return getVariableValue("document", 1) as entity.Document
    }
    
    property set document ($arg :  entity.Document) {
      setVariableValue("document", 1, $arg)
    }
    
    
  }
  
  
}