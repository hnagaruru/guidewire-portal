package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPOutdoorProp.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageBOPOutdoorPropLimTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageBOPOutdoorPropLimType> implements productmodel.PackageBOPOutdoorPropLimType {
  public PackageBOPOutdoorPropLimTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPOutdoorProp getBOPOutdoorProp() {
    return (productmodel.BOPOutdoorProp)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPOutdoorProp getCoverage() {
    return (productmodel.BOPOutdoorProp)getClause();
  }
  
  
}