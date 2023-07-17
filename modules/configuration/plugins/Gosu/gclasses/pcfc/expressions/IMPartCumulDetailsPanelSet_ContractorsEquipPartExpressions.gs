package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPartCumulDetailsPanelSet_ContractorsEquipPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPartCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf: line 25, column 97
    function def_onEnter_3 (def :  pcf.IMCostLV) : void {
      def.onEnter(part.VersionList.ContrEquipPartCovs.flatMap(\ c -> c.Costs).flatMap(\ c -> c.AllVersions).toList())
    }
    
    // 'def' attribute on PanelRef at IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf: line 25, column 97
    function def_refreshVariables_4 (def :  pcf.IMCostLV) : void {
      def.refreshVariables(part.VersionList.ContrEquipPartCovs.flatMap(\ c -> c.Costs).flatMap(\ c -> c.AllVersions).toList())
    }
    
    // 'initialValue' attribute on Variable at IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf: line 14, column 59
    function initialValue_0 () : java.util.List<entity.IMCoveragePart> {
      return imLine.VersionList.IMCoverageParts.map( \ i -> i.AllVersions.last() )
    }
    
    // 'initialValue' attribute on Variable at IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf: line 18, column 43
    function initialValue_1 () : entity.ContractorsEquipPart {
      return covPartIterable.firstWhere(\ p -> p typeis ContractorsEquipPart) as ContractorsEquipPart
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf: line 41, column 32
    function sortBy_5 (perEquipment :  entity.ContractorsEquipment) : java.lang.Object {
      return perEquipment.ContractorsEquipmentNumber
    }
    
    // 'value' attribute on PanelIterator (id=perEquipmentPanelIter) at IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf: line 38, column 57
    function value_9 () : entity.ContractorsEquipment[] {
      return part.VersionList.ContractorsEquipments.map( \ i -> i.AllVersions.last()).toTypedArray()
    }
    
    // 'visible' attribute on PanelRef at IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf: line 30, column 67
    function visible_10 () : java.lang.Boolean {
      return !part.VersionList.ContractorsEquipments.Empty
    }
    
    // 'visible' attribute on PanelRef at IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf: line 25, column 97
    function visible_2 () : java.lang.Boolean {
      return part.VersionList.ContrEquipPartCovs.flatMap(\ c -> c.Costs).Count > 0
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
    
    property get part () : entity.ContractorsEquipPart {
      return getVariableValue("part", 0) as entity.ContractorsEquipPart
    }
    
    property set part ($arg :  entity.ContractorsEquipPart) {
      setVariableValue("part", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends IMPartCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf: line 43, column 136
    function def_onEnter_7 (def :  pcf.IMCostLV) : void {
      def.onEnter(perEquipment.VersionList.Coverages.flatMap(\ c -> c.Costs).flatMap(\ c ->c.AllVersions).toList())
    }
    
    // 'def' attribute on PanelRef at IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf: line 43, column 136
    function def_refreshVariables_8 (def :  pcf.IMCostLV) : void {
      def.refreshVariables(perEquipment.VersionList.Coverages.flatMap(\ c -> c.Costs).flatMap(\ c ->c.AllVersions).toList())
    }
    
    // 'label' attribute on Verbatim at IMPartCumulDetailsPanelSet.ContractorsEquipPart.pcf: line 45, column 53
    function label_6 () : java.lang.String {
      return perEquipment.DisplayName
    }
    
    property get perEquipment () : entity.ContractorsEquipment {
      return getIteratedValue(1) as entity.ContractorsEquipment
    }
    
    
  }
  
  
}