package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AffinityGroupDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AffinityGroupDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at AffinityGroupDetailScreen.pcf: line 68, column 61
    function def_onEnter_11 (def :  pcf.AffinityGroupProducerCodesLV) : void {
      def.onEnter(affinityGroup)
    }
    
    // 'def' attribute on PanelRef at AffinityGroupDetailScreen.pcf: line 19, column 55
    function def_onEnter_2 (def :  pcf.AffinityGroupDetailDV) : void {
      def.onEnter(affinityGroup)
    }
    
    // 'def' attribute on PanelRef at AffinityGroupDetailScreen.pcf: line 25, column 61
    function def_onEnter_4 (def :  pcf.AffinityGroupJurisdictionsLV) : void {
      def.onEnter(affinityGroup)
    }
    
    // 'def' attribute on PanelRef at AffinityGroupDetailScreen.pcf: line 38, column 56
    function def_onEnter_9 (def :  pcf.AffinityGroupProductsLV) : void {
      def.onEnter(affinityGroup)
    }
    
    // 'def' attribute on PanelRef at AffinityGroupDetailScreen.pcf: line 38, column 56
    function def_refreshVariables_10 (def :  pcf.AffinityGroupProductsLV) : void {
      def.refreshVariables(affinityGroup)
    }
    
    // 'def' attribute on PanelRef at AffinityGroupDetailScreen.pcf: line 68, column 61
    function def_refreshVariables_12 (def :  pcf.AffinityGroupProducerCodesLV) : void {
      def.refreshVariables(affinityGroup)
    }
    
    // 'def' attribute on PanelRef at AffinityGroupDetailScreen.pcf: line 19, column 55
    function def_refreshVariables_3 (def :  pcf.AffinityGroupDetailDV) : void {
      def.refreshVariables(affinityGroup)
    }
    
    // 'def' attribute on PanelRef at AffinityGroupDetailScreen.pcf: line 25, column 61
    function def_refreshVariables_5 (def :  pcf.AffinityGroupJurisdictionsLV) : void {
      def.refreshVariables(affinityGroup)
    }
    
    // EditButtons at AffinityGroupDetailScreen.pcf: line 12, column 55
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on AddMenuItemIterator at AffinityGroupDetailScreen.pcf: line 50, column 59
    function value_8 () : gw.api.productmodel.Product[] {
      return gw.api.productmodel.ProductLookup.getAll().toTypedArray()
    }
    
    // 'editVisible' attribute on EditButtons at AffinityGroupDetailScreen.pcf: line 12, column 55
    function visible_0 () : java.lang.Boolean {
      return perm.System.affinitygroupadmin
    }
    
    property get affinityGroup () : AffinityGroup {
      return getRequireValue("affinityGroup", 0) as AffinityGroup
    }
    
    property set affinityGroup ($arg :  AffinityGroup) {
      setRequireValue("affinityGroup", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AffinityGroupDetailScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=Product) at AffinityGroupDetailScreen.pcf: line 55, column 144
    function label_6 () : java.lang.Object {
      return product.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=Product) at AffinityGroupDetailScreen.pcf: line 55, column 144
    function toCreateAndAdd_7 (CheckedValues :  Object[]) : java.lang.Object {
      return gw.admin.affinitygroup.AffinityGroupUIHelper.addNewProductToAffinityGroup(affinityGroup, product.PublicID)
    }
    
    property get product () : gw.api.productmodel.Product {
      return getIteratedValue(1) as gw.api.productmodel.Product
    }
    
    
  }
  
  
}