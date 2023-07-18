package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policy/IMRatingCumulPanelSet.scroll.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMRatingCumulPanelSet_scrollExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMRatingCumulPanelSet.scroll.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMRatingCumulPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at IMRatingCumulPanelSet.scroll.pcf: line 17, column 24
    function sortBy_0 (imPartSubtype :  typekey.IMCoveragePart) : java.lang.Object {
      return imPartSubtype.DisplayName
    }
    
    // 'value' attribute on PanelIterator at IMRatingCumulPanelSet.scroll.pcf: line 14, column 44
    function value_8 () : typekey.IMCoveragePart[] {
      return imLine.VersionList.IMCoverageParts.map( \ part -> part.AllVersions.last() ).toTypedArray()*.Subtype
    }
    
    property get imLine () : InlandMarineLine {
      return getRequireValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setRequireValue("imLine", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMRatingCumulPanelSet.scroll.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends IMRatingCumulPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMRatingCumulPanelSet.scroll.pcf: line 20, column 31
    function def_onEnter_1 (def :  pcf.IMPartCumulDetailsPanelSet_ContractorsEquipPart) : void {
      def.onEnter(imLine)
    }
    
    // 'def' attribute on PanelRef at IMRatingCumulPanelSet.scroll.pcf: line 20, column 31
    function def_onEnter_3 (def :  pcf.IMPartCumulDetailsPanelSet_IMAccountsRecPart) : void {
      def.onEnter(imLine)
    }
    
    // 'def' attribute on PanelRef at IMRatingCumulPanelSet.scroll.pcf: line 20, column 31
    function def_onEnter_5 (def :  pcf.IMPartCumulDetailsPanelSet_IMSignPart) : void {
      def.onEnter(imLine)
    }
    
    // 'def' attribute on PanelRef at IMRatingCumulPanelSet.scroll.pcf: line 20, column 31
    function def_refreshVariables_2 (def :  pcf.IMPartCumulDetailsPanelSet_ContractorsEquipPart) : void {
      def.refreshVariables(imLine)
    }
    
    // 'def' attribute on PanelRef at IMRatingCumulPanelSet.scroll.pcf: line 20, column 31
    function def_refreshVariables_4 (def :  pcf.IMPartCumulDetailsPanelSet_IMAccountsRecPart) : void {
      def.refreshVariables(imLine)
    }
    
    // 'def' attribute on PanelRef at IMRatingCumulPanelSet.scroll.pcf: line 20, column 31
    function def_refreshVariables_6 (def :  pcf.IMPartCumulDetailsPanelSet_IMSignPart) : void {
      def.refreshVariables(imLine)
    }
    
    // 'mode' attribute on PanelRef at IMRatingCumulPanelSet.scroll.pcf: line 20, column 31
    function mode_7 () : java.lang.Object {
      return imPartSubtype
    }
    
    property get imPartSubtype () : typekey.IMCoveragePart {
      return getIteratedValue(1) as typekey.IMCoveragePart
    }
    
    
  }
  
  
}