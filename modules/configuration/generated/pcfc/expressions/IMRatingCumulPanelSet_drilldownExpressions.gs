package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policy/IMRatingCumulPanelSet.drilldown.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMRatingCumulPanelSet_drilldownExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMRatingCumulPanelSet.drilldown.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMRatingCumulPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at IMRatingCumulPanelSet.drilldown.pcf: line 24, column 28
    function sortBy_0 (imPartSubtype :  typekey.IMCoveragePart) : java.lang.Object {
      return imPartSubtype.DisplayName
    }
    
    // 'value' attribute on TextCell (id=partname_Cell) at IMRatingCumulPanelSet.drilldown.pcf: line 31, column 50
    function sortValue_1 (imPartSubtype :  typekey.IMCoveragePart) : java.lang.Object {
      return imPartSubtype.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=partPremium_Cell) at IMRatingCumulPanelSet.drilldown.pcf: line 37, column 29
    function sortValue_2 (imPartSubtype :  typekey.IMCoveragePart) : java.lang.Object {
      return imLine.coveragePartPremium( imPartSubtype )
    }
    
    // 'value' attribute on RowIterator at IMRatingCumulPanelSet.drilldown.pcf: line 21, column 48
    function value_10 () : typekey.IMCoveragePart[] {
      return imLine.VersionList.IMCoverageParts.map( \ part -> part.AllVersions.last() ).toTypedArray()*.Subtype
    }
    
    property get imLine () : InlandMarineLine {
      return getRequireValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setRequireValue("imLine", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMRatingCumulPanelSet.drilldown.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IMRatingCumulPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=partname_Cell) at IMRatingCumulPanelSet.drilldown.pcf: line 31, column 50
    function action_3 () : void {
      IMRatingCumulPopup.push( imLine, imPartSubtype )
    }
    
    // 'action' attribute on TextCell (id=partname_Cell) at IMRatingCumulPanelSet.drilldown.pcf: line 31, column 50
    function action_dest_4 () : pcf.api.Destination {
      return pcf.IMRatingCumulPopup.createDestination( imLine, imPartSubtype )
    }
    
    // 'value' attribute on TextCell (id=partname_Cell) at IMRatingCumulPanelSet.drilldown.pcf: line 31, column 50
    function valueRoot_6 () : java.lang.Object {
      return imPartSubtype
    }
    
    // 'value' attribute on TextCell (id=partname_Cell) at IMRatingCumulPanelSet.drilldown.pcf: line 31, column 50
    function value_5 () : java.lang.String {
      return imPartSubtype.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=partPremium_Cell) at IMRatingCumulPanelSet.drilldown.pcf: line 37, column 29
    function value_8 () : gw.pl.currency.MonetaryAmount {
      return imLine.coveragePartPremium( imPartSubtype )
    }
    
    property get imPartSubtype () : typekey.IMCoveragePart {
      return getIteratedValue(1) as typekey.IMCoveragePart
    }
    
    
  }
  
  
}