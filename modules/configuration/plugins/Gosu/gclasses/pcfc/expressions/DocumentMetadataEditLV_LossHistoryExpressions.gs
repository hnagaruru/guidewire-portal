package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/DocumentMetadataEditLV.LossHistory.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentMetadataEditLV_LossHistoryExpressions {
  @javax.annotation.Generated("config/web/pcf/document/DocumentMetadataEditLV.LossHistory.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentMetadataEditLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataEditLV.LossHistory.pcf: line 24, column 53
    function initialValue_0 () : gw.api.web.document.DocumentPCContext {
      return DocumentApplicationContext as gw.api.web.document.DocumentPCContext
    }
    
    // 'value' attribute on TextCell (id=DocumentName_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 52, column 34
    function sortValue_1 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 105, column 51
    function sortValue_10 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=SecurityType_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 112, column 53
    function sortValue_11 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.SecurityType
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 119, column 45
    function sortValue_12 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Type
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 58, column 41
    function sortValue_2 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Description
    }
    
    // 'value' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 67, column 41
    function sortValue_3 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.MimeType
    }
    
    // 'value' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 75, column 69
    function sortValue_4 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Language
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 81, column 36
    function sortValue_6 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Author
    }
    
    // 'value' attribute on TextCell (id=Recipient_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 87, column 39
    function sortValue_7 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Recipient
    }
    
    // 'value' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 98, column 54
    function sortValue_8 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Level
    }
    
    // 'toRemove' attribute on RowIterator at DocumentMetadataEditLV.LossHistory.pcf: line 34, column 54
    function toRemove_66 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : void {
      DocumentCreationInfos.remove(DocumentCreationInfo); DocumentCreationInfo.Document.remove()
    }
    
    // 'value' attribute on RowIterator at DocumentMetadataEditLV.LossHistory.pcf: line 34, column 54
    function value_67 () : gw.document.DocumentCreationInfo[] {
      return DocumentCreationInfos.toTypedArray()
    }
    
    // 'visible' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 75, column 69
    function visible_5 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 98, column 54
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
  
  @javax.annotation.Generated("config/web/pcf/document/DocumentMetadataEditLV.LossHistory.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DocumentMetadataEditLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=DocumentName_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 52, column 34
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 58, column 41
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 75, column 69
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 81, column 36
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Author = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Recipient_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 87, column 39
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Recipient = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 105, column 51
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Status = (__VALUE_TO_SET as typekey.DocumentStatusType)
    }
    
    // 'value' attribute on TypeKeyCell (id=SecurityType_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 112, column 53
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.SecurityType = (__VALUE_TO_SET as typekey.DocumentSecurityType)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 46, column 32
    function icon_14 () : java.lang.String {
      return document.Icon
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataEditLV.LossHistory.pcf: line 38, column 33
    function initialValue_13 () : entity.Document {
      return DocumentCreationInfo.Document
    }
    
    // RowIterator at DocumentMetadataEditLV.LossHistory.pcf: line 34, column 54
    function initializeVariables_65 () : void {
        document = DocumentCreationInfo.Document;

    }
    
    // 'optionLabel' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 67, column 41
    function optionLabel_25 (VALUE :  java.lang.String) : java.lang.String {
      return gw.document.DocumentsUtilBase.getMimeTypeDescription(VALUE)
    }
    
    // 'optionLabel' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 98, column 54
    function optionLabel_48 (VALUE :  gw.api.domain.linkedobject.LinkedObjectContainer) : java.lang.String {
      return Note.getLevelDisplayString(VALUE)
    }
    
    // 'valueRange' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 67, column 41
    function valueRange_26 () : java.lang.Object {
      return gw.document.DocumentsUtilBase.getMimeTypes()
    }
    
    // 'valueRange' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 75, column 69
    function valueRange_33 () : java.lang.Object {
      return LanguageType.getTypeKeys( false )
    }
    
    // 'valueRange' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 98, column 54
    function valueRange_49 () : java.lang.Object {
      return documentPCContext.GenerateLevels
    }
    
    // 'value' attribute on TextCell (id=DocumentName_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 52, column 34
    function valueRoot_17 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TextCell (id=DocumentName_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 52, column 34
    function value_15 () : java.lang.String {
      return document.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 58, column 41
    function value_19 () : java.lang.String {
      return document.Description
    }
    
    // 'value' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 67, column 41
    function value_23 () : java.lang.String {
      return document.MimeType
    }
    
    // 'value' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 75, column 69
    function value_30 () : typekey.LanguageType {
      return document.Language
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 81, column 36
    function value_38 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on TextCell (id=Recipient_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 87, column 39
    function value_42 () : java.lang.String {
      return document.Recipient
    }
    
    // 'value' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 98, column 54
    function value_46 () : gw.api.domain.linkedobject.LinkedObjectContainer {
      return document.Level
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 105, column 51
    function value_54 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=SecurityType_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 112, column 53
    function value_58 () : typekey.DocumentSecurityType {
      return document.SecurityType
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 119, column 45
    function value_62 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'valueRange' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 67, column 41
    function verifyValueRangeIsAllowedType_27 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 67, column 41
    function verifyValueRangeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 75, column 69
    function verifyValueRangeIsAllowedType_34 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 75, column 69
    function verifyValueRangeIsAllowedType_34 ($$arg :  typekey.LanguageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 98, column 54
    function verifyValueRangeIsAllowedType_50 ($$arg :  gw.api.domain.linkedobject.LinkedObjectContainer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 98, column 54
    function verifyValueRangeIsAllowedType_50 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=MimeType_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 67, column 41
    function verifyValueRange_28 () : void {
      var __valueRangeArg = gw.document.DocumentsUtilBase.getMimeTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_27(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 75, column 69
    function verifyValueRange_35 () : void {
      var __valueRangeArg = LanguageType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_34(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 98, column 54
    function verifyValueRange_51 () : void {
      var __valueRangeArg = documentPCContext.GenerateLevels
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_50(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeCell (id=Language_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 75, column 69
    function visible_36 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on RangeCell (id=RelatedTo_Cell) at DocumentMetadataEditLV.LossHistory.pcf: line 98, column 54
    function visible_52 () : java.lang.Boolean {
      return documentPCContext.LevelsVisible
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