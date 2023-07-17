package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/DocumentTemplateSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentTemplateSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/DocumentTemplateSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentTemplateSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=TemplateID_Cell) at DocumentTemplateSearchResultsLV.pcf: line 21, column 60
    function sortValue_0 (documentTemplateSearchResult :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return documentTemplateSearchResult.TemplateID
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DocumentTemplateSearchResultsLV.pcf: line 25, column 54
    function sortValue_1 (documentTemplateSearchResult :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return documentTemplateSearchResult.Name
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=DocumentType_Cell) at DocumentTemplateSearchResultsLV.pcf: line 31, column 45
    function sortValue_2 (documentTemplateSearchResult :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return documentTemplateSearchResult.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Language_Cell) at DocumentTemplateSearchResultsLV.pcf: line 37, column 69
    function sortValue_3 (documentTemplateSearchResult :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return documentTemplateSearchResult.Language
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at DocumentTemplateSearchResultsLV.pcf: line 41, column 62
    function sortValue_5 (documentTemplateSearchResult :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return documentTemplateSearchResult.DateModified
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DocumentTemplateSearchResultsLV.pcf: line 45, column 63
    function sortValue_6 (documentTemplateSearchResult :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return documentTemplateSearchResult.DateEffective
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at DocumentTemplateSearchResultsLV.pcf: line 49, column 61
    function sortValue_7 (documentTemplateSearchResult :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return documentTemplateSearchResult.DateExpires
    }
    
    // 'value' attribute on RowIterator at DocumentTemplateSearchResultsLV.pcf: line 16, column 58
    function value_31 () : entity.DocumentTemplateSearchResults[] {
      return documentTemplateSearchResultsList
    }
    
    // 'visible' attribute on TypeKeyCell (id=Language_Cell) at DocumentTemplateSearchResultsLV.pcf: line 37, column 69
    function visible_4 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get documentTemplateSearchResultsList () : entity.DocumentTemplateSearchResults[] {
      return getRequireValue("documentTemplateSearchResultsList", 0) as entity.DocumentTemplateSearchResults[]
    }
    
    property set documentTemplateSearchResultsList ($arg :  entity.DocumentTemplateSearchResults[]) {
      setRequireValue("documentTemplateSearchResultsList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/DocumentTemplateSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DocumentTemplateSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at DocumentTemplateSearchResultsLV.pcf: line 16, column 58
    function pickValue_30 () : gw.plugin.document.IDocumentTemplateDescriptor {
      return documentTemplateSearchResult.loadDescriptor()
    }
    
    // 'value' attribute on TextCell (id=TemplateID_Cell) at DocumentTemplateSearchResultsLV.pcf: line 21, column 60
    function valueRoot_9 () : java.lang.Object {
      return documentTemplateSearchResult
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DocumentTemplateSearchResultsLV.pcf: line 25, column 54
    function value_11 () : java.lang.String {
      return documentTemplateSearchResult.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=DocumentType_Cell) at DocumentTemplateSearchResultsLV.pcf: line 31, column 45
    function value_14 () : typekey.DocumentType {
      return documentTemplateSearchResult.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Language_Cell) at DocumentTemplateSearchResultsLV.pcf: line 37, column 69
    function value_17 () : typekey.LanguageType {
      return documentTemplateSearchResult.Language
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at DocumentTemplateSearchResultsLV.pcf: line 41, column 62
    function value_21 () : java.util.Date {
      return documentTemplateSearchResult.DateModified
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DocumentTemplateSearchResultsLV.pcf: line 45, column 63
    function value_24 () : java.util.Date {
      return documentTemplateSearchResult.DateEffective
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at DocumentTemplateSearchResultsLV.pcf: line 49, column 61
    function value_27 () : java.util.Date {
      return documentTemplateSearchResult.DateExpires
    }
    
    // 'value' attribute on TextCell (id=TemplateID_Cell) at DocumentTemplateSearchResultsLV.pcf: line 21, column 60
    function value_8 () : java.lang.String {
      return documentTemplateSearchResult.TemplateID
    }
    
    // 'visible' attribute on TypeKeyCell (id=Language_Cell) at DocumentTemplateSearchResultsLV.pcf: line 37, column 69
    function visible_19 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get documentTemplateSearchResult () : entity.DocumentTemplateSearchResults {
      return getIteratedValue(1) as entity.DocumentTemplateSearchResults
    }
    
    
  }
  
  
}