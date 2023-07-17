package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMPartCumulDetailsPanelSet.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPartCumulDetailsPanelSet_IMSignPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMPartCumulDetailsPanelSet.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPartCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMPartCumulDetailsPanelSet.IMSignPart.pcf: line 14, column 59
    function initialValue_0 () : java.util.List<entity.IMCoveragePart> {
      return imLine.VersionList.IMCoverageParts.map( \ i -> i.AllVersions.last() )
    }
    
    // 'initialValue' attribute on Variable at IMPartCumulDetailsPanelSet.IMSignPart.pcf: line 18, column 33
    function initialValue_1 () : entity.IMSignPart {
      return covPartIterable.firstWhere( \ part -> part typeis IMSignPart ) as IMSignPart
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartCumulDetailsPanelSet.IMSignPart.pcf: line 29, column 28
    function sortBy_2 (imSign :  entity.IMSign) : java.lang.Object {
      return imSign.SignNumber
    }
    
    // 'value' attribute on PanelIterator at IMPartCumulDetailsPanelSet.IMSignPart.pcf: line 26, column 39
    function value_6 () : entity.IMSign[] {
      return imSignPart.VersionList.IMSigns.map( \ i -> i.AllVersions.last() ).toTypedArray()
    }
    
    property get covPartIterable () : java.util.List<entity.IMCoveragePart> {
      return getVariableValue("covPartIterable", 0) as java.util.List<entity.IMCoveragePart>
    }
    
    property set covPartIterable ($arg :  java.util.List<entity.IMCoveragePart>) {
      setVariableValue("covPartIterable", 0, $arg)
    }
    
    property get imLine () : InlandMarineLine {
      return getRequireValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setRequireValue("imLine", 0, $arg)
    }
    
    property get imSignPart () : entity.IMSignPart {
      return getVariableValue("imSignPart", 0) as entity.IMSignPart
    }
    
    property set imSignPart ($arg :  entity.IMSignPart) {
      setVariableValue("imSignPart", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMPartCumulDetailsPanelSet.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends IMPartCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPartCumulDetailsPanelSet.IMSignPart.pcf: line 31, column 128
    function def_onEnter_4 (def :  pcf.IMCostLV) : void {
      def.onEnter(imSign.VersionList.Coverages.flatMap(\ c -> c.Costs ).flatMap(\ c -> c.AllVersions).toList())
    }
    
    // 'def' attribute on PanelRef at IMPartCumulDetailsPanelSet.IMSignPart.pcf: line 31, column 128
    function def_refreshVariables_5 (def :  pcf.IMCostLV) : void {
      def.refreshVariables(imSign.VersionList.Coverages.flatMap(\ c -> c.Costs ).flatMap(\ c -> c.AllVersions).toList())
    }
    
    // 'label' attribute on Verbatim at IMPartCumulDetailsPanelSet.IMSignPart.pcf: line 33, column 43
    function label_3 () : java.lang.String {
      return imSign.DisplayName
    }
    
    property get imSign () : entity.IMSign {
      return getIteratedValue(1) as entity.IMSign
    }
    
    
  }
  
  
}